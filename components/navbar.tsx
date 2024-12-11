import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Bell } from 'lucide-react'

export function Navbar() {
  return (
    <header className="flex h-16 items-center justify-end border-b px-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <ModeToggle />
      </div>
    </header>
  )
}

