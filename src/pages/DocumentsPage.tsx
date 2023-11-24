import { PlusCircle } from 'lucide-react'
import { FC } from 'react'

import { Button } from '@/components/ui/button'

export const DocumentsPage: FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <img src="/empty.png" height="300" width="300" alt="Пустой документ" />
      <h2 className="text-lg font-medium">Добро пожаловать в Note Box</h2>
      <Button>
        <PlusCircle className="mr-2 h-4 w-4" />
        Создать запись
      </Button>
    </div>
  )
}