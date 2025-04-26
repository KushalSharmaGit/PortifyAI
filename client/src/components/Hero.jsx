import React from 'react'
import { Button } from '@/components/ui/button';
import portfoliopreview from '../assets/portfoliopreview.png';
const Hero = () => {
    const handleStarted = () => {
        if(localStorage.getItem("token")) navigate("/dashboard");
        else navigate("/login");
      }
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40 xl:py-48">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/0 z-0"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_top_right,transparent_50%,black)]"></div>

          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col space-y-6">
                <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span>AI-Powered Portfolio Generator</span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
                  <span className="block">Create stunning</span>
                  <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    portfolios instantly
                  </span>
                </h1>

                <p className="max-w-[600px] text-xl text-muted-foreground">
                  No design skills needed. Answer a few questions and let our AI create a professional portfolio that
                  showcases your work beautifully.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Button size="lg" className="text-base px-8 h-12 hover:cursor-pointer" onClick={handleStarted}>
                    Get Started Free
                  </Button>
                  <Button size="lg" variant="outline" className="text-base px-8 h-12 hover:cursor-pointer" onClick={() => window.scrollTo({ top: document.querySelector("#features").offsetTop, behavior: "smooth" })}>
                    See Features
                  </Button>
                </div>
              </div>

              <div className="relative mx-auto lg:mx-0 w-full max-w-[600px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl blur-xl opacity-50 -m-2"></div>
                <div className="relative overflow-hidden rounded-xl border bg-background/80 backdrop-blur-sm shadow-2xl">
                  <div className="flex h-10 items-center border-b bg-muted/50 px-4">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="relative aspect-[16/10] bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* <span className="text-gray-500">Portfolio Preview</span> */}
                      <img src={portfoliopreview} alt="Portfolio Preview" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/30 blur-2xl"></div>
                <div className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-primary/20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero