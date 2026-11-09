import { portfolio } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function SkillsSection() {
  return (
    <section id="skills" className="pt-10">
      <SectionHeader eyebrow="Skills" title="Core tools and areas of focus." />

      <div className="flex flex-wrap gap-2.5">
        {portfolio.skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/30 px-3 py-1.5 text-sm text-slate-200 transition duration-200 hover:border-violet-400/50 hover:bg-violet-500/5"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
