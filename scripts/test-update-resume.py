import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest


ROOT = Path(__file__).resolve().parents[1]


class ResumeUpdateTests(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.directory.cleanup)
        self.root = Path(self.directory.name)
        (self.root / "scripts").mkdir()
        (self.root / "public").mkdir()
        self.script = self.root / "scripts/update-resume.sh"
        shutil.copy2(ROOT / "scripts/update-resume.sh", self.script)
        self.destination = self.root / "public/resume.pdf"
        self.original = (ROOT / "public/resume.pdf").read_bytes()
        self.destination.write_bytes(self.original)
        self.source = self.root / "new resume.pdf"
        self.source.write_bytes(self.original + b"\n")
        subprocess.run(["git", "init", "-q", str(self.root)], check=True)

    def run_update(self, source=None, env=None):
        return subprocess.run(
            ["sh", str(self.script), str(source or self.source)],
            capture_output=True, text=True, env=env,
        )

    def test_repeat_is_noop(self):
        first = self.run_update()
        self.assertEqual(first.returncode, 0, first.stderr)
        self.assertEqual(self.destination.read_bytes(), self.source.read_bytes())
        stat = self.destination.stat()
        second = self.run_update()
        self.assertEqual(second.returncode, 0, second.stderr)
        self.assertIn("already up to date", second.stdout)
        self.assertEqual(self.destination.stat().st_mtime_ns, stat.st_mtime_ns)
        self.assertEqual(self.destination.stat().st_mode & 0o777, 0o644)

    def test_invalid_and_missing_input_preserve_existing_pdf(self):
        invalid = self.root / "invalid.pdf"
        invalid.write_text("not a PDF")
        for source in [invalid, self.root / "missing.pdf"]:
            with self.subTest(source=source.name):
                self.assertNotEqual(self.run_update(source).returncode, 0)
                self.assertEqual(self.destination.read_bytes(), self.original)

    def test_failed_copy_preserves_pdf_and_retry_converges(self):
        bin_dir = self.root / "bin"
        bin_dir.mkdir()
        fake_copy = bin_dir / "cp"
        fake_copy.write_text('#!/bin/sh\nprintf partial > "$3"\nexit 9\n')
        fake_copy.chmod(0o755)
        env = {**os.environ, "PATH": f"{bin_dir}:{os.environ['PATH']}"}
        self.assertNotEqual(self.run_update(env=env).returncode, 0)
        self.assertEqual(self.destination.read_bytes(), self.original)
        self.assertEqual(list((self.root / "public").glob(".resume.*")), [])
        result = self.run_update()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(self.destination.read_bytes(), self.source.read_bytes())

    def test_failed_rename_preserves_pdf_and_retry_converges(self):
        bin_dir = self.root / "bin"
        bin_dir.mkdir()
        fake_move = bin_dir / "mv"
        fake_move.write_text("#!/bin/sh\nexit 9\n")
        fake_move.chmod(0o755)
        env = {**os.environ, "PATH": f"{bin_dir}:{os.environ['PATH']}"}
        self.assertNotEqual(self.run_update(env=env).returncode, 0)
        self.assertEqual(self.destination.read_bytes(), self.original)
        self.assertEqual(list((self.root / "public").glob(".resume.*")), [])
        self.assertEqual(self.run_update().returncode, 0)
        self.assertEqual(self.destination.read_bytes(), self.source.read_bytes())

    def test_same_path_is_noop(self):
        result = self.run_update(self.destination)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("already up to date", result.stdout)


if __name__ == "__main__":
    unittest.main()
