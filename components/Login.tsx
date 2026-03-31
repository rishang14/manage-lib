import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import LoginButton from "./LoginButton";
import { MdLocalLibrary } from "react-icons/md";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/auth";
const LoginPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("data", session);
  if (session){
    redirect("/home");
  }
  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-neutral-900 via-zinc-900 to-slate-900">
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
        <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.02)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-2">
        <Card className="w-full max-w-md backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl">
          <CardHeader className="text-center  ">
            {/* Company Logo/Icon */}
            <div className="mx-auto w-16 h-16  rounded-2xl flex items-center justify-center shadow-lg">
              <MdLocalLibrary width={16} height={16} />
            </div>

            {/* Company Name */}
            <CardTitle className="text-3xl font-bold bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
              <Link href={"/"}>LibShift</Link>
            </CardTitle>
            <CardDescription className="text-blue-100/80 text-lg">
              Welcome back to your workspace
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-2">
            <LoginButton />
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
          © 2026 LibShift. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
