import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Trophy, Users, Mic2 } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'

const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Chittagong University of Engineering and Technology (CUET)',
    period: '2023 – Present',
    details: '',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Viqarunnisa Noon College',
    period: '2021',
    details: 'GPA: 5.00',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Viqarunnisa Noon School',
    period: '2019',
    details: 'GPA: 5.00',
  },
]

const activities = [
  {
    icon: Users,
    title: 'CUET Computer Club (CCC)',
    role: 'Member',
    period: '2023 – Present',
    description: 'Intensive competitive programming sessions and technical workshops. Inter-university contests and complex problem solving.',
    accent: 'cyan',
  },
  {
    icon: Mic2,
    title: 'CUET Model United Nations',
    role: 'Joint Organizing Secretary',
    period: '2023 – Present',
    description: 'Developed negotiation and public speaking skills. Drafted position papers on global technological policies.',
    accent: 'acid',
  },
  {
    icon: Users,
    title: 'CUET Debating Society',
    role: 'Member',
    period: '2023 – Present',
    description: 'Parliamentary debates enhancing analytical thinking and logical reasoning. Clear communication of complex ideas.',
    accent: 'violet',
  },
]

const certifications = [
  { name: 'Data Science & Python Portfolio', issuer: 'DataCamp' },
  { name: 'Full Stack Development Profile', issuer: 'freeCodeCamp' },
  { name: 'MatrixMUN Credential', issuer: 'Credsverse' },
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp' },
]

const getAccentText = (accent: string) => {
  switch (accent) {
    case 'acid': return 'text-acid'
    case 'violet': return 'text-violet'
    case 'blood': return 'text-blood'
    default: return 'text-cyan'
  }
}

const getAccentBorder = (accent: string) => {
  switch (accent) {
    case 'acid': return 'border-l-acid'
    case 'violet': return 'border-l-violet'
    case 'blood': return 'border-l-blood'
    default: return 'border-l-cyan'
  }
}

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [70, -70])

  return (
    <section id="experience" className="py-12 md:py-24 px-4 md:px-6 relative overflow-hidden" ref={ref}>
      <motion.div style={{ y }} className="max-w-6xl mx-auto">
        <SectionHeader 
          number="04" 
          title="Journey & Growth" 
          isInView={isInView}
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>
              <span className="font-mono tracking-tight">Academic Pathway</span>
            </h3>
            <div className="space-y-10 border-l border-border/50 ml-4 pl-8 relative">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                  </div>
                  <span className="font-mono text-[10px] text-primary uppercase tracking-widest">{edu.period}</span>
                  <h4 className="text-lg font-bold mt-1 group-hover:text-primary transition-colors">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  {edu.details && (
                    <div className="mt-2 inline-block px-2 py-0.5 bg-acid/10 border border-acid/20 rounded-sm text-xs font-mono text-acid">
                      {edu.details}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-16">
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-acid/10 flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-acid" />
                </div>
                <span className="font-mono tracking-tight">Verified Skills</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="p-4 border border-border rounded-sm bg-card/30 hover:border-acid/50 hover:bg-card/50 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-sm font-bold group-hover:text-acid transition-colors">{cert.name}</p>
                      <p className="text-[10px] text-muted-foreground font-mono uppercase mt-1">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                04b.
              </div>
              <span className="font-mono tracking-tight">Beyond the Labs</span>
            </h3>
            <div className="grid gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className={`p-6 border border-border rounded-sm bg-card/30 hover:bg-card/50 transition-all relative overflow-hidden group`}
                >
                   {/* Background Accent */}
                   <div className={`absolute top-0 left-0 w-1 h-full ${getAccentText(activity.accent).replace('text-', 'bg-')} opacity-30 group-hover:opacity-100 transition-opacity`} />
                   
                  <div className="flex items-start gap-5">
                    <div className={`p-2 rounded-sm bg-muted group-hover:shadow-[0_0_15px_rgba(var(--${activity.accent}),0.2)] transition-all`}>
                      <activity.icon className={`w-6 h-6 ${getAccentText(activity.accent)}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                        <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{activity.title}</h4>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border border-current ${getAccentText(activity.accent)}`}>{activity.role}</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">{activity.period}</span>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{activity.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
