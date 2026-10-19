/**
 * Central portfolio data for Prajwal V S. Replace placeholders with verified resume details.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Prajwal V S',
  displayName: 'PRAJWAL V S',
  firstName: 'PRAJWAL',
  seriesTag: 'THE SERIES',
  originalLabel: 'A PRAJWAL ORIGINAL',
  role: 'Full Stack Developer',
  tagline: ['Full Stack Developer', 'Angular • React', 'Node.js • TypeScript'],
  intro: 'Full Stack Developer with 4+ years of experience building enterprise web applications using Angular, TypeScript, JavaScript, Node.js, Express.js, SQL and modern frontend tooling. Experienced in banking/fintech applications and engineering automation.',
  location: 'Bengaluru, India',
  email: 'prajwalvs172@gmail.com',
  links: { linkedin: 'https://www.linkedin.com/in/prajwal-v-s-976744149', github: 'https://github.com/' },
  resumePdf: '/assets/Prajwal_VS_Resume.pdf',
  portrait: { src: '/assets/prajwal-profile.jpeg', srcSet: '/assets/prajwal-profile.jpeg 720w', alt: 'Portrait of Prajwal V S' },
  interests: ['Frontend Engineering', 'Full Stack Development', 'Engineering Automation'],
};

export const education = [
  { school: 'University Visvesvaraya College of Engineering', place: 'Bengaluru, India', degree: 'Master of Technology', period: 'Dates not provided', score: 'CGPA 8.8' },
  { school: 'Sambhram Institute of Technology', place: 'Bengaluru, India', degree: 'Bachelor of Engineering', period: 'Dates not provided', score: 'CGPA 7.1' },
];

export const experience = [
  { company: 'Enterprise Software Development', role: 'Full Stack Developer', place: 'Bengaluru, India', period: 'Add employment dates', points: [
    'Developed and maintained enterprise web applications using Angular, TypeScript, JavaScript, HTML and CSS.',
    'Worked on banking and fintech application features, API integrations, UI components and session workflows.',
    'Contributed to Schneider Electric three-phase UPS configurator and SKU automation workflows using TypeScript, Node.js and JSON-based business rules.',
  ] },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  { id: 'banking-fintech', title: 'Banking & Fintech Applications', year: '2022–2026', genre: 'Enterprise • Angular • APIs', logline: 'Enterprise financial application features focused on responsive user experiences and reliable API integrations.', stack: ['Angular', 'TypeScript', 'JavaScript', 'REST APIs', 'HTML', 'CSS'], build: ['Worked on enterprise banking application UI, reusable components, transaction widgets, session workflows and API integration. Add specific project outcomes and metrics here.'], features: ['Reusable Angular components', 'REST API integration', 'Transaction and session workflows', 'Responsive enterprise UI'], metrics: [{ value: '4+', label: 'years of experience' }], palette: { from: '#07172b', via: '#123e65', to: '#05080d', accent: '#4cc9ff' }, motif: 'flow' },
  { id: 'threephase-configurator', title: 'Three-Phase UPS Configurator', year: '2026', genre: 'Engineering • Configurator • UI', logline: 'Configurator and design portal work supporting three-phase UPS product selection and related service options.', stack: ['TypeScript', 'Angular', 'JSON', 'REST APIs'], build: ['Contributed to configurator UI features and related business-rule workflows. Add verified ownership, scope and outcomes as details are confirmed.'], features: ['Configurator UI enhancements', 'Component and calculator redesign', 'Session and API workflows'], metrics: [{ value: 'Enterprise', label: 'engineering application' }], palette: { from: '#10230d', via: '#315c1b', to: '#05080d', accent: '#a3e635' }, motif: 'shield' },
  { id: 'sku-automation', title: 'SKU Automation', year: '2026', genre: 'Automation • Node.js • TypeScript', logline: 'Automation workflows for SKU data, country availability and EcoCare service configuration.', stack: ['Node.js', 'TypeScript', 'MongoDB', 'JSON', 'SQL'], build: ['Worked with SKU data and country-specific availability rules, including validation and dependency logic for service options. Add verified impact metrics when available.'], features: ['Country availability rules', 'SKU dependency logic', 'JSON data validation', 'Automation scripts'], metrics: [{ value: 'Multi-country', label: 'availability rules' }], palette: { from: '#261006', via: '#71320e', to: '#05080d', accent: '#ffb547' }, motif: 'tenants' },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Typed languages and web development',
    skills: [
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'Angular', mono: 'Ng' },
      { name: 'React', mono: 'Re' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
      { name: 'Bootstrap', mono: 'Bs' },
      { name: 'Angular Material', mono: 'Am' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'ASP.NET', mono: 'As' },
      { name: 'RESTful APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Shipping & architecture',
    skills: [
      { name: 'AWS', mono: 'Aw' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'GitLab', mono: 'Gl' },
      { name: 'Jenkins', mono: 'Jk' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Indexing • Normalization',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OS', mono: 'Os' },
      { name: 'CN', mono: 'Cn' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'Collections', mono: 'Co' },
      { name: 'Multithreading', mono: 'Mt' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'System Design', mono: 'Sd' },
      { name: 'Cloud Computing (AWS)', mono: 'Aw' },
      { name: 'Machine Learning', mono: 'Ml' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Angular: ['Enterprise frontend applications'], TypeScript: ['Frontend and automation work'], JavaScript: ['Web application development'],
  'Node.js': ['Backend and automation workflows'], 'Express.js': ['Backend application development'], SQL: ['Application data queries'],
  React: ['Full stack and UI development'], 'REST APIs': ['Enterprise application integrations'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  { number: 1, title: 'The Frontend Arc', period: 'Experience', synopsis: 'Building responsive enterprise interfaces and reusable components.', episodes: [
    { code: 'S01 E01', title: 'Angular Applications', description: 'Angular, TypeScript, JavaScript, HTML and CSS for enterprise application interfaces.', tags: ['Angular', 'TypeScript', 'HTML', 'CSS'], runtime: 'Professional experience', palette: ocean },
    { code: 'S01 E02', title: 'API Integration', description: 'Integrating REST APIs and supporting application workflows.', tags: ['REST APIs', 'Debugging', 'Integration'], runtime: 'Professional experience', palette: violet },
  ] },
  { number: 2, title: 'The Full Stack Arc', period: 'Experience', synopsis: 'Expanding across frontend, backend services, data and automation.', episodes: [
    { code: 'S02 E01', title: 'Backend Workflows', description: 'Node.js, Express.js, TypeScript and SQL-based application work.', tags: ['Node.js', 'Express.js', 'SQL'], runtime: 'Professional experience', palette: jade },
    { code: 'S02 E02', title: 'Engineering Automation', description: 'Working with SKU data, country availability rules and configuration dependencies.', tags: ['Automation', 'JSON', 'MongoDB'], runtime: 'Project work', palette: amber },
  ] },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Frontend', title: 'Angular', detail: 'Enterprise UI development', palette: ocean },
  { label: 'Language', title: 'TypeScript', detail: 'Typed frontend and backend code', palette: violet },
  { label: 'Backend', title: 'Node.js', detail: 'Services and automation workflows', palette: jade },
  { label: 'Web platform', title: 'React', detail: 'Modern component-based UI', palette: crimson },
  { label: 'Data', title: 'SQL', detail: 'Application data and queries', palette: amber },
  { label: 'Integration', title: 'REST APIs', detail: 'Connecting application services', palette: ocean },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  { kicker: 'Profile', title: 'PRAJWAL V S', lines: ['Full Stack Developer', '4+ years of enterprise application development', 'Bengaluru, India'] },
  { kicker: 'Focus', title: 'Building for the web', lines: ['Angular · React · TypeScript', 'Node.js · Express.js · SQL', 'APIs · Banking / Fintech · Automation'] },
  { kicker: 'Experience', title: 'Enterprise applications', lines: ['Banking and fintech application development', 'Schneider Electric three-phase UPS configurator', 'SKU automation and country availability rules'] },
  { kicker: 'Next chapter', title: 'Let’s build something useful', lines: ['Projects, experience and contact details can be updated as you provide them'] },
];

export type ProfileId = 'prajwal' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'prajwal',
    name: 'PRAJWAL V S',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
