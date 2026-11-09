import { portfolio } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function ExperienceSection() {
  return (
    <section id="experience" className="pt-10">
      <SectionHeader eyebrow="Experience" title="Recent work and responsibilities." />

      <div className="space-y-0">
        {portfolio.experience.map((item) => (
          <article
            key={`${item.company}-${item.title}`}
            className="grid gap-5 border-t border-slate-800/80 py-5 transition duration-200 hover:border-slate-700 md:grid-cols-[160px_minmax(0,1fr)]"
          >
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-violet-300/90">
              {item.period}
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-50">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-violet-200">{item.company}</p>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
