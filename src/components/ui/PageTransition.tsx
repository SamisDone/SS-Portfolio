import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, createContext, useContext, useCallback } from 'react'

interface TransitionContextType {
  triggerTransition: (targetId: string) => void
  isTransitioning: boolean
}

const TransitionContext = createContext<TransitionContextType>({
  triggerTransition: () => {},
  isTransitioning: false,
})

export const usePageTransition = () => useContext(TransitionContext)

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [targetSection, setTargetSection] = useState<string | null>(null)

  const triggerTransition = useCallback((targetId: string) => {
    setTargetSection(targetId)
    setIsTransitioning(true)
  }, [])

  useEffect(() => {
    if (isTransitioning && targetSection) {
      // At the peak of animation, scroll to target
      const timer = setTimeout(() => {
        const element = document.getElementById(targetSection)
        if (element) {
          element.scrollIntoView({ behavior: 'instant' })
        }
      }, 400)

      // End transition
      const endTimer = setTimeout(() => {
        setIsTransitioning(false)
        setTargetSection(null)
      }, 800)

      return () => {
        clearTimeout(timer)
        clearTimeout(endTimer)
      }
    }
  }, [isTransitioning, targetSection])

  return (
    <TransitionContext.Provider value={{ triggerTransition, isTransitioning }}>
      {children}
      <TransitionOverlay isActive={isTransitioning} />
    </TransitionContext.Provider>
  )
}

function TransitionOverlay({ isActive }: { isActive: boolean }) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-[9990] pointer-events-none overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Multiple bars sliding across */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-x-0 bg-primary/90"
              style={{ 
                height: `${100 / 5}%`,
                top: `${(100 / 5) * i}%`,
              }}
              variants={{
                hidden: { scaleX: 0, originX: i % 2 === 0 ? 0 : 1 },
                visible: { 
                  scaleX: 1,
                  transition: { 
                    duration: 0.4, 
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }
                },
                exit: { 
                  scaleX: 0,
                  originX: i % 2 === 0 ? 1 : 0,
                  transition: { 
                    duration: 0.4, 
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }
                },
              }}
            />
          ))}

          {/* Center accent line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-background"
            variants={{
              hidden: { scaleY: 0, originY: 0 },
              visible: { 
                scaleY: 1,
                transition: { duration: 0.3, delay: 0.2, ease: 'easeOut' }
              },
              exit: { 
                scaleY: 0,
                originY: 1,
                transition: { duration: 0.3, ease: 'easeIn' }
              },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
