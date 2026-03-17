export function SectionDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`mx-auto flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] w-12 bg-desert-glow/40" />
      <div className="h-2 w-2 rounded-full bg-desert-glow/60" />
      <div className="h-[1px] w-12 bg-desert-glow/40" />
    </div>
  )
}
