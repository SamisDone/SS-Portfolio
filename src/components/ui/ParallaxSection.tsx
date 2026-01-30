import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  id?: string
  className?: string
  speed?: number
  fadeIn?: boolean
}

export function ParallaxSection({ 
  children, 
  id, 
  className = '', 
  speed = 0.5,
  fadeIn = true 
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative ${className}`}
      style={fadeIn ? { opacity } : undefined}
    >
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </motion.section>
  )
}
