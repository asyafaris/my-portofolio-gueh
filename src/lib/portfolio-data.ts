export type NavItem = {
  id: string;
  label: string;
};

export type HighlightItem = {
  value: string;
  label: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  summary: string;
  impact: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  role: string;
  stack: string[];
  href: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const highlightItems: HighlightItem[] = [
  { value: '9+', label: 'banking projects led across delivery lifecycles' },
  { value: '15+', label: 'projects delivered as a founder and operator' },
  { value: 'Agile', label: 'Scrum, planning, and execution discipline' },
  { value: 'Cross-functional', label: 'alignment across product, tech, and business' },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: 'PT Swadharma Duta Data',
    role: 'IT PMO',
    duration: 'Current',
    summary:
      'Driving structured delivery for banking initiatives with strong coordination, planning, and stakeholder visibility.',
    impact: [
      'Coordinated delivery across multiple banking projects with a focus on execution clarity and risk control.',
      'Maintained project governance, timelines, and reporting that improved visibility for stakeholders and teams.',
      'Supported alignment between technical delivery and business expectations in fast-moving environments.',
    ],
  },
  {
    company: 'iCodeU',
    role: 'Founder',
    duration: 'Previous',
    summary:
      'Built and delivered digital initiatives end-to-end while balancing product direction, client needs, and team execution.',
    impact: [
      'Delivered more than 15 projects by translating client goals into clear scopes, priorities, and delivery plans.',
      'Led cross-functional collaboration from discovery through launch, ensuring quality and business relevance.',
      'Created delivery systems that enabled consistent execution across multiple simultaneous initiatives.',
    ],
  },
  {
    company: 'PT DOT Indonesia',
    role: 'PM Intern',
    duration: 'Earlier experience',
    summary:
      'Built practical product and project management foundations inside an agency-style digital delivery environment.',
    impact: [
      'Supported project planning, communication, and follow-through across delivery teams.',
      'Contributed to requirement coordination and execution tracking in Agile workflows.',
      'Developed early experience in aligning client expectations with engineering execution.',
    ],
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: 'Banking Delivery Portfolio',
    description:
      'Oversaw a portfolio of banking initiatives with structured planning, cross-team coordination, and disciplined delivery tracking.',
    role: 'Project Manager',
    stack: ['Agile', 'Scrum', 'Jira', 'Stakeholder Management'],
    href: 'https://www.linkedin.com/',
  },
  {
    title: 'iCodeU Client Delivery Program',
    description:
      'Directed discovery, execution, and handoff across multiple client engagements while keeping scope, timeline, and outcome alignment tight.',
    role: 'Product Owner',
    stack: ['Product Discovery', 'ClickUp', 'Roadmapping', 'Client Delivery'],
    href: 'https://www.instagram.com/',
  },
  {
    title: 'Digital Product Coordination Framework',
    description:
      'Established a repeatable way to manage backlog priorities, sprint cadence, and cross-functional communication for digital product work.',
    role: 'Scrum Master',
    stack: ['Sprint Planning', 'Backlog Management', 'Postman', 'SQL'],
    href: 'mailto:asyaismatullahfaris@gmail.com',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Project Management',
    items: ['Agile', 'Scrum', 'Stakeholder Mgmt'],
  },
  {
    title: 'Technical',
    items: ['SQL', 'JavaScript', 'PHP'],
  },
  {
    title: 'Tools',
    items: ['Jira', 'ClickUp', 'Postman'],
  },
];

export const certifications = [
  'Google Project Management',
  'Agile Certification',
  'Scrum Fundamentals',
];

export const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    value: 'Professional profile and career updates',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    value: 'A more personal window into my work and journey',
  },
  {
    label: 'Email',
    href: 'mailto:asyaismatullahfaris@gmail.com',
    value: 'asyaismatullahfaris@gmail.com',
  },
];

