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
  if (session) {
    redirect("/home");
  }
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-2">
        <Card className="w-full max-w-md shadow-2xl inset-shadow-xs inset-shadow-zinc-600 backdrop-blur-lg">
          <CardHeader className="text-center">
            {/* Company Logo/Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg">
              <MdLocalLibrary width={16} height={16} />
            </div>

            {/* Company Name */}
            <CardTitle className="bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-3xl font-bold text-transparent">
              <Link href={"/"}>LibShift</Link>
            </CardTitle>
            <CardDescription className="text-lg text-gray-400 text-shadow-xs">
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
      <div className="absolute right-0 bottom-4 left-0 z-10">
        <p className="text-center text-sm text-blue-100/50">
          © 2026 LibShift. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
