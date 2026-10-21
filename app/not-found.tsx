import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found section-shell">
      <p className="mono-label">404 / A path that doesn&apos;t lead anywhere</p>
      <h1 className="display-heading">Not here.<br /><span className="serif-italic">But the work is.</span></h1>
      <p>This page may have moved, or the link may be incomplete.</p>
      <div className="hero-actions">
        <Link href="/#projects" className="btn-primary">Explore the projects ↗</Link>
        <Link href="/" className="text-link">Back to home</Link>
      </div>
    </section>
  );
}
