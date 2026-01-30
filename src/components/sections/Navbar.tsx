import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { usePageTransition } from '@/components/ui/PageTransition'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useActiveSection()
  const { triggerTransition } = usePageTransition()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    triggerTransition(sectionId)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
        isScrolled && "bg-background/80 backdrop-blur-lg border-b border-border"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="font-mono text-lg font-semibold text-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SS<span className="text-foreground">/</span>_
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={cn(
                "relative font-mono text-sm transition-colors group",
                activeSection === item.id 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className={cn(
                "mr-1 transition-colors",
                activeSection === item.id ? "text-primary" : "text-primary/60"
              )}>0{index + 1}.</span>
              {item.label}
              <motion.span 
                className="absolute bottom-0 left-0 h-px bg-primary"
                initial={{ width: 0 }}
                animate={{ width: activeSection === item.id ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          <ThemeToggle />
        </div>

        {/* Active Section Indicator (Desktop) */}
        <motion.div 
          className="hidden md:block absolute -bottom-px left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)' }}
        />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="md:hidden overflow-hidden bg-card/95 backdrop-blur-lg mt-4 rounded-lg border border-border"
      >
        <div className="p-4 flex flex-col gap-4">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                setIsOpen(false)
                triggerTransition(item.id)
              }}
              className={cn(
                "font-mono text-sm transition-colors",
                activeSection === item.id 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className={cn(
                "mr-2",
                activeSection === item.id ? "text-primary" : "text-primary/60"
              )}>0{index + 1}.</span>
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
