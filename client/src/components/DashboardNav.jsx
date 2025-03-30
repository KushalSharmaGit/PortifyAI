import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Settings, Image, BarChart3 } from "lucide-react"

export default function DashboardNav() {
  return (
    <div className="hidden border-r bg-background md:block">
      <div className="flex h-full flex-col gap-2 p-4">
        <Button variant="ghost" className="justify-start" asChild>
          <Link to="/dashboard">
            <LayoutDashboard className="mr-2 h-5 w-5" />
            Dashboard
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link to="/dashboard/portfolios">
            <Image className="mr-2 h-5 w-5" />
            Portfolios
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link to="/dashboard/analytics">
            <BarChart3 className="mr-2 h-5 w-5" />
            Analytics
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link to="/dashboard/settings">
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Link>
        </Button>
      </div>
    </div>
  )
}

