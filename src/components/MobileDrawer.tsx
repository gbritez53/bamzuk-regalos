import { useState, useEffect, useRef, useCallback } from 'react'
import type { NavItem, NavGroup } from '../data/navigation'

interface Props {
  mainLinks: NavItem[]
  categoryGroups: NavGroup[]
}

export default function MobileDrawer({ mainLinks, categoryGroups }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [openGroups, setOpenGroups] = useState<Set<number>>(new Set())
  const drawerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    setOpenGroups(new Set())
  }, [])

  const toggleGroup = (index: number) => {
    setOpenGroups(prev => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  useEffect(() => {
    if (!isOpen) {
      triggerRef.current?.focus()
      return
    }

    // Focus the close button when drawer opens
    closeButtonRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
        return
      }

      // Focus trap: keep Tab within the drawer panel
      if (e.key === 'Tab' && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, close])

  return (
    <>
      {/* Hamburger button */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menú"
        aria-expanded={isOpen}
        aria-controls="mobile-drawer"
        className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-border transition-colors"
      >
        <span className="block w-5 h-0.5 bg-foreground"></span>
        <span className="block w-5 h-0.5 bg-foreground"></span>
        <span className="block w-5 h-0.5 bg-foreground"></span>
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={close}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div
            id="mobile-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            className="fixed left-0 top-0 h-full w-80 max-w-[85vw] z-50 bg-surface overflow-y-auto shadow-xl flex flex-col"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-border sticky top-0 bg-surface">
              <span className="font-heading text-xl font-bold text-accent">Bamzuk</span>
              <button
                ref={closeButtonRef}
                onClick={close}
                aria-label="Cerrar menú"
                className="p-2 rounded-md hover:bg-border transition-colors text-foreground"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M4 4l12 12M16 4L4 16" />
                </svg>
              </button>
            </div>

            {/* Main links */}
            <nav className="px-4 py-4 border-b border-border">
              <ul className="space-y-1">
                {mainLinks.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={close}
                      className="block px-3 py-2 rounded-md text-foreground hover:bg-background hover:text-accent transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Category accordions */}
            <div className="px-4 py-4 flex-1">
              <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Categorías</p>
              <div className="space-y-1">
                {categoryGroups.map((group, i) => (
                  <div key={group.title} className="border border-border rounded-md overflow-hidden">
                    <button
                      onClick={() => toggleGroup(i)}
                      aria-expanded={openGroups.has(i)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-left text-sm font-medium text-foreground hover:bg-background transition-colors"
                    >
                      <span>{group.title}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className={`transition-transform duration-200 ${openGroups.has(i) ? 'rotate-180' : ''}`}
                      >
                        <path d="M4 6l4 4 4-4" />
                      </svg>
                    </button>
                    {openGroups.has(i) && (
                      <ul className="border-t border-border bg-background px-3 py-2 space-y-0.5">
                        {group.items.map(item => (
                          <li key={item.href}>
                            <a
                              href={item.href}
                              onClick={close}
                              className="block px-2 py-1.5 text-xs text-muted hover:text-accent transition-colors rounded"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
