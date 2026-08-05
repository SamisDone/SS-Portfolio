import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function OverrideOverlay() {
  const [glitchText, setGlitchText] = useState('SYSTEM_BREACH_DETECTED')

  useEffect(() => {
    const texts = [
      'SYSTEM_BREACH_DETECTED',
      'PROTOCOL_OVERRIDE_ENABLED',
      'ACCESSING_NEURAL_CORE',
      'NEURAL_FIREWALL_DISABLED',
      'DECRYPTING_ARSENAL...',
    ]
    let i = 0
    const interval = setInterval(() => {
      setGlitchText(texts[i % texts.length])
      i++
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-[80] pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* Full Screen Matrix Rain */}
      {/* Performant Matrix Rain */}
      <div className="absolute inset-0 opacity-[0.15] flex justify-around whitespace-nowrap overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="text-[10px] font-mono text-primary animate-matrix-rain"
            style={{
              animationDuration: `${8 + i * 1.5}s`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            {'01'.repeat(80)}
          </div>
        ))}
      </div>

      {/* Retro HUD Corners */}
      <div className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-primary/40 rounded-tl-xl" />
      <div className="absolute top-8 right-8 w-32 h-32 border-r-2 border-t-2 border-primary/40 rounded-tr-xl" />
      <div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-primary/40 rounded-bl-xl" />
      <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-primary/40 rounded-br-xl" />

      {/* Glitch Central Warning */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
        <motion.div
          animate={{
            opacity: [0, 1, 0, 1, 0.8, 1],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 0.2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 3 }}
          className="text-primary font-mono text-sm tracking-[0.5em] mb-4 bg-primary/20 px-4 py-1 border border-primary/30"
        >
          {glitchText}
        </motion.div>
      </div>

      {/* CRT Scanlines Overlay */}
      <div className="absolute inset-0 bg-scanline-pattern opacity-[0.05]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,255,100,0.2)]" />
    </div>
  )
}
