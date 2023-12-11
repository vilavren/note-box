import { FileIcon } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { ItemSidebar } from './ItemSidebar'

import { EnumStatus } from '@/interfaces/status.enum'
import { cn } from '@/lib/utils'
import { fetchGetAllDocuments } from '@/store/documents/documetns.asyncActions'
import { AppDispatch, RootState } from '@/store/store'

interface DocumentsListProps {
  level?: number
  data?: []
}

export const DocumentList = ({ level = 0 }: DocumentsListProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { activeDocument, documents } = useSelector(
    (s: RootState) => s.documents
  )
  const { documentId } = useParams()

  useEffect(() => {
    dispatch(fetchGetAllDocuments())
  }, [activeDocument.item])

  const onRedirect = (documentId: string) => {
    navigate(`/documents/${documentId}`)
  }

  if (documents.items.length === 0 && documents.status === EnumStatus.LOADING)
    return (
      <div className="flex gap-2 flex-col">
        <ItemSidebar.Skeleton level={level} />
        {level === 0 && (
          <>
            <ItemSidebar.Skeleton level={level} />
            <ItemSidebar.Skeleton level={level} />
            <ItemSidebar.Skeleton level={level} />
          </>
        )}
      </div>
    )

  return (
    <>
      <p
        style={{ paddingLeft: level ? `${level * 12 + 25}px` : undefined }}
        className={cn(
          'hidden text-sm font-medium text-muted-foreground/80',
          level === 0 && 'hidden'
        )}
      >
        Пусто
      </p>
      {documents.items.map((d) => (
        <div key={d.id}>
          <ItemSidebar
            id={d.id}
            onClick={() => onRedirect(d.id)}
            label={d.title}
            icon={FileIcon}
            documentIcon={d.icon}
            active={documentId === d.id}
            level={level}
          />
        </div>
      ))}
    </>
  )
}
