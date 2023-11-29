import { ChevronDown, ChevronRight, LucideIcon } from 'lucide-react'
import { FC } from 'react'

import { cn } from '@/lib/utils'

interface ItemSidebarProps {
  label: string
  onClick: () => void
  icon: LucideIcon
  id?: string
  documentIcon?: string
  level?: number
  active?: boolean
  isSearch?: boolean
  onExpand?: () => void
  expanded?: boolean
}

export const ItemSidebar: FC<ItemSidebarProps> = ({
  label,
  onClick,
  icon: Icon,
  id,
  documentIcon,
  level = 0,
  active,
  isSearch,
  // onExpanded,
  expanded,
}) => {
  const ChevronIcon = expanded ? ChevronDown : ChevronRight

  return (
    <div
      onClick={onClick}
      role="button"
      style={{ paddingLeft: level ? `${level * 12 + 12}px` : '12px' }}
      className={cn(
        'group flex min-h-[27px] w-full items-center py-1 pr-3 text-sm font-medium text-muted-foreground hover:bg-primary/5',
        active && 'bg-primary/5 text-primary'
      )}
    >
      {!!id && (
        <div
          role="button"
          onClick={() => {}}
          className="mr-1 h-full rounded-sm hover:bg-neutral-300 dark:bg-neutral-600"
        >
          <ChevronIcon className="h-4 w-4 shrink-0 text-muted-foreground/50" />
        </div>
      )}

      {documentIcon ? (
        <div className="mr-2 shrink-0 text-[18px]">{documentIcon}</div>
      ) : (
        <Icon className="mr-2 h-[18px] shrink-0" />
      )}

      <span className="truncate">{label}</span>
      {isSearch && (
        <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      )}
    </div>
  )
}