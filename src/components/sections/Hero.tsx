import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/constants'

export function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex justify-center relative z-20"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan via-primary to-violet rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            {/* Image container */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-colors duration-300 bg-card">
              <img 
                src="/profile.png" 
                alt="Samonwita Sarker" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <motion.div 
              className="absolute -inset-3 rounded-full border border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>

        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-primary text-sm md:text-base mb-6"
        >
          // Pushing boundaries to become a competent engineer
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
        >
          <span className="block">Crafting</span>
          <span className="block gradient-text-cyan">Digital Impact.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed px-4"
        >
          Interfaces that move. Code that explains itself.
          <br />
          <span className="text-foreground">Full-stack developer</span>, <span className="text-foreground">ML enthusiast</span> & <span className="text-foreground">competitive programmer</span> crafting digital experiences with precision.
        </motion.p>



        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 transition-colors magnetic-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
          </div>

          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground hover:text-foreground transition-colors mt-8 inline-block"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-10 hidden md:block"
      >
        <div className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">location:</span> {PERSONAL_INFO.location}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 right-10 hidden md:block"
      >
        <div className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">status:</span> available for work
        </div>
      </motion.div>
    </section>
  )
}
