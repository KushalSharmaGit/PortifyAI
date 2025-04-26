import React from 'react'
import { Link } from 'react-router-dom';
import {  Layers } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-12">
    <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
      <div className="flex items-center gap-2">
        <Layers className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold">PortifyAI</span>
      </div>
      <nav className="flex gap-4 sm:gap-6">
        <Link to="/terms" className="text-sm hover:underline underline-offset-4">
          Terms
        </Link>
        <Link to="/privacy" className="text-sm hover:underline underline-offset-4">
          Privacy
        </Link>
        <Link to="/cookies" className="text-sm hover:underline underline-offset-4">
          Cookies
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} PortifyAI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer