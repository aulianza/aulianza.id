import rehypeShiki, { type RehypeShikiOptions } from '@shikijs/rehype'
import type { Root } from 'hast'
import type { Plugin } from 'unified'

const titleRegex = /title="([^"]*)"/

export const DEFAULT_SHIKI_THEMES = {
  light: 'github-light-default',
  dark: 'github-dark-default',
}

export const rehypeCode: [
  Plugin<[RehypeShikiOptions], Root>,
  RehypeShikiOptions,
] = [
  rehypeShiki,
  {
    themes: DEFAULT_SHIKI_THEMES,
    defaultColor: false,
  },
]
