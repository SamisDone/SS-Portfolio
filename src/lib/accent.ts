/**
 * Shared accent color utilities used across multiple section components.
 * Centralizes the accent → Tailwind class mapping to avoid duplication.
 */

export type Accent = 'cyan' | 'acid' | 'violet' | 'blood'

export const accentText: Record<string, string> = {
  acid: 'text-acid',
  violet: 'text-violet',
  blood: 'text-blood',
  cyan: 'text-cyan',
}

export const accentBorder: Record<string, string> = {
  acid: 'border-acid/30 hover:border-acid',
  violet: 'border-violet/30 hover:border-violet',
  blood: 'border-blood/30 hover:border-blood',
  cyan: 'border-cyan/30 hover:border-cyan',
}

export const accentBg: Record<string, string> = {
  acid: 'bg-acid/10',
  violet: 'bg-violet/10',
  blood: 'bg-blood/10',
  cyan: 'bg-cyan/10',
}

export const accentBar: Record<string, string> = {
  acid: 'bg-acid',
  violet: 'bg-violet',
  blood: 'bg-blood',
  cyan: 'bg-cyan',
}

export const accentBorderLeft: Record<string, string> = {
  acid: 'border-l-acid',
  violet: 'border-l-violet',
  blood: 'border-l-blood',
  cyan: 'border-l-cyan',
}
