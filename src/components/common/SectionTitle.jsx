export default function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-8 md:mb-10">
      <h2 className="text-2xl md:text-3xl font-bold font-display text-paper-text tracking-tight dark-bright">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-1 text-xs font-bold text-paper-text-muted tracking-[0.15em] uppercase">{subtitle}</p>
      )}
    </div>
  );
}
