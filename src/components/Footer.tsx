import { portfolio } from '../data/portfolio'

export function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-slate-800/80 pt-7">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2rem] text-violet-300/90">
            Let’s connect
          </p>
          <h3 className="text-[1.8rem] font-semibold leading-[1.08] tracking-[-0.05em] text-slate-50">
            Open to engineering, product, and full-stack opportunities.
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${portfolio.email}`}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-violet-500/30"
          >
            {portfolio.email}
          </a>
          <a
            href={portfolio.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/40 px-5 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-slate-500"
          >
            GitHub
          </a>
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/40 px-5 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-slate-500"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
