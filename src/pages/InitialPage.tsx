import { FC } from 'react'

import { Heading } from '@/components/common/Heading'
import { People } from '@/components/common/People'

export const InitialPage: FC = () => {
  return (
    <div className="flex min-h-full flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-1 flex-col items-center justify-between gap-y-8 px-6 pb-0 text-center md:justify-between">
        <Heading />
        <People />
        {/* <Footer /> */}
      </div>
    </div>
  )
}
