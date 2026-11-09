import { useState } from 'react'

import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { HighlightsSection } from './components/HighlightsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SectionHeader } from './components/SectionHeader'
import { SkillsSection } from './components/SkillsSection'
import { portfolio } from './data/portfolio'

function ResumePreview({
  isVisible,
  onMouseEnter,
  onMouseLeave,
}: {
  isVisible: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  return (
    <div
      className={[
        'absolute right-0 top-full z-50 mt-3 w-[280px] origin-top transition-all duration-500 ease-out',
        isVisible
          ? 'visible translate-y-0 opacity-100'
          : 'invisible translate-y-2 opacity-0',
      ].join(' ')}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="pointer-events-auto overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/95 shadow-2xl shadow-violet-950/40 backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-300">
          <span>Resume.pdf</span>
          <span className="rounded-full border border-violet-400/40 bg-violet-500/10 px-1.5 py-0.5 text-violet-200">
            PDF
          </span>
        </div>

        <div className="p-2">
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-white">
            <object
              data="/resume.pdf"
              type="application/pdf"
              aria-label="Resume preview"
              className="h-[320px] w-full bg-white"
            >
              <iframe
                title="Resume preview"
                src="/resume.pdf"
                className="h-[320px] w-full border-0"
              />
            </object>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [isResumePreviewVisible, setIsResumePreviewVisible] = useState(false)
  const contactHref = portfolio.email ? `mailto:${portfolio.email}` : '#contact'

  const showResumePreview = () => {
    setIsResumePreviewVisible(true)
  }

  const hideResumePreview = () => {
    setIsResumePreviewVisible(false)
  }
  return (
    <div className="min-h-screen bg-[#020817] text-slate-100 antialiased">
      <div className="mx-auto max-w-[1120px] px-4 py-5 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-40 -mx-4 border-b border-slate-800/70 bg-[#020817]/80 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4">
            <a href="#top" className="text-[0.7rem] font-extrabold uppercase tracking-[0.22rem] text-slate-50 transition hover:text-violet-200">
              DHYANA <span className="text-violet-300">SWAIN</span>
            </a>

            <nav
              className="flex flex-wrap items-center gap-5 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-slate-300"
              aria-label="Main navigation"
            >
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#experience" className="transition hover:text-white">Experience</a>
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#highlights" className="transition hover:text-white">Highlights</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={contactHref}
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/40 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:text-white"
              >
                Contact me
              </a>

              <div className="relative" onMouseLeave={hideResumePreview}>
                <a
                  href="/resume.pdf"
                  onMouseEnter={showResumePreview}
                  onFocus={showResumePreview}
                  onMouseLeave={hideResumePreview}
                  onBlur={hideResumePreview}
                  className="inline-flex items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/5 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/80"
                >
                  Resume
                </a>
                <ResumePreview
                  isVisible={isResumePreviewVisible}
                  onMouseEnter={() => setIsResumePreviewVisible(true)}
                  onMouseLeave={hideResumePreview}
                />
              </div>
            </div>
          </div>
        </header>

        <main id="top" className="space-y-8 pb-8 pt-2 sm:space-y-12">
          <HeroSection />

          <section id="about" className="pt-8">
            <SectionHeader eyebrow="About" title="Developer with a strong architecture mindset." />
            <div className="grid gap-6 md:grid-cols-2">
              <p className="text-base leading-8 text-slate-300">
                I am a Senior Software Developer with a passion for solving business problems through reliable software systems. I enjoy taking complex tasks and turning them into maintainable, scalable solutions that improve efficiency and user value.
              </p>
              <p className="text-base leading-8 text-slate-300">
                From frontend development and API work to architecture and mentoring, I focus on creating systems that are reusable, performant, and aligned with business goals.
              </p>
            </div>
          </section>

          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <HighlightsSection />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
