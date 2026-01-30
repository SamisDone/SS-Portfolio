import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Code, Cpu, Layers, Zap, Brain } from 'lucide-react'

const identityBlocks = [
  {
    icon: Cpu,
    title: 'CS Engineer',
    description: 'Building robust systems with clean architecture and scalable design patterns.',
    accent: 'cyan',
  },
  {
    icon: Layers,
    title: 'Full-Stack Builder',
    description: 'From database schemas to pixel-perfect UIs. React, Node, PostgreSQL, and beyond.',
    accent: 'violet',
  },
  {
    icon: Brain,
    title: 'ML Enthusiast',
    description: 'Exploring the frontiers of AI. Spatio-temporal modelling and predictive systems are my focus.',
    accent: 'cyan',
  },
  {
    icon: Code,
    title: 'Competitive Programmer',
    description: 'Solving complex algorithmic challenges. Data structures are my playground.',
    accent: 'acid',
  },
]

const getAccentColor = (accent: string) => {
  switch (accent) {
    case 'acid': return 'text-acid border-acid/30 hover:border-acid'
    case 'violet': return 'text-violet border-violet/30 hover:border-violet'
    default: return 'text-cyan border-cyan/30 hover:border-cyan'
  }
}

export function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <motion.div style={{ y }} className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary font-mono text-xl md:text-2xl mr-2">01.</span>
            About Me
          </h2>
          <div className="section-divider w-32 md:w-64" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Computer Science & Engineering</span> student 
              at <span className="text-primary">CUET</span>, obsessed with the intersection of <span className="text-foreground">software engineering</span> and <span className="text-primary font-medium">Machine Learning</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From optimizing algorithms in competitive programming to architecting full-stack applications, 
              I approach every problem with the same question: <span className="text-foreground italic">"What's the most elegant solution?"</span>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me competing in MUN conferences, debating complex ideas, 
              or pushing physical limits in track and field athletics.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 border border-border rounded-sm bg-card hover:border-primary transition-colors group">
                <div className="text-3xl font-bold text-primary font-mono group-hover:scale-110 transition-transform">3.58</div>
                <div className="text-sm text-muted-foreground">CGPA @ CUET</div>
              </div>
              <a 
                href="https://www.freecodecamp.org/samonwita_tanu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 border border-border rounded-sm bg-card hover:border-acid transition-colors group"
              >
                <div className="text-3xl font-bold text-acid font-mono group-hover:scale-110 transition-transform">300+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </a>
            </div>

            {/* Certifications Link */}
            <div className="pt-4">
              <a 
                href="https://www.datacamp.com/portfolio/Samonwita?view=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                <span>View Certifications (DataCamp)</span>
                <span className="text-xs">→</span>
              </a>
            </div>
          </motion.div>

          {/* Identity Blocks */}
          <div className="grid sm:grid-cols-2 gap-4">
            {identityBlocks.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`p-6 border rounded-sm bg-card/50 backdrop-blur-sm transition-all duration-300 interactive-card ${getAccentColor(block.accent)}`}
              >
                <block.icon className={`w-8 h-8 mb-4 ${getAccentColor(block.accent).split(' ')[0]}`} />
                <h3 className="font-semibold text-lg mb-2">{block.title}</h3>
                <p className="text-sm text-muted-foreground">{block.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
