export type AnimationType = 'elevate' | 'reveal' | 'unfold' | 'focus' | 'glide'

export interface Project {
  title: string
  subtitle: string
  type: 'Personal Project' | 'Group Project'
  description: string
  problem: string
  solution: string
  impact: string
  tech: string[]
  github: string
  live?: string
  accent: 'cyan' | 'acid' | 'violet' | 'blood'
  featured: boolean
  animation: AnimationType
}
