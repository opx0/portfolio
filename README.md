# opxz.dev

Personal portfolio and resume distribution site built with Next.js, TypeScript, and Tailwind CSS.

## Development

```bash
bun install
bun dev
```

Production checks:

```bash
bun run lint
bun run build
```

## Resume workflow

The resume has two permanent public interfaces:

- `https://opxz.dev/resume` — canonical page for sharing
- `https://opxz.dev/resume.pdf` — direct PDF file
- `https://resume.opxz.dev` — memorable alias that redirects to the canonical page

The deployed site contains one resume artifact at `public/resume.pdf`. Resume history belongs in Git, not in versioned filenames.

Compile and export the resume from Overleaf with XeLaTeX, then replace the deployed artifact with:

```bash
./scripts/update-resume.sh ~/Downloads/resume.pdf
```

The script validates that the source is a PDF, copies it to `public/resume.pdf`, and displays the resulting Git status and diff summary. Review and publish it explicitly:

```bash
git add public/resume.pdf
git commit -m "Update resume"
git push
```

Vercel deploys the portfolio and resume together from this repository. Attach both `opxz.dev` and `resume.opxz.dev` to the same Vercel project; the application permanently redirects the resume subdomain to the canonical page. There is intentionally no LaTeX compilation or automatic commit pipeline.
