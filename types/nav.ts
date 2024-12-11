export interface NavItem {
  title: string
  href: string
  icon?: string
  isExpanded?: boolean
  children?: NavItem[]
}

export interface SidebarProps {
  links: NavItem[]
}

