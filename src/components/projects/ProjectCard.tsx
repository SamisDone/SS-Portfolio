import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Project } from '@/types/project'

const getAccentStyles = (accent: string) => {
  switch (accent) {
    case 'acid': return { border: 'border-acid/30 hover:border-acid', text: 'text-acid', bg: 'bg-acid/10', glow: 'shadow-acid/20' }
    case 'violet': return { border: 'border-violet/30 hover:border-violet', text: 'text-violet', bg: 'bg-violet/10', glow: 'shadow-violet/20' }
    case 'blood': return { border: 'border-blood/30 hover:border-blood', text: 'text-blood', bg: 'bg-blood/10', glow: 'shadow-blood/20' }
    default: return { border: 'border-cyan/30 hover:border-cyan', text: 'text-cyan', bg: 'bg-cyan/10', glow: 'shadow-cyan/20' }
  }
}


export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isCardInView = useInView(cardRef, { once: true, margin: '-100px' })
  
  const styles = getAccentStyles(project.accent)

  // Premium Motion Suite Variants
  const animations: Record<string, any> = {
    elevate: {
      hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
      visible: { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)',
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }
      }
    },
    reveal: {
      hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
      visible: { 
        clipPath: 'inset(0 0% 0 0)', 
        opacity: 1,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }
      }
    },
    unfold: {
      hidden: { rotateX: -20, opacity: 0, transformOrigin: 'top', filter: 'blur(5px)' },
      visible: { 
        rotateX: 0, 
        opacity: 1,
        filter: 'blur(0px)',
        transition: { type: 'spring', damping: 20, stiffness: 80, delay: index * 0.1 }
      }
    },
    focus: {
      hidden: { scale: 0.95, opacity: 0, filter: 'blur(20px)' },
      visible: { 
        scale: 1, 
        opacity: 1, 
        filter: 'blur(0px)',
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }
      }
    },
    glide: {
      hidden: { x: -30, opacity: 0, filter: 'blur(8px)' },
      visible: { 
        x: 0, 
        opacity: 1,
        filter: 'blur(0px)',
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }
      }
    }
  }

  const cardVariants: any = animations[project.animation] || animations.elevate

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isCardInView ? "visible" : "hidden"}
      variants={cardVariants}
      className={`relative grid md:grid-cols-3 gap-8 p-8 border ${styles.border} ${styles.bg} backdrop-blur-sm rounded-sm overflow-hidden project-card mb-12 group`}
    >
      {/* Interactive Scanline Overlay (Only visible on hover) */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ y: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main Content */}
      <div className="md:col-span-1 space-y-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={isCardInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className={`px-2 py-0.5 text-[10px] uppercase tracking-widest border rounded-full font-mono ${styles.border} ${styles.text}`}>
            {project.type}
          </span>
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={isCardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.4 }}
          className="text-3xl font-bold tracking-tight"
        >
          {project.title}
        </motion.h3>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isCardInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5 }}
          className={`text-sm font-mono ${styles.text} uppercase tracking-widest mb-4`}
        >
          {project.subtitle}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={isCardInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.6 }}
          className="text-muted-foreground leading-relaxed italic"
        >
          "{project.description}"
        </motion.p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isCardInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.7 + techIndex * 0.05 }}
              className={`px-2 py-1 text-xs font-mono border border-border rounded-sm text-muted-foreground hover:${styles.text} hover:${styles.border} transition-colors cursor-default bg-background/50`}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Problem → Solution → Impact */}
      <div className="md:col-span-2 space-y-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: 'Problem', text: project.problem, icon: '✗' },
            { label: 'Solution', text: project.solution, icon: '→' },
            { label: 'Impact', text: project.impact, icon: '✓' },
          ].map((item, itemIndex) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isCardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: index * 0.1 + 0.5 + itemIndex * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group/item p-4 bg-muted/20 rounded-sm border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs ${styles.text}`}>{item.icon}</span>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
              <p className="text-sm text-muted-foreground relative z-10">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Links */}
        <motion.div 
          className="flex gap-6 pt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isCardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.9 }}
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className={`group inline-flex items-center gap-2 font-mono text-sm ${styles.text} transition-colors`}
          >
            <Github className="w-4 h-4" />
            <span className="relative">
              Code
              <span className={`absolute bottom-0 left-0 w-0 h-px ${styles.text.replace('text-', 'bg-')} group-hover:w-full transition-all duration-300`} />
            </span>
          </motion.a>

          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className={`group inline-flex items-center gap-2 font-mono text-sm ${styles.text} transition-colors`}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="relative">
                Live Demo
                <span className={`absolute bottom-0 left-0 w-0 h-px ${styles.text.replace('text-', 'bg-')} group-hover:w-full transition-all duration-300`} />
              </span>
              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

