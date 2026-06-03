export default function TagLabel({ text }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-paper-accent tracking-[0.12em] uppercase">
      <span className="w-1 h-1 bg-paper-accent" />
      {text}
    </span>
  );
}
