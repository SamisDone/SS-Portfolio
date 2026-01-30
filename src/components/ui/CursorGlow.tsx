import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useCallback, useRef } from 'react'

type CursorVariant = 'default' | 'link' | 'button' | 'card' | 'text' | 'hidden'

const cursorVariants = {
  default: {
    width: 12,
    height: 12,
    backgroundColor: 'transparent',
    border: '1px solid hsl(var(--primary))',
    mixBlendMode: 'difference' as const,
  },
  link: {
    width: 48,
    height: 48,
    backgroundColor: 'hsl(var(--primary) / 0.1)',
    border: '1px solid hsl(var(--primary))',
    mixBlendMode: 'normal' as const,
  },
  button: {
    width: 64,
    height: 64,
    backgroundColor: 'hsl(var(--primary) / 0.15)',
    border: '2px solid hsl(var(--primary))',
    mixBlendMode: 'normal' as const,
  },
  card: {
    width: 80,
    height: 80,
    backgroundColor: 'transparent',
    border: '1px solid hsl(var(--primary) / 0.3)',
    mixBlendMode: 'normal' as const,
  },
  text: {
    width: 4,
    height: 32,
    backgroundColor: 'hsl(var(--primary))',
    border: 'none',
    mixBlendMode: 'difference' as const,
  },
  hidden: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    border: 'none',
    mixBlendMode: 'normal' as const,
  },
}

export function CursorGlow() {
  const [isVisible, setIsVisible] = useState(true)
  const [variant, setVariant] = useState<CursorVariant>('default')
  const [cursorText, setCursorText] = useState('')
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const trailX = useMotionValue(-100)
  const trailY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 500, restDelta: 0.001 }
  const trailConfig = { damping: 30, stiffness: 200, restDelta: 0.001 }
  
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  const trailXSpring = useSpring(trailX, trailConfig)
  const trailYSpring = useSpring(trailY, trailConfig)

  const detectElement = useCallback((target: HTMLElement): CursorVariant => {
    // Check for data attribute first
    const cursorType = target.closest('[data-cursor]')?.getAttribute('data-cursor') as CursorVariant
    if (cursorType && cursorVariants[cursorType]) return cursorType
    
    // Auto-detect based on element type
    if (target.closest('button, [role="button"], .magnetic-btn')) return 'button'
    if (target.closest('a, [role="link"]')) return 'link'
    if (target.closest('[data-card], .project-card, .card')) return 'card'
    if (target.closest('input, textarea, [contenteditable]')) return 'text'
    if (target.closest('iframe, video, canvas')) return 'hidden'
    
    return 'default'
  }, [])

  const lastElement = useRef<HTMLElement | null>(null)
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      trailX.set(e.clientX)
      trailY.set(e.clientY)
      setIsVisible(true)
      
      const target = e.target as HTMLElement
      // Only detect if the element under cursor changed
      if (target !== lastElement.current) {
        lastElement.current = target
        const newVariant = detectElement(target)
        setVariant(newVariant)
        
        // Check for cursor text
        const textEl = target.closest('[data-cursor-text]')
        setCursorText(textEl?.getAttribute('data-cursor-text') || '')
      }
    }

    const hideCursor = () => setIsVisible(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseleave', hideCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseleave', hideCursor)
    }
  }, [cursorX, cursorY, trailX, trailY, detectElement])

  const currentStyle = cursorVariants[variant]

  return (
    <>
      {/* Trail dot */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full hidden lg:block"
        style={{
          left: trailXSpring,
          top: trailYSpring,
          x: '-50%',
          y: '-50%',
          width: 6,
          height: 6,
          backgroundColor: 'hsl(var(--primary) / 0.5)',
          opacity: isVisible ? 0.6 : 0,
        }}
      />
      
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full hidden lg:flex items-center justify-center overflow-hidden"
        animate={{
          width: currentStyle.width,
          height: currentStyle.height,
          backgroundColor: currentStyle.backgroundColor,
          border: currentStyle.border,
          opacity: isVisible ? 1 : 0,
          borderRadius: variant === 'text' ? '2px' : '50%',
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
          opacity: { duration: 0.2 },
        }}
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
          mixBlendMode: currentStyle.mixBlendMode,
        }}
      >
        {/* X-Ray Scanline */}
        {variant !== 'hidden' && variant !== 'text' && (
          <motion.div 
            className="absolute inset-0 bg-primary/5 pointer-events-none"
            animate={{ 
              y: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              height: '2px',
              width: '100%',
              backgroundColor: 'hsl(var(--primary) / 0.2)',
              boxShadow: '0 0 10px hsl(var(--primary))'
            }}
          />
        )}

        <AnimatePresence>
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[10px] font-mono text-primary whitespace-nowrap bg-background/80 px-1 py-0.5 rounded-sm"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
        
        {/* Scanner Decoration */}
        {variant === 'card' && (
           <motion.div 
              className="absolute inset-0 border border-primary/20 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
           />
        )}
      </motion.div>

      {/* Ambient glow (original effect) */}
      <motion.div
        className="cursor-glow hidden lg:block"
        style={{
          left: trailXSpring,
          top: trailYSpring,
          opacity: isVisible ? 0.5 : 0,
        }}
      />
    </>
  )
}
