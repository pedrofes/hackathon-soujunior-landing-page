export default function CtaButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-2xl border border-white/20 bg-[#171123] px-8 py-3 font-sans font-bold text-white transition-colors hover:bg-[#2A2140] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${className}`}
    >
      {children}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}
