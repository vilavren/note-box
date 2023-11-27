import { ArrowRight } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export const Heading: FC = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Ваши идеи, документы и планы. Добро пожаловать в&nbsp;
        <span className="underline">Note Box</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Note Box и ваша работа станет быстрее и продуктивнее.
      </h3>
      <Button>
        <Link to="/signup">Подключиться к Note Box</Link>
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  )
}
