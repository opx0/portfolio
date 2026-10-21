#!/bin/sh

set -eu

usage() {
  echo "Usage: $0 /path/to/resume.pdf" >&2
  exit 1
}

[ "$#" -eq 1 ] || usage

source_file=$1
script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
project_dir=$(dirname -- "$script_dir")
destination="$project_dir/public/resume.pdf"

if [ ! -f "$source_file" ]; then
  echo "Error: file not found: $source_file" >&2
  exit 1
fi

case "$(LC_ALL=C file -b -- "$source_file")" in
  PDF\ document*) ;;
  *)
    echo "Error: source is not a valid PDF: $source_file" >&2
    exit 1
    ;;
esac

if [ -f "$destination" ] && cmp -s -- "$source_file" "$destination"; then
  echo "Resume is already up to date."
  exit 0
fi

temporary_file=$(mktemp "$project_dir/public/.resume.XXXXXX")
trap 'rm -f -- "$temporary_file"' EXIT
trap 'exit 1' HUP INT TERM

cp -- "$source_file" "$temporary_file"
case "$(LC_ALL=C file -b -- "$temporary_file")" in
  PDF\ document*) ;;
  *)
    echo "Error: staged file is not a PDF." >&2
    exit 1
    ;;
esac
chmod 644 "$temporary_file"
mv -f -- "$temporary_file" "$destination"

echo "Updated public/resume.pdf"
echo
echo "Git status:"
git -C "$project_dir" status --short -- public/resume.pdf
echo
echo "Diff summary:"
git -C "$project_dir" diff --stat -- public/resume.pdf
