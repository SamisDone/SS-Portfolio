import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BOOT_LOGS = [
  'INITIALIZING SST_OS v1.0.4...',
  'LOADING NEURAL CORE...',
  'CONNECTING TO ARSENAL (projects/skills)...',
  'OPTIMIZING INTERFACE...',
  'SYSTEM READY.',
]

export function BootLoader({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let currentLogIndex = 0
    const logInterval = setInterval(() => {
      if (currentLogIndex < BOOT_LOGS.length) {
        setLogs(prev => [...prev, BOOT_LOGS[currentLogIndex]])
        currentLogIndex++
      } else {
        clearInterval(logInterval)
        setTimeout(onComplete, 800)
      }
    }, 400)

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 20)

    return () => {
      clearInterval(logInterval)
      clearInterval(progressInterval)
    }
  }, [onComplete])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[1000] bg-black flex items-center justify-center font-mono p-6"
    >
      <div className="w-full max-w-md">
        {/* Logs */}
        <div className="space-y-1 mb-8">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-xs ${i === BOOT_LOGS.length - 1 ? 'text-primary' : 'text-primary/60'}`}
            >
              <span className="mr-2">❯</span>
              {log}
            </motion.div>
          ))}
        </div>

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
