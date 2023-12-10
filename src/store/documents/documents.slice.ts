import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

import { IDocument, IDocumentsState } from './documents.types'
import {
  fetchCreateDocuments,
  fetchGetAllDocuments,
} from './documetns.asyncActions'

import { EnumStatus } from '@/interfaces/status.enum'

const initialState: IDocumentsState = {
  activeDocument: { item: undefined, status: EnumStatus.SUCCESS },
  documents: { items: [], status: EnumStatus.SUCCESS },
}

const documentsSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // fetchCreateDocuments
    builder.addCase(fetchCreateDocuments.pending, (state) => {
      state.activeDocument.status = EnumStatus.LOADING
      toast.loading('Создание нового документа...')
    })
    builder.addCase(
      fetchCreateDocuments.fulfilled,
      (state, action: PayloadAction<IDocument>) => {
        state.activeDocument.status = EnumStatus.LOADING
        state.activeDocument.item = action.payload
        toast.success('Новый документ создан!')
      }
    )
    builder.addCase(fetchCreateDocuments.rejected, (state) => {
      state.activeDocument.status = EnumStatus.ERROR
      toast.error('Ошибка при создании нового документа.')
    })

    // fetchGetAllDocuments
    builder.addCase(fetchGetAllDocuments.pending, (state) => {
      state.documents.status = EnumStatus.LOADING
    })
    builder.addCase(
      fetchGetAllDocuments.fulfilled,
      (state, action: PayloadAction<IDocument[]>) => {
        state.documents.status = EnumStatus.LOADING
        state.documents.items = action.payload
      }
    )
    builder.addCase(fetchGetAllDocuments.rejected, (state) => {
      state.documents.status = EnumStatus.LOADING
    })
  },
})

export const documentsReducer = documentsSlice.reducer
export const documentsActions = documentsSlice.actions
