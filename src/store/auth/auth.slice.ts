import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../../interfaces/status.enum'
import { loadState } from '../localStorage'

import { fetchLogin, fetchSignup, fetchIsAuth } from './auth.asyncActions'
import { IAuthPersistentState, IAuthState } from './auth.types'

const initialState: IAuthState = {
  jwt: loadState<IAuthPersistentState>('token')?.jwt ?? undefined,
  status: Status.LOADING,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = undefined
      state.jwt = undefined
    },
    clearLoginError: (state) => {
      state.loginErrorMessage = undefined
    },
    clearSignupError: (state) => {
      state.signupErrorMessage = undefined
    },
  },
  extraReducers(builder) {
    // login
    builder.addCase(fetchLogin.pending, (state) => {
      state.status = Status.LOADING
      state.jwt = undefined
    })
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
      state.jwt = action.payload?.token
    })
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.status = Status.ERROR
      state.loginErrorMessage = action.error.message
    })

    // signup
    builder.addCase(fetchSignup.pending, (state) => {
      state.status = Status.LOADING
      state.data = undefined
    })
    builder.addCase(fetchSignup.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
      state.data = action.payload
      state.jwt = action.payload?.token
    })
    builder.addCase(fetchSignup.rejected, (state, action) => {
      state.status = Status.ERROR
      state.signupErrorMessage = action.error.message
    })

    // isAuth
    builder.addCase(fetchIsAuth.pending, (state) => {
      state.status = Status.LOADING
      state.data = undefined
    })
    builder.addCase(fetchIsAuth.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
      state.data = action.payload
    })
    builder.addCase(fetchIsAuth.rejected, (state) => {
      state.status = Status.ERROR
      state.data = undefined
    })
  },
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
