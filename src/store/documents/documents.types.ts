import { EnumStatus } from '@/interfaces/status.enum'

export interface IDocument {
  userId: string
  coverImage: string
  icon: string
  title: string
  content: string
  position: number
  isFavorite: boolean
  favoritePosition: number
  isArchived: boolean
  isPublished: boolean
  _id: string
  __v: number
  id: string
}

export interface IDocumentsState {
  activeDocument: { item: IDocument | undefined; status: EnumStatus }
  documents: { items: IDocument[]; status: EnumStatus }
}
