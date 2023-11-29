import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from './auth/auth.slice'
import { saveState } from './localStorage'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

store.subscribe(() => {
  saveState({ jwt: store.getState().auth.jwt }, 'token')
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
