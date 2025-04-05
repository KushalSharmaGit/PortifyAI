import {useState} from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Globe, Info, RefreshCw } from "lucide-react"
import DashboardHeader from "../components/DashboardHeader"
// import { DomainStatusCard } from "@/components/domain-status-card"
import  DnsRecordTable  from "../components/DnsRecordTable"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from "react-toastify"

const DomainPage = () => {
    const baseurl = import.meta.env.VITE_BASE_URL;
    const { id } = useParams();
    const [domain, setDomain] = useState("");
    const navigate = useNavigate();
    const handleAdd = async () =>{
        try {
              const response = await fetch(`${baseurl}/api/portfolio//domain/${id}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in Authorization header
                },
                body: JSON.stringify({
                    domain
                }),
              });
        
              if (response.ok) {
                  toast("Domain registered successfully", {
                    type: "success",
                  })
                  navigate('/dashboard');
              } else {
                const errorData = await response.json();
                toast(errorData.message,{
                  type: "error"
                })
                console.error("Failed to register domain", errorData.message);
              }
              
            } catch (error) {
              console.log(error);
              toast("Failed to register domain",{
                type: "error"
              })
            }
    }
    return (
        <div className="flex min-h-screen flex-col">
          <DashboardHeader />
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Custom Domains</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline">
                  <RefreshCw className="mr-2 h-4 w-4" /> Refresh Status
                </Button>
              </div>
            </div>
            <div>
                <p className="text-sm text-yellow-600 bg-yellow-80 border border-yellow-300 rounded-md px-4 py-3">
                ⚠️ This is a hobby project. Please avoid purchasing or investing in a custom domain specifically for this project.
                </p>
            </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Add a Custom Domain</CardTitle>
                    <CardDescription>Connect your own domain to your portfolio website.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="domain">Domain Name</Label>
                      <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input id="domain" placeholder="example.com" value={domain} onChange={(e)=>{setDomain(e.target.value)}}/>
                        <Button type="submit" onClick={handleAdd}>Add</Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Enter your domain without www (e.g., example.com, not www.example.com)
                      </p>
                    </div>
                  </CardContent>
                </Card>
    
                <Card>
                  <CardHeader>
                    <CardTitle>How to Set Up Your Custom Domain</CardTitle>
                    <CardDescription>Follow these steps to connect your domain to your portfolio.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>Before you begin</AlertTitle>
                      <AlertDescription>
                        You'll need access to your domain's DNS settings through your domain registrar (like GoDaddy,
                        Namecheap, Google Domains, etc.).
                      </AlertDescription>
                    </Alert>
    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium flex items-center">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground mr-2">
                            1
                          </span>
                          Purchase a domain
                        </h3>
                        <p className="text-muted-foreground ml-8">
                          If you don't already have a domain, purchase one from a domain registrar like
                          <Link
                            to="https://www.namecheap.com"
                            className="text-primary mx-1 hover:underline"
                            target="_blank"
                          >
                            Namecheap
                          </Link>
                          ,
                          <Link to="https://domains.google" className="text-primary mx-1 hover:underline" target="_blank">
                            Google Domains
                          </Link>
                          , or
                          <Link
                            to="https://www.godaddy.com"
                            className="text-primary mx-1 hover:underline"
                            target="_blank"
                          >
                            GoDaddy
                          </Link>
                          .
                        </p>
                      </div>
    
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium flex items-center">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground mr-2">
                            2
                          </span>
                          Configure DNS Records
                        </h3>
                        <p className="text-muted-foreground ml-8">
                          Log in to your domain registrar and locate the DNS settings. You'll need to add the following
                          records:
                        </p>
    
                        <div className="ml-8 mt-4">
                          <DnsRecordTable />
                        </div>
                      </div>
    
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium flex items-center">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground mr-2">
                            3
                          </span>
                          Verify Domain Ownership
                        </h3>
                        <p className="text-muted-foreground ml-8">
                          After adding your domain and configuring DNS records, we'll verify your domain ownership. This
                          process can take up to 24-48 hours for DNS changes to propagate.
                        </p>
                      </div>
    
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium flex items-center">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground mr-2">
                            4
                          </span>
                          Set Up SSL Certificate
                        </h3>
                        <p className="text-muted-foreground ml-8">
                          Once your domain is verified, we'll automatically provision an SSL certificate for your domain to
                          ensure your site is secure. This process is automatic and requires no action from you.
                        </p>
                      </div>
                    </div>
    
                    <Separator />
    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Troubleshooting</h3>
    
                      <div className="space-y-2">
                        <h4 className="font-medium">Domain verification taking too long?</h4>
                        <p className="text-sm text-muted-foreground">
                          DNS changes can take up to 48 hours to propagate globally. You can check the status of your DNS
                          propagation using
                          <Link
                            to="https://www.whatsmydns.net"
                            className="text-primary mx-1 hover:underline"
                            target="_blank"
                          >
                            whatsmydns.net <ExternalLink className="h-3 w-3 inline" />
                          </Link>
                        </p>
                      </div>
    
                      <div className="space-y-2">
                        <h4 className="font-medium">SSL certificate issues?</h4>
                        <p className="text-sm text-muted-foreground">
                          If your SSL certificate isn't provisioning correctly, ensure that both your A record and CNAME
                          record are properly configured. SSL certificates typically provision within 15 minutes after
                          successful domain verification.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
          </div>
        </div>
      )
}

export default DomainPage