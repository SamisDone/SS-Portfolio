import { motion, AnimatePresence } from 'framer-motion'
import { CursorGlow } from '../ui/CursorGlow'
import { ScrollProgress } from '../ui/ScrollProgress'
import { PageTransitionProvider } from '../ui/PageTransition'
import { Navbar } from '../sections/Navbar'
import { TerminalOverlay } from '../ui/TerminalOverlay'
import { BootLoader } from '../ui/BootLoader'
import { OverrideOverlay } from '../ui/OverrideOverlay'
import { useState, useEffect } from 'react'

export function RootLayout({ children }: { children: React.ReactNode }) {
  const [isBooting, setIsBooting] = useState(true)
  const [isKonamiActive, setIsKonamiActive] = useState(false)
  const [shouldShake, setShouldShake] = useState(false)

  // Konami Code Handler
  useEffect(() => {
    let keys: string[] = []
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.push(e.key)
      keys = keys.slice(-10)
      if (keys.join(',') === konami.join(',')) {
        setShouldShake(true)
        setTimeout(() => {
          setIsKonamiActive(prev => !prev)
          setShouldShake(false)
        }, 500)
      }
    }
    
    const handleReset = () => setIsKonamiActive(false)
    
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('reset-system', handleReset)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('reset-system', handleReset)
    }
  }, [])

  return (
    <PageTransitionProvider>
      <motion.div 
        animate={shouldShake ? {
          x: [-10, 10, -10, 10, 0],
          y: [-5, 5, -5, 5, 0]
        } : {}}
        transition={{ duration: 0.5 }}
        className={`min-h-screen bg-background text-foreground noise relative isolate transition-colors duration-1000 ${isKonamiActive ? 'matrix-theme' : ''}`}
      >
        <CursorGlow />
        <AnimatePresence>
          {isBooting && (
            <BootLoader onComplete={() => setIsBooting(false)} />
          )}
        </AnimatePresence>
        
        {isKonamiActive && <OverrideOverlay />}

        {!isBooting && (
          <>
            <ScrollProgress />
            <TerminalOverlay />
            <Navbar />
            <motion.main
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {children}
            </motion.main>
          </>
        )}
      </motion.div>
    </PageTransitionProvider>
  )
}

