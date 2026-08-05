import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Github } from 'lucide-react'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { Project } from '@/types/project'
import { SectionHeader } from '../ui/SectionHeader'
import { PERSONAL_INFO } from '@/lib/constants'

import { projects } from '@/data/projects'

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
