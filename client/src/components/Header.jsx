import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layers } from 'lucide-react';
import { HashLink } from "react-router-hash-link";
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const Header = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const handleStarted = () => {
        if(localStorage.getItem("token")) navigate("/create");
        else navigate("/signup");
    }
    const handleLogOut = () => {
      localStorage.clear('token');
      setToggle(true);
    }
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PortifyAI</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <HashLink to="#features" className="text-sm font-medium transition-colors hover:text-primary hover:cursor-pointer" smooth>
              Features
            </HashLink>
            <HashLink to="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary" smooth>
              How It Works
            </HashLink>
            <HashLink to="#pricing" className="text-sm font-medium transition-colors hover:text-primary" smooth>
              Pricing
            </HashLink>
          </nav>
          <div className="flex items-center gap-4">
            {localStorage.getItem('token') ? 
            (<>
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
            </>
            ) 
            :
            (<>
            <Link to="/login" className="text-sm font-medium transition-colors hover:text-primary">
              Sign In
            </Link>
            <Button className="hover:cursor-pointer" onClick={handleStarted}>Get Started</Button>
            </> 
            )}
          </div>
        </div>
      </header>
  )
}

export default Header