import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../utils/axios'

import { IDocument } from './documents.types'

export const fetchCreateDocuments = createAsyncThunk(
  'documents/createDocuments',
  async () => {
    const { data } = await axios.post<IDocument>('/documents')
    return data
  }
)

export const fetchGetAllDocuments = createAsyncThunk(
  'documents/getAllDocuments',
  async () => {
    const { data } = await axios.get<IDocument[]>('/documents')
    return data
  }
)
