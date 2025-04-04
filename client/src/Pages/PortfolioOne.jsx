import React from 'react'
import { Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const PortfolioOne = () => {
    const [portfolio, setPortfolio] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_BASE_URL}/api/portfolio/view/${id}`,
                    {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }

                const data = await response.json();
                setPortfolio(data.portfolio || null);
            } catch (error) {
                console.error("Error fetching portfolios:", error);
            }
        };

        fetchPortfolios();
    }, [id]);

    if (!portfolio) {
        return <div>Loading...</div>;
    }

    const educations = portfolio.education || [];
    const projects = portfolio.projects || [];
    const experiences = portfolio.experience || [];

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="font-bold text-xl">
                        <Link to="/" className="flex items-center gap-2">
                            <span>Portfolio</span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <Link to="#about" className="text-sm font-medium transition-colors hover:text-primary">
                            About
                        </Link>
                        <Link to="#education" className="text-sm font-medium transition-colors hover:text-primary">
                            Education
                        </Link>
                        <Link to="#projects" className="text-sm font-medium transition-colors hover:text-primary">
                            Projects
                        </Link>
                        <Link to="#experience" className="text-sm font-medium transition-colors hover:text-primary">
                            Experience
                        </Link>
                        <Link to="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                            Contact
                        </Link>
                    </nav>
                    <Button variant="outline" size="sm" className="hidden md:flex">
                        <Link to="#contact" className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>Contact Me</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="md:hidden">
                        <span className="sr-only">Toggle menu</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </Button>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Hi, I'm <span className="text-primary">{portfolio.name}</span>
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    {portfolio.description}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button asChild>
                                    <Link to="#contact">Get in Touch</Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link to="#projects">View My Work</Link>
                                </Button>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <Link to={portfolio.github} target="_blank" rel="noopener noreferrer">
                                    <Button variant="ghost" size="icon">
                                        <Github className="h-5 w-5" />
                                        <span className="sr-only">GitHub</span>
                                    </Button>
                                </Link>
                                <Link to={portfolio.linkedin} target="_blank" rel="noopener noreferrer">
                                    <Button variant="ghost" size="icon">
                                        <Linkedin className="h-5 w-5" />
                                        <span className="sr-only">LinkedIn</span>
                                    </Button>
                                </Link>
                                <Link to={portfolio.twitter} target="_blank" rel="noopener noreferrer">
                                    <Button variant="ghost" size="icon">
                                        <Twitter className="h-5 w-5" />
                                        <span className="sr-only">Twitter</span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                                    About Me
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who I Am</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    {portfolio.bio}
                                </p>
                            </div>
                            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                                <div className="flex flex-col justify-center space-y-4">
                                    <ul className="grid gap-6">
                                        <li>
                                            <div className="grid gap-1">
                                                <h3 className="text-xl font-bold">My Approach</h3>
                                                <p className="text-muted-foreground">
                                                    {portfolio.approach}
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="grid gap-1">
                                                <h3 className="text-xl font-bold">My Skills</h3>
                                                <p className="text-muted-foreground">
                                                    {portfolio.skills}
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="grid gap-1">
                                                <h3 className="text-xl font-bold">My Interests</h3>
                                                <p className="text-muted-foreground">
                                                    {portfolio.interests}
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section id="education" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                                    Education
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Academic Background</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    My educational journey has equipped me with both theoretical knowledge and practical skills.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-8 py-12">
                            {educations.map((education, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <CardTitle>{education.degree} in {education.field}</CardTitle>
                                        <CardDescription>{education.institution}, {new Date(education.startDate).getFullYear()} - {education.endDate && new Date(education.endDate).getFullYear()}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>
                                            {education.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                                    Projects
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Recent Work</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Here are some of the projects I've worked on recently. Each one represents a unique challenge and
                                    solution.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project, index) => (
                                <Card key={index} className="overflow-hidden">
                                    <div className="aspect-video relative">
                                        <img src={project.image || "/placeholder.svg?height=300&width=500"} alt={project.title} className="object-cover" />
                                    </div>
                                    <CardHeader>
                                        <CardTitle>{project.title}</CardTitle>
                                        <CardDescription>{project.technologies}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="line-clamp-3">
                                            {project.description}
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <Link to={project.link} target="_blank" className="flex items-center gap-1">
                                                <span>View Project</span>
                                                <ExternalLink className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                                    Experience
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work History</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    My professional journey has allowed me to work with diverse teams and technologies.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto max-w-3xl py-12">
                            <div className="space-y-8">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="relative pl-8 border-l-2 border-muted-foreground/20">
                                        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold">{exp.position}</h3>
                                            <p className="text-muted-foreground">{exp.company} | {new Date(exp.startDate).getFullYear()} - {exp.current ? 'Present' : new Date(exp.endDate).getFullYear()}</p>
                                            <p>
                                                {exp.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {exp.skills && exp.skills.split(',').map((skill, i) => (
                                                    <span key={i} className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                                                        {skill.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                                    Contact
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold">Contact Information</h3>
                                    <p className="text-muted-foreground">
                                        Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <Mail className="h-5 w-5 mt-0.5 text-primary" />
                                        <div>
                                            <h4 className="font-medium">Email</h4>
                                            <p className="text-muted-foreground">{portfolio.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Linkedin className="h-5 w-5 mt-0.5 text-primary" />
                                        <div>
                                            <h4 className="font-medium">LinkedIn</h4>
                                            <p className="text-muted-foreground">{portfolio.linkedin}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Github className="h-5 w-5 mt-0.5 text-primary" />
                                        <div>
                                            <h4 className="font-medium">GitHub</h4>
                                            <p className="text-muted-foreground">{portfolio.github}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Twitter className="h-5 w-5 mt-0.5 text-primary" />
                                        <div>
                                            <h4 className="font-medium">Twitter</h4>
                                            <p className="text-muted-foreground">{portfolio.twitter}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold">Send a Message</h3>
                                    <p className="text-muted-foreground">Fill out the form below and I'll respond as soon as I can.</p>
                                </div>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Name
                                            </label>
                                            <Input id="name" placeholder="Your name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Email
                                            </label>
                                            <Input id="email" type="email" placeholder="Your email" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="subject"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Subject
                                        </label>
                                        <Input id="subject" placeholder="Message subject" />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="message"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Message
                                        </label>
                                        <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link to={portfolio.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </Link>
                        <Link to={portfolio.linkedin} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </Link>
                        <Link to={portfolio.twitter} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                                <Twitter className="h-4 w-4" />
                                <span className="sr-only">Twitter</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default PortfolioOne