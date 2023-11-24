import { ChevronsLeft, MenuIcon } from 'lucide-react'
import { FC } from 'react'

export const Sidebar: FC = () => {
  return (
    <>
      <aside className="group/sidebar relative z-[99999] flex h-full w-60 flex-col overflow-y-auto bg-secondary">
        <div
          role="button"
          className="absolute right-2 top-3 h-6 w-6 rounded-sm text-muted-foreground opacity-0 transition hover:bg-neutral-300 group-hover/sidebar:opacity-100 dark:hover:bg-neutral-600"
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        <div>username</div>
        <div className="mt-4">
          <p>Документ</p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1 cursor-ew-resize bg-primary/10 opacity-0 transition group-hover/sidebar:opacity-100 " />
      </aside>
      <div className="absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]">
        <nav className="w-full bg-transparent p-3">
          <MenuIcon role="button" className="h-6 w-6 text-muted-foreground" />
        </nav>
      </div>
    </>
  )
}
