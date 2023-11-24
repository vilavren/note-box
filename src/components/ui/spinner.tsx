import { VariantProps, cva } from 'class-variance-authority'
import { Loader } from 'lucide-react'
import { FC } from 'react'

import { cn } from '@/lib/utils'

const spinnerVariants = cva('animate-spin text-muted-foreground', {
  variants: {
    size: {
      default: 'h-4 w-4',
      sm: 'h-2 w-2',
      lg: 'h-6 w-6',
      xl: 'h-10 w-10',
      icon: 'h-10 w-10',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

export const Spinner: FC<SpinnerProps> = ({ size }) => {
  return <Loader className={cn(spinnerVariants({ size }))} />
}
