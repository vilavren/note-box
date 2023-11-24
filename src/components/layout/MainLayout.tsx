import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

import { Sidebar } from '../common/Sidebar'

import { RootState } from '@/store/store'

export const MainLayout: FC = () => {
  const { jwt } = useSelector((state: RootState) => state.auth)

  if (!jwt) {
    return <Navigate to="/" />
  }

  return (
    <div className="flex h-full dark:bg-[#1F1F1F]">
      <Sidebar />
      <main className="h-full flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
