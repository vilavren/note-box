import { PlusCircle } from 'lucide-react'
import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { Button } from '@/components/ui/button'
import { fetchCreateDocuments } from '@/store/documents/documetns.asyncActions'
import { AppDispatch } from '@/store/store'

export const DocumentsPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleCreate = () => {
    dispatch(fetchCreateDocuments())
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
        Создать документ
      </Button>
    </div>
  )
}
