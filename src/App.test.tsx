import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import App from './App'
import { portfolio } from './data/portfolio'

afterEach(() => {
  cleanup()
  vi.unstubAllEnvs()
})

describe('Portfolio app', () => {
  it('renders the main hero content and navigation', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /I design resilient systems and scalable digital experiences\./i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /^About$/i })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: /^Experience$/i })).toHaveAttribute('href', '#experience')
    expect(screen.getByRole('link', { name: /^Projects$/i })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: /^Highlights$/i })).toHaveAttribute('href', '#highlights')
    expect(screen.getByRole('link', { name: /^Contact$/i })).toHaveAttribute('href', '#contact')
  })

  it('renders the core resume and contact actions', () => {
    render(<App />)

    const resumeLink = screen.getByRole('link', { name: /^Resume$/i })
    expect(resumeLink).toHaveAttribute('href', '/resume.pdf')

    const contactLinks = screen.getAllByRole('link', { name: /^Contact me$/i })
    expect(contactLinks).toHaveLength(2)
    contactLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', portfolio.email ? `mailto:${portfolio.email}` : '#contact')
    })

    if (portfolio.github) {
      expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', portfolio.github)
    } else {
      expect(screen.queryByRole('link', { name: /^GitHub$/i })).not.toBeInTheDocument()
    }

    if (portfolio.linkedin) {
      expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', portfolio.linkedin)
    } else {
      expect(screen.queryByRole('link', { name: /^LinkedIn$/i })).not.toBeInTheDocument()
    }
  })

  it('falls back to section anchors instead of placeholder contact links when values are missing', () => {
    vi.stubEnv('VITE_PORTFOLIO_EMAIL', 'yourname@example.com')
    vi.stubEnv('VITE_PORTFOLIO_GITHUB', 'https://github.com/yourusername')
    vi.stubEnv('VITE_PORTFOLIO_LINKEDIN', 'https://linkedin.com/in/yourusername')

    render(<App />)

    const contactLinks = screen.getAllByRole('link', { name: /^Contact me$/i })
    expect(contactLinks[0]).toHaveAttribute('href', '#contact')
    expect(screen.queryByRole('link', { name: /^yourname@example.com$/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /^GitHub$/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /^LinkedIn$/i })).not.toBeInTheDocument()
  })

  it('renders the professional experience section with all timeline entries', () => {
    render(<App />)

    expect(screen.getByText('Recent work and responsibilities.')).toBeInTheDocument()

    for (const item of portfolio.experience) {
      expect(screen.getAllByText(item.title).length).toBeGreaterThan(0)
      expect(screen.getAllByText(item.company).length).toBeGreaterThan(0)
    }
  })

  it('renders selected project cards for all configured projects', () => {
    render(<App />)

    for (const project of portfolio.projects) {
      expect(screen.getByText(project.title)).toBeInTheDocument()
      expect(screen.getByText(project.description)).toBeInTheDocument()
    }
  })

  it('renders the highlights and skill chips from the portfolio data', () => {
    render(<App />)

    for (const highlight of portfolio.highlights) {
      expect(screen.getAllByText(highlight.title).length).toBeGreaterThan(0)
      expect(screen.getAllByText(highlight.note).length).toBeGreaterThan(0)
    }

    expect(screen.getAllByText('TypeScript').length).toBeGreaterThan(0)
    expect(screen.getAllByText('React').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Node.js').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Azure').length).toBeGreaterThan(0)
  })

  it('includes the about and footer content block in the page', () => {
    render(<App />)

    expect(screen.getAllByText('Developer with a strong architecture mindset.').length).toBeGreaterThan(0)
    expect(
      screen.getAllByText('Open to engineering, product, and full-stack opportunities.').length,
    ).toBeGreaterThan(0)
  })
})
