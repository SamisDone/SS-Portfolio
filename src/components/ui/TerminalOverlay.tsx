import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal as TerminalIcon, X } from 'lucide-react'
import { Terminal, TypingAnimation, AnimatedSpan } from './terminal'

const COMMANDS = {
  help: 'Display available commands',
  whoami: 'Professional identity check',
  projects: 'List significant engineering works',
  skills: 'Technical stack traversal',
  hint: 'Unlock hidden potentials',
  reset: 'Deactivate override protocols',
  clear: 'Sanitize terminal buffer',
  exit: 'Terminate session'
}

const CATEGORIES = {
  CORE: ['whoami', 'projects', 'skills'],
  SYSTEM: ['help', 'clear', 'exit'],
  SECRET: ['hint', 'reset']
}

export function TerminalOverlay() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([
    'Welcome to SST_OS v1.0.4', 
    'System Status: OPTIMIZED', 
    '!! Restricted protocols detected. Use "help" to view.',
    'Type "help" to explore system capabilities...'
  ])
  const [showKonamiHint, setShowKonamiHint] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.toLowerCase().trim()
    setHistory(prev => [...prev, `> ${cmd}`])

    switch (cleanCmd) {
      case 'help':
        setHistory(prev => [
          ...prev, 
          '--- SYSTEM CAPABILITIES ---',
          ...CATEGORIES.CORE.map(k => `${k.padEnd(12)} - ${(COMMANDS as any)[k]}`),
          ...CATEGORIES.SYSTEM.map(k => `${k.padEnd(12)} - ${(COMMANDS as any)[k]}`),
          '',
          '--- RESTRICTED PROTOCOLS ---',
          ...CATEGORIES.SECRET.map(k => `!! ${k.padEnd(9)} - ${(COMMANDS as any)[k]}`)
        ])
        break
      case 'whoami':
        setHistory(prev => [...prev, 'Samonwita Sarker: Full-Stack Developer, ML Enthusiast, and Competitive Programmer. Currently building systems that think.'])
        break
      case 'projects':
        setHistory(prev => [...prev, 'Live Projects: TabSaver, ResumeForge, SortnPlay, PixelArt, GlitchBreach, Hangman, MediHub.'])
        break;
      case 'skills':
        setHistory(prev => [...prev, 'Frontend: React, Next.js, Tailwind, Framer Motion', 'Backend: Node.js, Express, PostgreSQL, Firebase', 'ML: Python, TensorFlow, PyTorch, OpenCV'])
        break
      case 'hint':
        setShowKonamiHint(true)
        break
      case 'reset':
        window.dispatchEvent(new CustomEvent('reset-system'))
        setHistory(prev => [...prev, 'Resetting system parameters...', 'Protocols normalized.'])
        break
      case 'clear':
        setHistory([])
        setShowKonamiHint(false)
        break
      case 'exit':
        setIsOpen(false)
        break
      default:
        if (cleanCmd) setHistory(prev => [...prev, `Command not found: ${cleanCmd}. Type "help" for a list of commands.`])
    }
    setInput('')
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`') {
        e.preventDefault()
        setIsOpen(prev => !prev)
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    const handleOpen = (e: any) => {
      setIsOpen(true)
      if (e.detail?.command) {
        handleCommand(e.detail.command)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('open-terminal' as any, handleOpen)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('open-terminal' as any, handleOpen)
    }
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-20 bg-black/60 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl h-[600px] bg-black/90 border border-primary/30 rounded-lg shadow-2xl flex flex-col font-mono overflow-hidden cursor-default"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground uppercase tracking-widest">SST_Terminal</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div 
              ref={scrollRef}
              className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-4 text-sm"
            >
              <div className="space-y-2">
                {history.map((line, i) => {
                  let colorClass = 'text-foreground/80'
                  if (line.startsWith('>')) colorClass = 'text-primary'
                  else if (line.startsWith('---')) colorClass = 'text-primary/60 font-bold'
                  else if (line.startsWith('!!')) colorClass = 'text-yellow-500 font-bold'
                  
                  return (
                    <div key={i} className={colorClass}>
                      {line}
                    </div>
                  )
                })}
              </div>

              {showKonamiHint && (
                <Terminal className="mt-4 bg-black/50 border-primary/20 max-w-full">
                  <TypingAnimation duration={30}>DETECTING_LEGACY_PROTOCOL...</TypingAnimation>
                  <AnimatedSpan className="text-yellow-500">✔ Neural connection established.</AnimatedSpan>
                  <AnimatedSpan className="text-primary">✔ Accessing hidden archives...</AnimatedSpan>
                  <TypingAnimation duration={30} delay={500}>
                    {"Sequence Required: [UP][UP][DOWN][DOWN][LEFT][RIGHT][LEFT][RIGHT][B][A]"}
                  </TypingAnimation>
                  <AnimatedSpan className="text-primary/60 italic mt-2">
                    Execute sequence anywhere to initiate OVERRIDE.
                  </AnimatedSpan>
                </Terminal>
              )}

              <div className="flex items-center gap-2 text-primary pt-2">
                <span>❯</span>
                <input
                  autoFocus
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCommand(input)}
                  className="flex-1 bg-transparent border-none outline-none text-foreground caret-primary"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
