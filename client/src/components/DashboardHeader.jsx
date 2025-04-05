import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Layers, Bell, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PortfolioAI</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
        <User className="h-5 w-5" />
        </div>
      </div>
    </header>
  )
}

