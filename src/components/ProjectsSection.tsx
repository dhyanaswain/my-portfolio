import { portfolio } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function ProjectsSection() {
  return (
    <section id="projects" className="pt-10">
      <SectionHeader eyebrow="Selected projects" title="Products built to solve meaningful problems." />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {portfolio.projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/25 p-5 transition duration-200 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/40"
          >
            <span className="inline-flex rounded-full bg-violet-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-violet-200">
              Case study
            </span>

            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-50">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-[11px] text-sky-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
