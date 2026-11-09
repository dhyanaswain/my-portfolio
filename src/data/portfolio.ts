const readEnv = (key: string, fallback: string) => {
  const value = import.meta.env[key]
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : fallback
}

export const portfolio = {
  name: readEnv('VITE_PORTFOLIO_NAME', 'Your Name'),
  title: readEnv('VITE_PORTFOLIO_TITLE', 'Senior Software Engineer'),
  location: readEnv('VITE_PORTFOLIO_LOCATION', 'Your City, Country'),
  email: readEnv('VITE_PORTFOLIO_EMAIL', 'yourname@example.com'),
  github: readEnv('VITE_PORTFOLIO_GITHUB', 'https://github.com/yourusername'),
  linkedin: readEnv('VITE_PORTFOLIO_LINKEDIN', 'https://linkedin.com/in/yourusername'),
  summary: readEnv(
    'VITE_PORTFOLIO_SUMMARY',
    'I build reliable software systems, product experiences, and scalable platform work with a strong focus on business impact, maintainability, and thoughtful engineering.',
  ),
  stats: [
    { value: '10+', label: 'Years in software engineering' },
    { value: '99.99%', label: 'Availability focus across critical systems' },
    { value: 'B.Tech', label: 'Computer science graduate' },
  ],
  experience: [
    {
      period: '09/2024 — Present',
      title: 'Senior Software Developer',
      company: 'Walmart Global Technology',
      description:
        'Leading strategic engineering initiatives across middleware and enterprise web systems, driving cross-functional execution with product and TPM partners while improving performance, reliability, and scalability.',
    },
    {
      period: '05/2023 — 09/2024',
      title: 'Senior Software Developer',
      company: 'Aptos India Private Limited',
      description:
        'Designed and delivered scalable web applications using Node.js, TypeScript, React, Angular, and supporting services, while mentoring engineers and contributing to architecture and delivery quality.',
    },
    {
      period: '05/2021 — 10/2022',
      title: 'Senior Software Developer',
      company: 'Wells Fargo',
      description:
        'Served as a technical lead for enterprise platforms, designing micro-frontends, integrating GraphQL and middleware layers, and managing non-functional requirements for high-concurrency banking workflows on Azure.',
    },
    {
      period: '06/2019 — 05/2021',
      title: 'Application Development Specialist',
      company: 'Accenture',
      description:
        'Built and delivered web applications for business-critical workflows, contributing to solution design, architecture discussions, and the implementation of maintainable, reusable engineering systems.',
    },
    {
      period: '10/2018 — 06/2019',
      title: 'Senior Project Engineer',
      company: 'Wipro',
      description:
        'Worked on enterprise application delivery and responsive web experiences with a focus on practical architecture, maintainability, and dependable execution.',
    },
    {
      period: '05/2016 — 09/2018',
      title: 'Web Developer',
      company: 'Theorem India Pvt. Ltd.',
      description:
        'Developed responsive UI templates and digital experiences using HTML, CSS, Angular, Bootstrap, Node.js, and MongoDB, turning business requirements into working interfaces and product features.',
    },
  ],
  projects: [
    {
      title: 'MNRVA',
      description:
        'Served as a technical lead for the MNRVA enterprise platform, implementing TypeScript, Node.js, and React solutions with micro-frontend patterns, GraphQL API federation, and Azure-hosted reliability guardrails for complex banking workflows.',
      stack: ['TypeScript', 'Node.js', 'React', 'GraphQL', 'Azure'],
    },
    {
      title: 'CMHC CRM Services',
      description:
        'Built Azure-hosted Node.js and React solutions with automated CI/CD pipelines to increase deployment frequency, improve release reliability, and support CRM business operations with scalable frontend and backend integration.',
      stack: ['React', 'Node.js', 'Azure', 'CI/CD', 'SiteCore'],
    },
    {
      title: 'AIP.Next Core (Chat Bot)',
      description:
        'Led the development of an automated AI chatbot backend using Node.js, Express, Python, and MongoDB on AWS, translating business requirements into responsive interfaces and scalable REST/GraphQL APIs for high-volume user sessions.',
      stack: ['Node.js', 'Express', 'Python', 'MongoDB', 'AWS'],
    },
    {
      title: 'Contracts Intelligence & Entity Extraction',
      description:
        'Engineered NLP and data extraction platforms using Node.js, GraphQL, and Python on AWS to automate intelligence workflows and power analytics dashboards for enterprise data exploration.',
      stack: ['Node.js', 'GraphQL', 'Python', 'AWS', 'SQL'],
    },
  ],
  highlights: [
    {
      title: 'Product discovery and architecture',
      note: 'Led multi-quarter strategic engineering initiatives from architecture design through execution, aligning product discovery with scalable delivery goals.',
    },
    {
      title: 'AI and GenAI integration',
      note: 'Built LLM integrations, prompt workflows, and RAG-style patterns to improve productivity and automate data enrichment across internal systems.',
    },
    {
      title: 'Reliability and observability',
      note: 'Established monitoring and incident response practices to reduce MTTR while maintaining high availability for transactional and enterprise-grade workloads.',
    },
  ],
  skills: [
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Express.js',
    'React',
    'Angular',
    'GraphQL',
    'REST APIs',
    'Microservices',
    'Micro-frontends',
    'Rust',
    'Java',
    'Python',
    'SQL',
    'MySQL',
    'MongoDB',
    'Vector Databases',
    'AI & LLM Integration',
    'Prompt Engineering',
    'RAG',
    'Azure',
    'AWS',
    'Docker',
    'Jenkins',
    'CI/CD',
    'Git',
    'Bitbucket',
    'Jira',
    'Agile',
    'Scrum',
    'Storybook',
    'Redux',
    'Bootstrap',
    'Jest',
    'Postman',
    'Splunk',
    'SiteCore',
  ],
}
