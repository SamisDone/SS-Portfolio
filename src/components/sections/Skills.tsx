import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface SkillCategory {
  title: string
  skills: { name: string; level: number }[]
  accent: 'cyan' | 'acid' | 'violet'
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'C', level: 85 },
    ],
    accent: 'cyan',
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'Node.js', level: 82 },
      { name: 'Next.js', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Express.js', level: 80 },
    ],
    accent: 'acid',
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 78 },
      { name: 'MySQL', level: 82 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 70 },
    ],
    accent: 'violet',
  },
]

const coreSkills = [
  'Data Structures',
  'Algorithms',
  'OOP',
  'DBMS',
  'Operating Systems',
  'System Design',
]

const getAccentColor = (accent: string) => {
  switch (accent) {
    case 'acid': return 'bg-acid'
    case 'violet': return 'bg-violet'
    default: return 'bg-cyan'
  }
}

const getAccentBorder = (accent: string) => {
  switch (accent) {
    case 'acid': return 'border-acid/30'
    case 'violet': return 'border-violet/30'
    default: return 'border-cyan/30'
  }
}

export function Skills() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section id="skills" className="py-12 md:py-24 px-4 md:px-6 relative bg-muted/20 overflow-hidden" ref={ref}>
      <motion.div style={{ y }} className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary font-mono text-xl md:text-2xl mr-2">03.</span>
            Technical Arsenal
          </h2>
          <div className="section-divider w-32 md:w-64" />
        </motion.div>

        {/* Core CS Fundamentals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold mb-6 text-primary font-mono">// Core Fundamentals</h3>
          <div className="flex flex-wrap gap-3">
            {coreSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 border border-border rounded-sm bg-card font-mono text-sm hover:border-primary hover:text-primary transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + catIndex * 0.1 }}
              className={`p-6 border rounded-sm bg-card/50 ${getAccentBorder(category.accent)}`}
            >
              <h3 className="text-lg font-semibold mb-6 font-mono">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${getAccentColor(category.accent)}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + catIndex * 0.1 + skillIndex * 0.05, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Stack Representation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 border border-border rounded-sm bg-card/30"
        >
          <h3 className="text-lg font-semibold mb-6 font-mono text-center">// Full Stack Overview</h3>
          <div className="flex flex-col items-center gap-2">
            <div className="px-6 py-2 bg-cyan/20 border border-cyan/30 rounded-sm font-mono text-sm text-cyan">
              Frontend: React · Next.js · Tailwind
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="px-6 py-2 bg-acid/20 border border-acid/30 rounded-sm font-mono text-sm text-acid">
              Backend: Node.js · Express · REST APIs
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="px-6 py-2 bg-violet/20 border border-violet/30 rounded-sm font-mono text-sm text-violet">
              Database: PostgreSQL · MongoDB · MySQL
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="px-6 py-2 bg-muted border border-border rounded-sm font-mono text-sm text-muted-foreground">
              DevOps: Git · Docker · Vercel
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
