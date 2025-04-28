import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layers } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // or your preferred routing library
import { toast } from 'react-toastify';

function LoginPage() {
  const baseurl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        toast("You are already logged in");
        navigate("/");
      }
    }, []);
  const [user, setUser]= useState({
    "email": "",
    "password":"",
  })
  const [isLogedin, setIsLogedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handelChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    setUser((prev) => ({...prev, [name]: value}));
    console.log(user);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true);
    try {
        const response= await fetch(`${import.meta.env.VITE_BASE_URL}/api/user/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if(!response.ok){
        setIsLoading(false);
        toast(data.message, {
          type: "error",
        });
        return;
      }
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (error) {
      setIsLoading(false);
      console.error("Error logging in:", error);
      toast(response.error.message, {
        type: "error",
      });
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
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium leading-none">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="name@example.com" autoComplete="email" value={user.email} onChange={handelChange} />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium leading-none">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" value={user.password} onChange={handelChange} />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading} onClick={handleSubmit}>
                  {isLoading ? "Logging in..." : "Login"}
            </Button>
          </div>
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;