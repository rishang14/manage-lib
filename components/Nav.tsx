import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./Theme";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-5 backdrop-blur ">
      <div className=" max-w-[1020px] flex  mx-auto p-2 justify-between">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <div className=" rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {" "}
                <svg
                  className="w-6 h-6 text-white"
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
              </span>
            </div>
            <span className="font-bold text-xl ">LibShift</span>
          </Link>
        </div>
        <Button asChild >
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
};

export default Nav;
