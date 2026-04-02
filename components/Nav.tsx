import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MdLocalLibrary } from "react-icons/md";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-5 backdrop-blur">
      <div className="mx-auto flex max-w-255 justify-between p-2">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center rounded-lg bg-linear-to-br">
              <span className="text-lg font-bold text-white">
                <MdLocalLibrary />
              </span>
            </div>
            <span className="text-xl font-bold">LibShift</span>
          </Link>
        </div>
        <Button
          asChild
          className="bg-gray-100 text-blue-600 shadow-xl transition duration-200 text-shadow-xs active:scale-98"
        >
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
};

export default Nav;
