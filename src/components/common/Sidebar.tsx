import { ChevronsLeft, MenuIcon } from 'lucide-react'
import { ElementRef, FC, useRef } from 'react'

export const Sidebar: FC = () => {
  const isResizingRef = useRef(false)
  const sidebarRef = useRef<ElementRef<'aside'>>(null)
  const navbarRef = useRef<ElementRef<'div'>>(null)

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()

    isResizingRef.current = true

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizingRef.current) return

    let newWidth = e.clientX

    if (newWidth < 240) newWidth = 240
    if (newWidth > 480) newWidth = 480

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`
      navbarRef.current.style.setProperty('left', `${newWidth}px`)
      navbarRef.current.style.setProperty('width', `calc(100% - ${newWidth}px)`)
    }
  }

  const handleMouseUp = () => {
    isResizingRef.current = false

    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  return (
    <>
      <aside
        ref={sidebarRef}
        className="group/sidebar relative z-[99999] flex h-full w-60 flex-col overflow-y-auto bg-secondary"
      >
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
        <div
          onMouseDown={handleMouseDown}
          className="absolute right-0 top-0 h-full w-1 cursor-ew-resize bg-primary/10 opacity-0 transition group-hover/sidebar:opacity-100 "
        />
      </aside>
      <div
        ref={navbarRef}
        className="absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]"
      >
        <nav className="w-full bg-transparent p-3">
          <MenuIcon role="button" className="h-6 w-6 text-muted-foreground" />
        </nav>
      </div>
    </>
  )
}
