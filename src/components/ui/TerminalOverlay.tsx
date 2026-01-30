import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, X } from 'lucide-react'

const COMMANDS = {
  help: 'Display available commands',
  whoami: 'Professional identity check',
  projects: 'List significant engineering works',
  skills: 'Technical stack traversal',
  clear: 'Sanitize terminal buffer',
  exit: 'Terminate session'
}

export function TerminalOverlay() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>(['Welcome to SST_OS v1.0.4', 'Type "help" to begin...'])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`') {
        e.preventDefault()
        setIsOpen(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.toLowerCase().trim()
    setHistory(prev => [...prev, `> ${cmd}`])

    switch (cleanCmd) {
      case 'help':
        setHistory(prev => [...prev, ...Object.entries(COMMANDS).map(([k, v]) => `${k.padEnd(10)} - ${v}`)])
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
      case 'clear':
        setHistory([])
        break
      case 'exit':
        setIsOpen(false)
        break
      default:
        if (cleanCmd) setHistory(prev => [...prev, `Command not found: ${cleanCmd}. Type "help" for a list of commands.`])
    }
    setInput('')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-20 bg-background/40 backdrop-blur-md"
        >
          <div className="w-full max-w-3xl h-[500px] bg-black/90 border border-primary/30 rounded-lg shadow-2xl flex flex-col font-mono overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
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
              className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-2 text-sm"
            >
              {history.map((line, i) => (
                <div key={i} className={line.startsWith('>') ? 'text-primary' : 'text-foreground/80'}>
                  {line}
                </div>
              ))}
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
