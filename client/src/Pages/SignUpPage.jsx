import React from 'react'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layers } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const SignUpPage = () => {
    const baseurl = import.meta.env.VITE_BASE_URL;
    const [user, setUser]= useState({
        "name": "",
        "email": "",
        "password":"",
        "confirmPassword":"",
      })
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(false);
      const navigate = useNavigate(); 
    
      const handelChange = (e) => {
        const {name, value} = e.target;
        setUser((prev) => ({...prev, [name]: value}));
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        if(user.password != user.confirmPassword)  return setError(true);
        setIsLoading(true);
        try {
            const response = await fetch(`${baseurl}/api/user/register`, {
                method: "POST",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if(!response.ok){
                setIsLoading(false);
                const data = await response.json();
                toast(data.error.message, {
                    type: "error",
                });
                return;
            }
            toast("Account created successfully", {
              type: "success", 
            });
            navigate('/login');
        } catch (error) {
            toast(error, {
              type: "error",
            }
            )
        }
      }
    return (
        <div className="flex min-h-screen flex-col dark">
          <div className="flex min-h-screen items-center justify-center px-4 py-12">
            <div className="grid w-full max-w-md gap-6">
              <div className="flex flex-col items-center space-y-2 text-center">
                <Link to="/" className="flex items-center gap-2">
                  <Layers className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold">PortifyAI</span>
                </Link>
                <h1 className="text-2xl font-bold">Welcome</h1>
                <p className="text-sm text-muted-foreground">Enter your credentials to create your account</p>
              </div>
              <div className="grid gap-4">
              <div className="grid gap-2">
                  <label htmlFor="Name" className="text-sm font-medium leading-none">
                    Name
                  </label>
                  <Input id="name" type="text" placeholder="Jhon Doe" name="name" autoComplete="email" value={user.name} onChange={handelChange} />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="name@example.com" autoComplete="email" name="email" value={user.email} onChange={handelChange} />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium leading-none">
                      Password
                    </label>
                  </div>
                  <Input id="password" type="password" placeholder="••••••••" autoComplete="current-password" name='password' value={user.password} onChange={handelChange} />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="confirm-password" className="text-sm font-medium leading-none">
                      Confirm Password
                    </label>
                  </div>
                  {error? <span className='text-xs text-red-600'>Password do not Match</span> : null}
                  <Input id="confirm-password" type="password" placeholder="••••••••" autoComplete="current-password" value={user.confirmPassword} name='confirmPassword' onChange={handelChange} />
                </div>
                <Button type="submit" className="w-full" onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ?  "Signing Up" : "Sign Up"}
                </Button>
              </div>
              <div className="text-center text-sm">
                Do you already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
}

export default SignUpPage