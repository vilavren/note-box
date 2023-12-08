import { ItemSidebar } from './ItemSidebar'

interface DocumentsListProps {
  parentDocumentId?: string
  level?: number
  data?: []
}

export const DocumentList = ({ level = 0 }: DocumentsListProps) => {
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
}
