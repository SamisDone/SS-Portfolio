import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, Linkedin, Terminal, Database, ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sarker.samonwita@gmail.com', label: 'Email', username: 'sarker.samonwita' },
  { icon: Github, href: 'https://github.com/SamisDone', label: 'GitHub', username: '@SamisDone' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/samonwita-sarker-a87737262/', label: 'LinkedIn', username: 'samonwita-sarker' },
  { icon: Terminal, href: 'https://codeforces.com/profile/jinxed_sam', label: 'Codeforces', username: 'jinxed_sam' },
  { icon: Database, href: 'https://www.kaggle.com/samonwitasarker', label: 'Kaggle', username: 'samonwitasarker' },
]

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <motion.div style={{ y }} className="max-w-4xl mx-auto text-center relative z-10">
        {/* Availability Badge */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={isInView ? { opacity: 1, scale: 1 } : {}}
           transition={{ duration: 0.5 }}
           className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary">Available for new projects</span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-muted-foreground font-mono text-xs uppercase tracking-[0.3em] block mb-4">05. What's Next?</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Get In <span className="gradient-text-cyan">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities and collaborations. 
            Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sarker.samonwita@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold rounded-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Mail className="w-5 h-5 relative z-10" />
            <span className="relative z-10 text-lg">Say Hello</span>
          </motion.a>
        </motion.div>

        {/* Social Bridge */}
        <div className="relative pt-12 border-t border-border/50">
          <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 px-4 bg-background text-[10px] font-mono text-muted-foreground uppercase tracking-widest leading-none">
            Digital Footprint
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group flex flex-col items-center gap-3 p-6 border border-border/50 rounded-sm bg-card/20 hover:border-primary/50 hover:bg-card/40 transition-all duration-300"
              >
                <div className="relative">
                   <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   <link.icon className="w-6 h-6 relative z-10 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1">{link.label}</p>
                  <p className="text-[10px] text-muted-foreground font-mono group-hover:text-primary/70 transition-colors">{link.username}</p>
                </div>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
