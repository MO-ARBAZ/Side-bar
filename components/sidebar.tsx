"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Search, ChevronLeft, ChevronDown, Home, LayoutDashboard, FolderKanban, CheckSquare, Settings, MessageSquare } from 'lucide-react'
import { NavItem, SidebarProps } from "@/types/nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const IconMap = {
  Home,
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Settings,
  MessageSquare,
}

export function Sidebar({ links }: SidebarProps) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredLinks = links.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div
      className={cn(
        "relative flex flex-col border-r bg-background",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center justify-center border-b px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-primary" />
          {!isCollapsed && <span className="font-semibold">Dashboard</span>}
        </Link>
      </div>
      <div className="flex-1">
        <div className="p-4">
          <div className="relative">
            {!isCollapsed && (
              <Input
                placeholder="Search"
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            )}
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-2">
            {filteredLinks.map((item, index) => (
              <NavGroup
                key={index}
                item={item}
                isCollapsed={isCollapsed}
                pathname={pathname}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="border-t p-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-muted-foreground">john@example.com</span>
            </div>
          )}
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-background shadow-md"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <ChevronLeft className={cn("h-4 w-4", isCollapsed && "rotate-180")} />
      </Button>
    </div>
  )
}

function NavGroup({
  item,
  isCollapsed,
  pathname,
}: {
  item: NavItem
  isCollapsed: boolean
  pathname: string
}) {
  const [isExpanded, setIsExpanded] = useState(item.isExpanded)
  const isActive = pathname === item.href
  const Icon = item.icon ? IconMap[item.icon as keyof typeof IconMap] : null

  if (item.children) {
    return (
      <div className="space-y-1">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start",
            isCollapsed && "px-2",
            isActive && "bg-muted"
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {Icon && (
            <Icon className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
          )}
          {!isCollapsed && (
            <>
              <span className="flex-1 text-start">{item.title}</span>
              <ChevronDown
                className={cn("h-4 w-4", isExpanded && "rotate-180")}
              />
            </>
          )}
        </Button>
        {isExpanded && !isCollapsed && (
          <div className="ml-4 space-y-1">
            {item.children.map((child, index) => (
              <Button
                key={index}
                variant="ghost"
                asChild
                className={cn(
                  "w-full justify-start",
                  pathname === child.href && "bg-muted"
                )}
              >
                <Link href={child.href}>{child.title}</Link>
              </Button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Button
      variant="ghost"
      asChild
      className={cn(
        "w-full justify-start",
        isCollapsed && "px-2",
        isActive && "bg-muted"
      )}
    >
      <Link href={item.href}>
        {Icon && (
          <Icon className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
        )}
        {!isCollapsed && <span>{item.title}</span>}
      </Link>
    </Button>
  )
}

