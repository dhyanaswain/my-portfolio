import { portfolio } from '../data/portfolio'

export function HeroSection() {
  return (
    <section className="grid items-center gap-8 pb-2 pt-6 lg:grid-cols-[1.55fr_0.75fr] lg:gap-10 lg:pt-8">
      <div>
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18rem] text-violet-300/90 sm:text-[11px]">
          {portfolio.title} • {portfolio.location}
        </p>

        <h1 className="max-w-[720px] text-[2.45rem] font-semibold leading-[0.88] tracking-[-0.07em] text-slate-50 sm:text-[3.5rem] lg:text-[4.7rem]">
          I design resilient systems and <span className="text-violet-300">scalable</span> digital experiences.
        </h1>

        <p className="mt-5 max-w-2xl text-[1rem] leading-7 text-slate-300 sm:text-[1.04rem]">
          {portfolio.summary}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-violet-500/30"
          >
            View work
          </a>
          <a
            href={`mailto:${portfolio.email}`}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 px-5 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-900/70"
          >
            Contact me
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {portfolio.stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-4 transition duration-200 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/60"
            >
              <div className="text-xl font-semibold text-white">{item.value}</div>
              <div className="mt-2 text-xs leading-5 text-slate-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <aside className="rounded-3xl border border-slate-800/80 bg-slate-900/35 p-6 shadow-2xl shadow-slate-950/40 transition duration-200 hover:border-slate-700 hover:bg-slate-900/45">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-2xl font-bold tracking-[0.1em] text-white shadow-lg shadow-violet-500/20">
          DS
        </div>

        <div className="mt-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.18rem] text-violet-300/80">
            Currently
          </p>
          <h2 className="mt-3 text-[1.7rem] font-semibold leading-tight tracking-[-0.05em] text-slate-50">
            Leading enterprise middleware, product discovery, and AI-enabled platform work.
          </h2>
        </div>

        <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-200">
          <li>Senior Software Developer at Walmart Global Technology</li>
          <li>Based in Bangalore, India</li>
          <li>Focused on architecture, experimentation, and resilient product delivery</li>
        </ul>
      </aside>
    </section>
  )
}
