export interface Hint {
  label: string
  kind?: 'Keyword' | 'Function'
  insertText: string
  detail?: string
}