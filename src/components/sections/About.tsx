import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Code, Cpu, Layers, Brain } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { accentText, accentBorder } from '@/lib/accent'

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
    description: 'Exploring the frontiers of AI. Explainable AI, NLP, and multimodal deep learning are my focus.',
    accent: 'cyan',
  },
  {
    icon: Code,
    title: 'Competitive Programmer',
    description: 'Solving complex algorithmic challenges. Data structures are my playground.',
    accent: 'acid',
  },
]

const getAccentClasses = (accent: string) => {
  const text = accentText[accent] || accentText.cyan
  const border = accentBorder[accent] || accentBorder.cyan
  return `${text} ${border}`
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
    <section id="about" className="py-12 md:py-24 px-4 md:px-6 relative overflow-hidden" ref={ref}>
      <motion.div style={{ y }} className="max-w-6xl mx-auto">
        <SectionHeader 
          number="01" 
          title="About Me" 
          isInView={isInView}
        />

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
              at <span className="text-primary">CUET</span> with hands-on experience in full-stack web development using <span className="text-foreground">React, Node.js, and PostgreSQL</span>. Co-authored an <span className="text-primary font-medium">IEEE paper</span> on explainable AI and achieved <span className="text-primary font-medium">7th place internationally</span> in a shared task at <span className="text-foreground">ACL 2026</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Published <span className="text-foreground font-medium">two Chrome extensions</span> on the Web Store. From optimizing algorithms in competitive programming to architecting full-stack applications, 
              I approach every problem with the same question: <span className="text-foreground italic">"What's the most elegant solution?"</span>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Interested in <span className="text-foreground">Web Development</span>, <span className="text-primary">Deep Learning</span>, and <span className="text-foreground">Computer Vision</span>. When I'm not coding, you'll find me competing in MUN conferences or debating complex ideas.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <a 
                href="https://www.freecodecamp.org/samonwita_tanu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 border border-border rounded-sm bg-card hover:border-acid transition-colors group"
              >
                <div className="text-3xl font-bold text-acid font-mono group-hover:scale-110 transition-transform">300+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </a>
              <div className="p-4 border border-border rounded-sm bg-card hover:border-violet transition-colors group">
                <div className="text-3xl font-bold text-violet font-mono group-hover:scale-110 transition-transform">10+</div>
                <div className="text-sm text-muted-foreground">Finished Projects</div>
              </div>
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
                className={`p-6 border rounded-sm bg-card/50 backdrop-blur-sm transition-all duration-300 interactive-card ${getAccentClasses(block.accent)}`}
              >
                <block.icon className={`w-8 h-8 mb-4 ${getAccentClasses(block.accent).split(' ')[0]}`} />
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
