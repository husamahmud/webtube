import { Menu } from 'lucide-react'

import { useSidebarContext } from '../context/SidebarContext.tsx'
import { Button } from './Button.tsx'
import { Logo } from './Logo.tsx'

type PageHeaderFirstSectionProps = {
  hidden?: boolean
}

export function PageHeaderFirstSection({
                                         hidden = false,
                                       }: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext()

  return (
    <div className={`gap-4 items-center flex-shrink-0 ${hidden ? 'hidden' : 'flex'}`}>
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>

      <Logo />
    </div>
  )
}
