import { FC } from 'react'

import { Footer } from '@/components/common/Footer'
import { Heading } from '@/components/common/Heading'
import { Navbar } from '@/components/common/Navbar'
import { People } from '@/components/common/People'

export const InitialPage: FC = () => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full pt-20 md:pt-28">
        <div className="flex min-h-full flex-col dark:bg-[#1F1F1F]">
          <div className="flex flex-1 flex-col items-center justify-between gap-y-8 px-6 pb-0 text-center md:justify-between">
            <Heading />
            <People />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}
