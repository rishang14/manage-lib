import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MdLocalLibrary } from "react-icons/md";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-5 backdrop-blur ">
      <div className=" max-w-255 flex  mx-auto p-2 justify-between">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <div className=" rounded-lg bg-linear-to-br  flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                <MdLocalLibrary/>
              </span>
            </div>
            <span className="font-bold text-xl ">LibShift</span>
          </Link>
        </div>
        <Button asChild className="bg-white shadow-sm shadow-gray-500 text-blue-600 hover:bg-white/90 font-semibold" >
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
};

export default Nav;
