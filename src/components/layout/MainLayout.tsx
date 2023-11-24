import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout: FC = () => {
  return (
    <div className="flex h-full dark:bg-[#1F1F1F]">
      {/* <Sidebar /> */}
      <main className="h-full flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
