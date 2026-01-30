import { motion } from 'framer-motion'
import { PERSONAL_INFO } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm text-muted-foreground"
          >
            Designed & Built by <span className="text-primary">{PERSONAL_INFO.name}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-6 font-mono text-xs text-muted-foreground"
          >
            <span>© 2025</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Built with React & Framer Motion</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
