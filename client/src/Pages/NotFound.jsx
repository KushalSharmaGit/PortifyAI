import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Layers, Search, ArrowLeft, Home } from "lucide-react"

const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col">
          <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2">
                  <Layers className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold">PortifyAI</span>
                </Link>
              </div>
            </div>
          </header>
    
          <main className="flex-1 flex items-center justify-center">
            <div className="container max-w-3xl px-4 py-12 md:py-24 lg:py-32">
              <div className="flex flex-col items-center text-center space-y-8">
                <div className="relative">
                  <div className="text-[10rem] font-bold text-muted/10 leading-none">404</div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="rounded-full bg-primary/10 p-6">
                      <Search className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                </div>
    
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Page Not Found</h1>
                  <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                  </p>
                </div>
    
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" asChild>
                    <Link to="/">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link to="/">
                      <Home className="mr-2 h-4 w-4" />
                      Go Home
                    </Link>
                  </Button>
                </div>
    
              </div>
            </div>
          </main>
    
          <footer className="w-full border-t bg-background py-6">
            <div className="container flex flex-col items-center justify-center gap-4 text-center">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold">PortifyAI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} PortifyAI. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      )
}

export default NotFound