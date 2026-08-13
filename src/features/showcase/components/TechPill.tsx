export function TechPill({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-surface-border bg-white/[0.03] px-2 py-1 text-[11px] text-muted-foreground">
      {label}
    </span>
  );
}
