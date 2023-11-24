import { FC } from 'react'

import { Logo } from './Logo'

import { Button } from '@/components/ui/button'

export const Footer: FC = () => {
  return (
    <div className="z-50 flex w-full items-center bg-background p-6 align-bottom dark:bg-[#1F1F1F] ">
      <Logo />
      <div className="flex w-full flex-col items-center gap-x-2 text-muted-foreground md:ml-auto md:flex-row md:justify-end ">
        <Button variant="ghost" size="sm">
          Политика конфиденциальности
        </Button>
        <Button variant="ghost" size="sm">
          Условия использования
        </Button>
      </div>
    </div>
  )
}
