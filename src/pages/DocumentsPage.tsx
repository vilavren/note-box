import { PlusCircle } from 'lucide-react'
import { FC } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

export const DocumentsPage: FC = () => {
  const handleCreate = () => {
    toast('Новая запись создана!')
  }

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <img
        src="/empty.png"
        height="300"
        width="300"
        alt="Пустой документ"
        className="object-contain dark:hidden"
      />
      <img
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Пустой документ"
        className="object-contain hidden dark:block"
      />
      <h2 className="text-lg font-medium">Добро пожаловать в Note Box</h2>
      <Button onClick={handleCreate}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Создать запись
      </Button>
    </div>
  )
}
