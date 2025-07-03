import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { signIn ,auth,signOut} from "@/auth";

const LoginPage = async() => { 
  const session = await auth() 
  console.log(session,"user")
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-neutral-900 via-zinc-900 to-slate-900">
      {/* Animated Background Elements */}  
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-indigo-500/25 rounded-full blur-xl animate-pulse delay-2000"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rotate-45 animate-ping delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-violet-300/60 rotate-45 animate-ping delay-1500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-300/50 rotate-45 animate-ping delay-3000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl">
          <CardHeader className="text-center space-y-4 pb-8">
            {/* Company Logo/Icon */}
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            {/* Company Name */}
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              <Link href={"/"}>LibShift</Link>
            </CardTitle>
            <CardDescription className="text-blue-100/80 text-lg">
              Welcome back to your workspace
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Google Login Button */}
            <form
              action={async () => {
                "use server";
                await signIn('google');
              }}
            >
              <Button
                className="w-full h-12 bg-white hover:bg-gray-50 text-gray-800 border-0 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group"
                type="submit"
              >
                <div className="flex items-center justify-center space-x-3">
                  {/* Google Icon */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="font-medium">Continue with Google</span>
                </div>
              </Button>
            </form>
            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/20" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-transparent px-2 text-blue-100/60">
                  Secure Authentication
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 z-10">
        <p className="text-center text-blue-100/50 text-sm">
          © 2025 LibShift. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
