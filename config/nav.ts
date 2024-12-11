import { NavItem } from "@/types/nav"

export const navItems: NavItem[] = [
  {
    title: "Overview",
    href: "/overview",
    icon: "Home",
    children: [
      {
        title: "My account",
        href: "/overview/account",
      },
      {
        title: "Shared with me",
        href: "/overview/shared",
      },
    ],
  },
  {
    title: "Home",
    href: "/",
    icon: "Home",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "LayoutDashboard",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: "FolderKanban",
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: "CheckSquare",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: "Settings",
    isExpanded: true,
    children: [
      {
        title: "My details",
        href: "/settings/details",
      },
      {
        title: "My profile",
        href: "/settings/profile",
      },
      {
        title: "Security",
        href: "/settings/security",
      },
      {
        title: "Integrations",
        href: "/settings/integrations",
      },
      {
        title: "Billing",
        href: "/settings/billing",
      },
    ],
  },
  {
    title: "Messages",
    href: "/messages",
    icon: "MessageSquare",
  },
]

