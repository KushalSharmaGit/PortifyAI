"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight, Check, Plus, Trash2, Calendar, Briefcase, GraduationCap } from "lucide-react"
import DashboardHeader from "../components/DashboardHeader"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import Stepper from "@/components/Stepper"
import { toast } from "react-toastify"

export default function CreatePortfolioPage() {
  const navigate = useNavigate();
  const baseurl = import.meta.env.VITE_BASE_URL;
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
    twitter:"",
    github:"",
    linkedin:"",
    approch:"",
    skills:"",
    interests:"",
  })

  // State for education, projects, and experience
  const [education, setEducation] = useState([])
  const [projects, setProjects] = useState([])
  const [experience, setExperience] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  // Add a new education entry
  const addEducation = () => {
    const newEducation = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    }
    setEducation([...education, newEducation])
  }

  // Update an education entry
  const updateEducation = (id, field, value) => {
    setEducation(education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)))
  }

  // Remove an education entry
  const removeEducation = (id) => {
    setEducation(education.filter((edu) => edu.id !== id))
  }

  // Add a new project
  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      title: "",
      description: "",
      technologies: "",
      link: "",
      image: "",
    }
    setProjects([...projects, newProject])
  }

  // Update a project
  const updateProject = (id, field, value) => {
    setProjects(projects.map((proj) => (proj.id === id ? { ...proj, [field]: value } : proj)))
  }

  // Remove a project
  const removeProject = (id) => {
    setProjects(projects.filter((proj) => proj.id !== id))
  }

  // Add a new experience
  const addExperience = () => {
    const newExperience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    }
    setExperience([...experience, newExperience])
  }

  // Update an experience
  const updateExperience = (id, field, value) => {
    setExperience(experience.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  // Remove an experience
  const removeExperience = (id) => {
    setExperience(experience.filter((exp) => exp.id !== id))
  }

  const handleSubmit = async () =>{
    console.log({...formData, experience, education, projects})
    try {
      const response = await fetch(`${baseurl}/api/portfolio/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in Authorization header
        },
        body: JSON.stringify({
          ...formData, experience, education, projects
        }),
      });

      if (response.ok) {
          toast("Portfolio Created successfully", {
            type: "success",
          })
          navigate('/dashboard');
      } else {
        const errorData = await response.json();
        toast(errorData.message,{
          type: "error"
        })
        console.error("Failed to create Portfolio:", errorData.message);
      }
      
    } catch (error) {
      console.log(error);
      toast("Failed to Create Portfolio",{
        type: "error"
      })
    }
  }

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

        <Stepper step={step}/>

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
              <CardTitle>Social Links</CardTitle>
              <CardDescription>Add your Social media so people can reach out to you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  name="twitter"
                  type="text"
                  placeholder="e.g., https://twitter.com/yourprofile"
                  value={formData.twitter}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="github">GitHub</Label>
                <Input
                  id="github"
                  name="github"
                  placeholder="e.g., htps://github.com/yourprofile"
                  value={formData.github}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  placeholder="e.g., https://linkedin.com/in/yourprofile"
                  value={formData.linkedin}
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

        {step === 5 && (
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Tell us about yourself. This information will be displayed on your portfolio.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="approch">Your Approach</Label>
                <Input
                  id="approch"
                  name="approch"
                  placeholder="e.g., I believe in clean, maintainable code and thoughtful design that puts users first."
                  value={formData.approch}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="skills">Your Skills</Label>
                <Input
                  id="skills"
                  name="skills"
                  placeholder="e.g., Proficient in JavaScript, React, Next.js, TypeScript, and modern CSS frameworks."
                  value={formData.skills}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interests">Your Interests</Label>
                <Input
                  id="interests"
                  name="interests"
                  placeholder="e.g.,When I'm not coding, I enjoy photography, hiking, and exploring new technologies."
                  value={formData.interests}
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

        {step === 6 && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Education</CardTitle>
                <CardDescription>
                  Add your educational background. You can add as many entries as needed.
                </CardDescription>
              </div>
              <Button onClick={addEducation} variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Education
              </Button>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                {education.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-[200px] border border-dashed rounded-lg">
                    <GraduationCap className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground text-center">
                      No education entries yet. Click "Add Education" to get started.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={edu.id} className="space-y-4">
                        {index > 0 && <Separator />}
                        <div className="flex justify-between items-center pt-4">
                          <h3 className="text-lg font-medium">Education #{index + 1}</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeEducation(edu.id)}
                            className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
                            <Input
                              id={`institution-${edu.id}`}
                              value={edu.institution}
                              onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                              placeholder="e.g., Harvard University"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                            <Select
                              onValueChange={(value) => updateEducation(edu.id, "degree", value)}
                              value={edu.degree}
                            >
                              <SelectTrigger id={`degree-${edu.id}`}>
                                <SelectValue placeholder="Select degree" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="High School">High School</SelectItem>
                                <SelectItem value="Associate's">Associate's</SelectItem>
                                <SelectItem value="Bachelor's">Bachelor's</SelectItem>
                                <SelectItem value="Master's">Master's</SelectItem>
                                <SelectItem value="Ph.D.">Ph.D.</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`field-${edu.id}`}>Field of Study</Label>
                            <Input
                              id={`field-${edu.id}`}
                              value={edu.field}
                              onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                              placeholder="e.g., Computer Science"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`startDate-${edu.id}`}>Start Date</Label>
                            <Input
                              id={`startDate-${edu.id}`}
                              type="month"
                              value={edu.startDate}
                              onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor={`endDate-${edu.id}`}>End Date</Label>
                              <div className="flex items-center space-x-2">
                                <Switch
                                  id={`current-${edu.id}`}
                                  checked={edu.current}
                                  onCheckedChange={(checked) => updateEducation(edu.id, "current", checked)}
                                />
                                <Label htmlFor={`current-${edu.id}`} className="text-sm">
                                  Current
                                </Label>
                              </div>
                            </div>
                            <Input
                              id={`endDate-${edu.id}`}
                              type="month"
                              value={edu.endDate}
                              onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                              disabled={edu.current}
                            />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor={`description-${edu.id}`}>Description</Label>
                            <Textarea
                              id={`description-${edu.id}`}
                              value={edu.description}
                              onChange={(e) => updateEducation(edu.id, "description", e.target.value)}
                              placeholder="Describe your studies, achievements, etc."
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
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

        {step === 7 && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Work Experience</CardTitle>
                <CardDescription>Add your work experience. You can add as many entries as needed.</CardDescription>
              </div>
              <Button onClick={addExperience} variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Experience
              </Button>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                {experience.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-[200px] border border-dashed rounded-lg">
                    <Briefcase className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground text-center">
                      No work experience entries yet. Click "Add Experience" to get started.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <div key={exp.id} className="space-y-4">
                        {index > 0 && <Separator />}
                        <div className="flex justify-between items-center pt-4">
                          <h3 className="text-lg font-medium">Experience #{index + 1}</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeExperience(exp.id)}
                            className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`company-${exp.id}`}>Company</Label>
                            <Input
                              id={`company-${exp.id}`}
                              value={exp.company}
                              onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                              placeholder="e.g., Google"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`position-${exp.id}`}>Position</Label>
                            <Input
                              id={`position-${exp.id}`}
                              value={exp.position}
                              onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                              placeholder="e.g., Senior Developer"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`location-${exp.id}`}>Location</Label>
                            <Input
                              id={`location-${exp.id}`}
                              value={exp.location}
                              onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                              placeholder="e.g., San Francisco, CA"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`startDate-${exp.id}`}>Start Date</Label>
                            <Input
                              id={`startDate-${exp.id}`}
                              type="month"
                              value={exp.startDate}
                              onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor={`endDate-${exp.id}`}>End Date</Label>
                              <div className="flex items-center space-x-2">
                                <Switch
                                  id={`current-${exp.id}`}
                                  checked={exp.current}
                                  onCheckedChange={(checked) => updateExperience(exp.id, "current", checked)}
                                />
                                <Label htmlFor={`current-${exp.id}`} className="text-sm">
                                  Current
                                </Label>
                              </div>
                            </div>
                            <Input
                              id={`endDate-${exp.id}`}
                              type="month"
                              value={exp.endDate}
                              onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                              disabled={exp.current}
                            />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor={`description-${exp.id}`}>Description</Label>
                            <Textarea
                              id={`description-${exp.id}`}
                              value={exp.description}
                              onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                              placeholder="Describe your responsibilities and achievements"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
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

        {step === 8 && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Add your projects. You can add as many as you'd like to showcase.</CardDescription>
              </div>
              <Button onClick={addProject} variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Project
              </Button>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                {projects.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-[200px] border border-dashed rounded-lg">
                    <Calendar className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground text-center">
                      No projects yet. Click "Add Project" to get started.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {projects.map((project, index) => (
                      <div key={project.id} className="space-y-4">
                        {index > 0 && <Separator />}
                        <div className="flex justify-between items-center pt-4">
                          <h3 className="text-lg font-medium">Project #{index + 1}</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeProject(project.id)}
                            className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`title-${project.id}`}>Project Title</Label>
                            <Input
                              id={`title-${project.id}`}
                              value={project.title}
                              onChange={(e) => updateProject(project.id, "title", e.target.value)}
                              placeholder="e.g., E-commerce Website"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`technologies-${project.id}`}>Technologies Used</Label>
                            <Input
                              id={`technologies-${project.id}`}
                              value={project.technologies}
                              onChange={(e) => updateProject(project.id, "technologies", e.target.value)}
                              placeholder="e.g., React, Node.js, MongoDB"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`link-${project.id}`}>Project Link</Label>
                            <Input
                              id={`link-${project.id}`}
                              value={project.link}
                              onChange={(e) => updateProject(project.id, "link", e.target.value)}
                              placeholder="e.g., https://myproject.com"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`image-${project.id}`}>Project Image URL</Label>
                            <Input
                              id={`image-${project.id}`}
                              value={project.image}
                              onChange={(e) => updateProject(project.id, "image", e.target.value)}
                              placeholder="e.g., https://example.com/image.jpg"
                            />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor={`description-${project.id}`}>Description</Label>
                            <Textarea
                              id={`description-${project.id}`}
                              value={project.description}
                              onChange={(e) => updateProject(project.id, "description", e.target.value)}
                              placeholder="Describe your project, its purpose, and your role"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button onClick={handleSubmit}>
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