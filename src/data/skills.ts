export interface SkillCategory {
  title: string
  skills: { name: string; level: number }[]
  accent: 'cyan' | 'acid' | 'violet'
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', level: 90 },
      { name: 'TypeScript', level: 86 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'Python', level: 80 },
      { name: 'PHP', level: 75 },
      { name: 'Java', level: 75 },
      { name: 'C', level: 85 },
      { name: 'SQL', level: 80 },
    ],
    accent: 'cyan',
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'Node.js', level: 82 },
      { name: 'Next.js', level: 78 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Zustand', level: 76 },
      { name: 'Express.js', level: 80 },
      { name: 'Firebase', level: 78 },
      { name: 'Recharts', level: 74 },
      { name: 'Radix UI', level: 75 },
    ],
    accent: 'acid',
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'NLP', level: 78 },
      { name: 'Multimodal Deep Learning', level: 75 },
      { name: 'LLM Prompt Recovery', level: 72 },
      { name: 'Gemini API', level: 80 },
      { name: 'Explainable AI (XAI)', level: 70 },
    ],
    accent: 'violet',
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 78 },
      { name: 'MongoDB', level: 78 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Linux', level: 75 },
      { name: 'LaTeX', level: 78 },
    ],
    accent: 'cyan',
  },
]

export const coreSkills = [
  'Data Structures',
  'Algorithms',
  'OOP',
  'DBMS',
  'MVC Architecture',
  'Operating Systems',
  'System Design',
]
