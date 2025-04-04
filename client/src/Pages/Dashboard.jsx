import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Edit, Eye, Plus, Settings } from "lucide-react"
import DashboardHeader from '../components/DashboardHeader'
import { useNavigate } from 'react-router-dom'
import portfolioPreview from '@/assets/portfolio-preview.png';

const Dashboard = () => {
    const navigate = useNavigate()
    const handleCreatePortfolio = () => {
        navigate('/create')
    }
    const [portfolios, setPortfolios] = useState([]);
    useEffect(() => {
      const fetchPortfolios = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_BASE_URL}/api/portfolio/dashboard`,
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
          console.log("Fetched Portfolios:", data.portfolios);
          setPortfolios(data.portfolios || []); // Ensure it's an array
        } catch (error) {
          console.error("Error fetching portfolios:", error);
        }
      };
  
      fetchPortfolios();
    }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button onClick={handleCreatePortfolio} className='hover:cursor-pointer'>
              <Plus className="mr-2 h-4 w-4" /> Create New Portfolio
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Portfolio Card 1 */}
              {portfolios.map((portfolio) =>{
                return(
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{portfolio.title}</CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video w-full overflow-hidden rounded-md bg-muted"><img src={portfolioPreview} alt="Portfolio Preview" className="w-full h-full object-cover" /></div>
                      <div className="mt-4 space-y-2">
                       
                        <div className="flex justify-between">
                          <p className="text-sm font-medium"></p>
                          <Button variant="link" size="sm" className="h-auto p-0" onClick={() =>(navigate(`/view/${portfolio._id}`))}>
                            View <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                )
              })}


              {/* Create New Portfolio Card */}
              <Card className="flex flex-col items-center justify-center p-8">
                <div className="rounded-full bg-muted p-3">
                  <Plus className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium">Create New Portfolio</h3>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  Start from scratch or use one of our templates
                </p>
                <Button onClick={handleCreatePortfolio} className='mt-6 hover:cursor-pointer'>Get Started</Button>
              </Card>
            </div>
      </div>
    </div>
  )
}

export default Dashboard