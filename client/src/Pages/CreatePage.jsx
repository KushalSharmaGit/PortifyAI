"use client"

import { useState } from "react"
import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import DashboardHeader from "../components/DashboardHeader"

export default function CreatePage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    name: "",
    role: "",
    bio: "",
    email: "",
    phone: "",
    location: "",
    website: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="container max-w-4xl py-10">
        <div className="mb-8">
          <Link to="/dashboard" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold">Create Your Portfolio</h1>
          <p className="text-muted-foreground">Fill out the form below to create your professional portfolio.</p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"} text-primary-foreground`}
              >
                {step > 1 ? <Check className="h-5 w-5" /> : "1"}
              </div>
              <div className={`mx-2 h-1 w-10 ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"} text-primary-foreground`}
              >
                {step > 2 ? <Check className="h-5 w-5" /> : "2"}
              </div>
              <div className={`mx-2 h-1 w-10 ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 3 ? "bg-primary" : "bg-muted"} text-primary-foreground`}
              >
                {step > 3 ? <Check className="h-5 w-5" /> : "3"}
              </div>
              <div className={`mx-2 h-1 w-10 ${step >= 4 ? "bg-primary" : "bg-muted"}`}></div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 4 ? "bg-primary" : "bg-muted"} text-primary-foreground`}
              >
                4
              </div>
            </div>
          </div>
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Let's start with some basic information about your portfolio.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Portfolio Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g., My Professional Portfolio"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Short Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="A brief description of your portfolio"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" disabled>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button onClick={nextStep}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Tell us about yourself. This information will be displayed on your portfolio.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g., John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Professional Title</Label>
                <Input
                  id="role"
                  name="role"
                  placeholder="e.g., Web Developer"
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  placeholder="Tell us about yourself, your experience, and your skills"
                  value={formData.bio}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button onClick={nextStep}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Add your contact details so people can reach out to you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g., john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="e.g., +1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g., New York, NY"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website (optional)</Label>
                <Input
                  id="website"
                  name="website"
                  placeholder="e.g., https://yourwebsite.com"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button onClick={nextStep}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>Choose a Template</CardTitle>
              <CardDescription>Select a template for your portfolio website.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="overflow-hidden rounded-lg border cursor-pointer hover:border-primary">
                    <div className="aspect-video w-full bg-muted"></div>
                    <div className="p-2">
                      <h3 className="text-sm font-medium">Template {i}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button>
                Create Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}