import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { AiOutlineLogout } from "react-icons/ai";
import { Button } from "./ui/button";
import { NavProps } from "@/common/types";

const HomeNavBar = async ({ data }: NavProps) => {
  return (
    <header className="w-full p-4">
      <div className="relative container flex h-16 items-center justify-between rounded-2xl bg-neutral-900/10 px-2 shadow-2xl">
        <div className="absolute inset-x-0 -bottom-px h-px bg-linear-to-r from-transparent via-slate-500 to-transparent"></div>
        <div className="flex items-center p-2">
          <div className="flex items-center gap-2">
            <Avatar className="size-10">
              <AvatarImage src={data.image ?? ""} />
              <AvatarFallback>{data.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="font-medium tracking-tighter text-gray-100/70 text-shadow-sm">
                Hi ,{data.name}
              </p>
              <span className="font-extralightt hidden bg-linear-to-br from-gray-300 to-gray-500 bg-clip-text tracking-tighter text-transparent md:block">
                {data.email}
              </span>
            </div>
          </div>
        </div>
        <Button className="bg-gray-100 font-medium text-neutral-800 shadow-2xl transition duration-200 text-shadow-sm active:scale-98">
          Logout
          <AiOutlineLogout className="size-4" />
        </Button>
      </div>
    </header>
  );
};

export default HomeNavBar;
