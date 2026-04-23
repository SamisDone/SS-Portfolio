import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FileText, Trophy, Award, ExternalLink } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { accentText, accentBorder, accentBg } from '@/lib/accent'

interface Publication {
  title: string
  authors: string
  venue: string
  year: string
  doi?: string
  icon: typeof FileText
  accent: 'cyan' | 'acid' | 'violet'
  highlight?: string
  description?: string
  status?: string
}

const publications: Publication[] = [
  {
    title: 'A Machine Learning and Explainable AI-Based Multiclass Police Fraud Prediction Scheme with SHAP Based Interpretability',
    authors: 'M. Chowdhury, J. Islam, Md. A. I. Semon, S. Sarker, M. M. Barua, A. Akter',
    venue: '2026 5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE), IEEE',
    year: '2026',
    doi: 'https://ieeexplore.ieee.org/document/11429440',
    icon: FileText,
    accent: 'cyan',
  },
  {
    title: '7th Rank — DravidianLangTech @ ACL 2026 Shared Task',
    authors: '',
    venue: 'ACL 2026 — Association for Computational Linguistics',
    year: 'Feb 2026',
    icon: Trophy,
    accent: 'acid',
    highlight: '7th Place Internationally',
    description: 'Developed a multimodal Deep Learning approach for Telugu Language LLM Prompt Recovery. Engineered a style-recovery mechanism to accurately restore linguistic nuances in machine-generated text.',
    status: 'Paper under review at a Tier-1 NLP conference',
  },
  {
    title: 'Finalist — PoliMemeDecode Datathon (CUET CSE FEST 2025)',
    authors: '',
    venue: 'CUET CSE FEST 2025',
    year: 'Dec 2025',
    icon: Award,
    accent: 'violet',
    description: 'Designed an advanced classification system for multimodal political memes. Optimized detection accuracy through effective feature fusion of visual and textual data streams.',
  },
]

const getAccent = (accent: string) => ({
  text: accentText[accent] || accentText.cyan,
  border: accentBorder[accent] || accentBorder.cyan,
  bg: accentBg[accent] || accentBg.cyan,
})

export function Research() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section id="research" className="py-12 md:py-24 px-4 md:px-6 relative bg-muted/20 overflow-hidden" ref={ref}>
      <motion.div style={{ y }} className="max-w-6xl mx-auto">
        <SectionHeader
          number="03"
          title="Research & Publications"
          subtitle="PEER_REVIEWED_CONTRIBUTIONS"
          isInView={isInView}
        />

        <div className="space-y-6">
          {publications.map((pub, index) => {
            const accent = getAccent(pub.accent)
            return (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-6 md:p-8 border ${accent.border} rounded-sm bg-card/50 backdrop-blur-sm transition-all duration-300 group overflow-hidden`}
            >
              {/* Accent line */}
              <div className={`absolute top-0 left-0 w-full h-px ${accent.bg} opacity-50 group-hover:opacity-100 transition-opacity`} />

              <div className="flex items-start gap-4 md:gap-6">
                {/* Icon */}
                <div className={`hidden sm:flex p-3 rounded-sm ${accent.bg} items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <pub.icon className={`w-6 h-6 ${accent.text}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    {pub.highlight && (
                      <span className={`px-2 py-0.5 text-[10px] uppercase tracking-widest border rounded-full font-mono ${accent.border} ${accent.text}`}>
                        {pub.highlight}
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                      {pub.year}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                    {pub.title}
                  </h3>

                  {pub.authors && (
                    <p className="text-sm text-muted-foreground mb-2 font-mono">
                      {pub.authors.split('S. Sarker').map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && <span className="text-primary font-semibold">S. Sarker</span>}
                        </span>
                      ))}
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground italic mb-3">
                    {pub.venue}
                  </p>

                  {pub.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {pub.description}
                    </p>
                  )}

                  {pub.status && (
                    <span className={`inline-block px-2 py-0.5 text-[10px] uppercase tracking-widest border border-primary/30 rounded-full font-mono text-primary`}>
                      {pub.status}
                    </span>
                  )}

                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-mono ${accent.text} hover:underline mt-2`}
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>View on IEEE Xplore</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </motion.div>
    </section>
  )
}
