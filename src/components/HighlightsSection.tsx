import { portfolio } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function HighlightsSection() {
  return (
    <section id="highlights" className="pt-10">
      <SectionHeader eyebrow="Highlights" title="What I bring to product and engineering teams." />

      <div className="space-y-3">
        {portfolio.highlights.map((entry) => (
          <div
            key={entry.title}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/20 p-4 transition duration-200 hover:border-slate-700 hover:bg-slate-900/35"
          >
            <div className="text-lg font-semibold text-slate-50">{entry.title}</div>
            <div className="mt-1 text-sm leading-7 text-slate-300">{entry.note}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
