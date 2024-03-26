import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

export const remarkCode: Plugin = () => {
  return (tree) => {
    visit(tree, 'code', (node: any) => {
      if (node.type !== 'code') return
      if (!node.lang) node.lang = 'plaintext'
    })
  }
}
