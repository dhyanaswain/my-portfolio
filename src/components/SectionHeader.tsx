type SectionHeaderProps = {
  eyebrow: string
  title: string
}

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22rem] text-violet-300/90">
        {eyebrow}
      </p>
      <h2 className="text-[1.8rem] font-semibold leading-[1.05] tracking-[-0.06em] text-slate-50 sm:text-[2.25rem]">
        {title}
      </h2>
    </div>
  )
}
