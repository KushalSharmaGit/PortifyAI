import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Layers, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom"; // or your preferred routing library
 
function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col dark">
      <div className="flex min-h-screen items-center justify-center px-4 py-12">
        <div className="grid w-full max-w-md gap-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link href="/" className="flex items-center gap-2">
              <Layers className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">PortfolioAI</span>
            </Link>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium leading-none">
                Email
              </label>
              <Input id="email" type="email" placeholder="name@example.com" autoComplete="email" />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium leading-none">
                  Password
                </label>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" autoComplete="current-password" />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </div>
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;