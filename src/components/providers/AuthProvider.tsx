import { FC, PropsWithChildren, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Spinner } from '../ui/spinner'

import { Status } from '@/interfaces/status.enum'
import { fetchIsAuth } from '@/store/auth/auth.asyncActions'
import { AppDispatch, RootState } from '@/store/store'

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>()

  const { status } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    dispatch(fetchIsAuth())
  }, [])

  if (status === Status.LOADING) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  return children
}
