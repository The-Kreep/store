export type Product = {
  name: string
  description: string
  price: number
  medias: string[]
  status: 'draft' | 'published' | 'archived'
  created: string
  variants: string[]
  collection: string
}
