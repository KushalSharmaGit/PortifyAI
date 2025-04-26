import { Link } from "react-router-dom"
import { Layers, Bell, User } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function DashboardHeader() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear('token');
    setToggle(true);
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PortifyAI</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
        <DropdownMenu>
              <DropdownMenuTrigger><Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => {navigate('/dashboard')}}>Dashboard</DropdownMenuItem>
                <DropdownMenuItem onClick={() => {navigate('/create')}}>Create Portfolio</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogOut}>Log Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

