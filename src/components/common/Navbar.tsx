import { FC } from 'react'

import { ModeToggle } from '../ui/mode-toggle'

import { Logo } from './Logo'

import { Button } from '@/components/ui/button'
import { useScrollTop } from '@/hooks/useScrollTop'
import { cn } from '@/lib/utils'

export const Navbar: FC = () => {
  const scrolled = useScrollTop()

  return (
    <div
      className={cn(
        ' z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-4',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className="flex w-full flex-row-reverse items-center justify-between gap-x-2 md:ml-auto md:flex-row md:justify-end">
        <Button variant="ghost" size="sm">
          Войти
        </Button>
        <ModeToggle />
      </div>
    </div>
  )
}
