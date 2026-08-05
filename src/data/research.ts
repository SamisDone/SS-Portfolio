import { FileText, Trophy, Award } from 'lucide-react'
import type { Accent } from '@/lib/accent'

export interface Publication {
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
  authorHighlight?: string
  linkLabel?: string
}

export const publications: Publication[] = [
  {
    title: 'A Machine Learning and Explainable AI-Based Multiclass Police Fraud Prediction Scheme with SHAP Based Interpretability',
    authors: 'M. Chowdhury, J. Islam, Md. A. I. Semon, S. Sarker, M. M. Barua, A. Akter',
    venue: '2026 5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE), IEEE',
    year: '2026',
    doi: 'https://ieeexplore.ieee.org/document/11429440',
    icon: FileText,
    accent: 'cyan',
    authorHighlight: 'S. Sarker',
    linkLabel: 'View on IEEE Xplore',
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
