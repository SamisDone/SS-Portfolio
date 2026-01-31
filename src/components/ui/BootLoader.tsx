import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, TypingAnimation, AnimatedSpan } from './terminal'

const BOOT_LOGS = [
  'INITIALIZING SST_OS v1.0.4...',
  'LOADING NEURAL CORE...',
  'CONNECTING TO ARSENAL (projects/skills)...',
  'OPTIMIZING INTERFACE...',
  'SYSTEM READY.',
]

export function BootLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(onComplete, 1200) // Give terminal time to finish
          return 100
        }
        return prev + 1
      })
    }, 45)

    return () => clearInterval(progressInterval)
  }, [onComplete])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-0 z-[1000] bg-black flex items-center justify-center font-mono p-6"
    >
      <div className="w-full max-w-md">
        {/* Terminal Logs */}
        <Terminal className="mb-8 bg-transparent border-none shadow-none max-h-none h-auto overflow-visible p-0">
          <TypingAnimation duration={20} className="text-primary/80">
            {BOOT_LOGS[0]}
          </TypingAnimation>
          <AnimatedSpan delay={200} className="text-primary/60">
            <span className="mr-2 text-primary">❯</span>{BOOT_LOGS[1]}
          </AnimatedSpan>
          <AnimatedSpan delay={400} className="text-primary/60">
            <span className="mr-2 text-primary">❯</span>{BOOT_LOGS[2]}
          </AnimatedSpan>
          <AnimatedSpan delay={600} className="text-primary/60">
            <span className="mr-2 text-primary">❯</span>{BOOT_LOGS[3]}
          </AnimatedSpan>
          <TypingAnimation duration={40} delay={1000} className="text-primary font-bold">
            {BOOT_LOGS[4]}
          </TypingAnimation>
        </Terminal>

        {/* Progress Bar Container */}
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] uppercase tracking-widest text-primary/40">
            <span>Booting System</span>
            <span>{progress}%</span>
          </div>
          <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-primary"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </div>

        {/* Matrix Rain Decoration (Subtle) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
             <div className="flex justify-around w-full h-full text-[10px] whitespace-nowrap orientation-vertical leading-none animate-matrix-rain">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i}>0110101101010110110101010110101010101101010101</div>
                ))}
             </div>
        </div>
      </div>
    </motion.div>
  )
}
