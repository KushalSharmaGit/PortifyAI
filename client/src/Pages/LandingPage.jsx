import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Code, Layers, Zap } from 'lucide-react';
import { HashLink } from "react-router-hash-link";
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import portfolioPreview from '../assets/portfolio-preview.png';

function LandingPage() {
  const navigate = useNavigate();
  const handleStarted = () => {
    if(localStorage.getItem("token")) navigate("/dashboard");
    else navigate("/login");
  }
  return (
    <div className="flex min-h-screen flex-col dark">
      <Header />

      <main className="flex-1">
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
                      <img src={portfolioPreview} alt="Portfolio Preview" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/30 blur-2xl"></div>
                <div className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-primary/20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to showcase your work
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered platform handles all the technical details so you can focus on what matters—your work.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Instant Generation</h3>
                <p className="text-center text-muted-foreground">
                  Create your portfolio in under 5 minutes with our AI-powered generator.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">No Coding Required</h3>
                <p className="text-center text-muted-foreground">
                  Zero technical skills needed. Just answer a few questions and we'll handle the rest.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Fully Customizable</h3>
                <p className="text-center text-muted-foreground">
                  Choose from dozens of themes and customize every aspect to match your personal brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">How It Works</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Three simple steps to your perfect portfolio
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our streamlined process makes creating a professional portfolio effortless.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Share Your Details</h3>
                <p className="text-center text-muted-foreground">
                  Tell us about yourself, your work, and your style preferences through our simple questionnaire.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">AI Generates Your Portfolio</h3>
                <p className="text-center text-muted-foreground">
                  Our AI analyzes your information and creates a tailored portfolio that highlights your strengths.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Publish and Share</h3>
                <p className="text-center text-muted-foreground">
                  Review your portfolio, make any adjustments, and publish it with a custom domain in one click.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="examples" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Portfolio Examples
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">See what others have created</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse through portfolios created by professionals across various industries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border shadow-sm">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">Designer Portfolio Example</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">Graphic Designer</h3>
                  <Button variant="outline" className="mt-4 bg-transparent text-white hover:bg-white hover:text-black">
                    View Portfolio
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border shadow-sm">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">Developer Portfolio Example</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">Web Developer</h3>
                  <Button variant="outline" className="mt-4 bg-transparent text-white hover:bg-white hover:text-black">
                    View Portfolio
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border shadow-sm">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">Photographer Portfolio Example</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">Photographer</h3>
                  <Button variant="outline" className="mt-4 bg-transparent text-white hover:bg-white hover:text-black">
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What our users are saying</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of professionals who have transformed their online presence with PortfolioAI.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "I spent weeks trying to build my own portfolio before finding PortfolioAI. Within 10 minutes, I had
                    a professional site that perfectly showcased my work. Landed a new client the next day!"
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted p-1">
                    <div className="h-10 w-10 rounded-full bg-muted-foreground/20" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Graphic Designer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "As a developer, I wanted a portfolio that showed my skills without spending days coding it.
                    PortfolioAI delivered exactly what I needed with minimal effort. The customization options are
                    fantastic."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted p-1">
                    <div className="h-10 w-10 rounded-full bg-muted-foreground/20" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "I was skeptical about an AI building my photography portfolio, but the results blew me away. The
                    layout perfectly highlights my images, and I've received so many compliments on the design."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted p-1">
                    <div className="h-10 w-10 rounded-full bg-muted-foreground/20" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Elena Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Photographer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for you and start building your portfolio today.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-muted-foreground">Perfect for beginners and students</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">&#x20B9;0</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>1 portfolio site</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic templates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>PortfolioAI subdomain</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom domains (For First 100)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Community support</span>
                  </li>
                </ul>
                <Button className="mt-8 hover:cursor-pointer" variant="outline" onClick={() => (navigate('/commingsoon'))}>
                  Get Started
                </Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">For professionals and freelancers</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">&#x20B9;49</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>3 portfolio sites</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Premium templates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom domain</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Analytics dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="mt-8 hover:cursor-pointer" onClick={() => (navigate('/commingsoon'))}>Get Started</Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Business</h3>
                  <p className="text-muted-foreground">For teams and agencies</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">&#x20B9;129</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>10 portfolio sites</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>All templates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom domains</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <Button className="mt-8 hover:cursor-pointer" variant="outline" onClick={() => (navigate('/commingsoon'))}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 text-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to create your portfolio?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of professionals who have transformed their online presence with PortfolioAI.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1 bg-background text-foreground border border-muted-foreground/30"
                />
                  <Button
                    type="submit"
                    variant="secondary"
                    className="bg-muted text-primary hover:bg-background/90 hover:cursor-pointer"
                    onClick={handleStarted}
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-xs">No credit card required. Start with a free account.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;