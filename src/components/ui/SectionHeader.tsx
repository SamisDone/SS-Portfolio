import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  number: string
  title: string
  className?: string
  dividerWidth?: string
  isInView?: boolean
  subtitle?: string
}

export function SectionHeader({ 
  number, 
  title, 
  className, 
  dividerWidth = 'w-32 md:w-64',
  isInView = true,
  subtitle
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={cn("mb-16", className)}
    >
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          <span className="text-primary font-mono text-xl md:text-2xl mr-2">{number}.</span>
          {title}
        </h2>
        {subtitle && (
          <div className="hidden md:block font-mono text-xs text-muted-foreground tracking-tighter uppercase">
            // {subtitle}
          </div>
        )}
      </div>
      <div className={cn("section-divider", dividerWidth)} />
    </motion.div>
  )
}
