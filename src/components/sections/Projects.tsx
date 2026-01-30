import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Github } from 'lucide-react'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { Project } from '@/types/project'
import { SectionHeader } from '../ui/SectionHeader'
import { PERSONAL_INFO } from '@/lib/constants'

const projects: Project[] = [
  {
    title: 'TabSaver',
    subtitle: 'Chrome Extension',
    type: 'Personal Project',
    description: 'A productivity tool for managing browser sessions with military precision.',
    problem: 'Browser tab chaos destroying productivity and system memory.',
    solution: 'One-click session persistence with smart categorization and restoration.',
    impact: 'Significantly reduced browser memory usage and restored workflow sanity.',
    tech: ['JavaScript', 'Chrome Extension API', 'Local Storage'],
    github: 'https://github.com/SamisDone/TabSaver-2.0',
    live: 'https://chromewebstore.google.com/detail/tabsaver/emjeegpjecaljggipjdaofmlkoolikdk',
    accent: 'cyan',
    featured: true,
    animation: 'elevate',
  },
  {
    title: 'ResumeForge',
    subtitle: 'Web Application',
    type: 'Personal Project',
    description: 'Dynamic resume builder with live preview and professional PDF export.',
    problem: 'Resume creation is tedious and formatting is painful for applicants.',
    solution: 'Real-time editing with instant visual feedback using React and Tailwind.',
    impact: 'Users generate professionally formatted resumes in minutes, not hours.',
    tech: ['React', 'Tailwind CSS', 'PDF Generation'],
    github: 'https://github.com/SamisDone/ResumeForge',
    live: 'https://resumeforge-sam.netlify.app/',
    accent: 'acid',
    featured: true,
    animation: 'focus',
  },
  {
    title: 'SortnPlay',
    subtitle: 'Algorithm Visualizer',
    type: 'Personal Project',
    description: 'Interactive sorting algorithm simulator for visual learners.',
    problem: 'Abstract algorithms are hard to understand from code alone.',
    solution: 'Step-by-step visualization with adjustable speed and custom array sizes.',
    impact: 'Makes algorithmic complexity tangible and highly educational.',
    tech: ['React.js', 'Animation', 'DSA'],
    github: 'https://github.com/SamisDone/Sorting-Algorithm-Simulator',
    live: 'https://sortnplay.netlify.app/',
    accent: 'violet',
    featured: true,
    animation: 'unfold',
  },
  {
    title: 'PixelArt',
    subtitle: 'Creative Tool',
    type: 'Personal Project',
    description: 'A web-based pixel art editor for creating digital doodles on a customizable grid.',
    problem: 'Casual digital artists need a simple, zero-friction tool for quick pixel sketches.',
    solution: 'Built a responsive HTML5 Canvas grid with real-time color picking and toolsets.',
    impact: 'Provides a lightweight, accessible creative outlet for pixel art enthusiasts.',
    tech: ['JavaScript', 'HTML5 Canvas', 'CSS Grid'],
    github: 'https://github.com/SamisDone/Pixel-Art-App',
    live: 'https://pixelartweb.netlify.app/',
    accent: 'cyan',
    featured: true,
    animation: 'glide',
  },
  {
    title: 'GlitchBreach',
    subtitle: 'Visual Experiment',
    type: 'Personal Project',
    description: 'An immersive digital experience exploring glitch aesthetics and terminal processing.',
    problem: 'Standard web interfaces often lack character and dynamic visual feedback.',
    solution: 'Implemented complex CSS filters and Framer Motion sequences to simulate a system breach.',
    impact: 'Demonstrates advanced UI/UX experimentation and custom animation orchestration.',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com/SamisDone/GLITCH-BREACH',
    live: 'https://glitch-breach-sam.netlify.app/',
    accent: 'violet',
    featured: true,
    animation: 'elevate',
  },
  {
    title: 'Hangman',
    subtitle: 'Classic Game',
    type: 'Personal Project',
    description: 'A browser-based implementation of the classic Hangman game with dynamic state tracking.',
    problem: 'Simple games are often over-engineered or lacks smooth interaction loops.',
    solution: 'Focused on lean state management and intuitive keyboard-based interactions.',
    impact: 'A polished, bug-free game experience with clean code and minimal overhead.',
    tech: ['JavaScript', 'DOM Manipulation', 'CSS3'],
    github: 'https://github.com/SamisDone/HangMan',
    live: 'https://hangman-sam.netlify.app/',
    accent: 'acid',
    featured: true,
    animation: 'elevate',
  },
  {
    title: 'MediHub',
    subtitle: 'Full-Stack Healthcare Platform',
    type: 'Group Project',
    description: 'An AI-powered hospital management system for secure records and diagnostics.',
    problem: 'Inefficient patient record management and lack of AI-driven diagnostic tools.',
    solution: 'Built secure auth, integrated AI diagnostic APIs, and optimized with React/Node.',
    impact: 'Streamlined healthcare workflows and provided faster diagnostic insights.',
    tech: ['React', 'Node.js', 'AI APIs', 'Firebase', 'Vercel'],
    github: 'https://github.com/SamisDone/AI-Powered-Hospital-Management-System',
    live: 'https://ai-powered-hospital-management-syst.vercel.app/',
    accent: 'blood',
    featured: true,
    animation: 'unfold',
  },
]

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="projects" className="py-12 md:py-24 px-4 md:px-6 relative" ref={ref}>
      <motion.div style={{ y }} className="max-w-6xl mx-auto">
        <SectionHeader 
          number="02" 
          title="Selected Work" 
          subtitle="SCROLL_TO_DISCOVER_EXPERIMENTS"
          dividerWidth="w-48 md:w-96"
          isInView={isInView}
        />

        {/* Projects Grid */}
        <div className="space-y-12 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Footer Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
          >
            <span>view_more_on_github</span>
            <Github className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
