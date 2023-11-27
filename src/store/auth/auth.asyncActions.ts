import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import axios from '../../utils/axios'

import { IProfile, ILogin, ISignup } from './auth.types'

const createAuthThunk = <T>(url: string, payloadKey: string) => {
  return createAsyncThunk<IProfile, T>(
    `auth/${payloadKey}`,
    async (params: T) => {
      try {
        const response = await axios.post<IProfile>(url, params)
        return response.data
      } catch (error) {
        if (error instanceof AxiosError) {
          throw new Error(error.response?.data.message)
        }
        throw error
      }
    }
  )
}

export const fetchLogin = createAuthThunk<ILogin>('/login', 'login')

export const fetchSignup = createAuthThunk<ISignup>('/signup', 'signup')

export const fetchIsAuth = createAsyncThunk('/getMe', async () => {
  const { data } = await axios.get<IProfile>('/me')
  return data
})
