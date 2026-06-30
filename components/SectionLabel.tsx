export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-acid mb-6">
      <span className="w-4 h-px bg-acid" />
      {children}
    </span>
  );
}
