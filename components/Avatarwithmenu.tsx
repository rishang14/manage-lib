"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { AvatarImage } from "./ui/avatar";
const AvatarWithMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useSession();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscClose(value: KeyboardEvent) { 
      if (value.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown",handleEscClose);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);
  return (
      <div className="relative" ref={ref}>
        <Button
          size="icon"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full bg-gray-800 flex items-center justify-center text-white border border-gray-700 cursor-pointer hover:bg-gray-700"
        >
          <Avatar >
            <AvatarImage src={data?.user.image} alt="userprofile pic" className="rounded-full"/>
            <AvatarFallback className="text-white">
              {data?.user.name[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>

        {isOpen && (
          <div
            className="absolute right-0 mt-2 bg-card  flex flex-col  rounded-md shadow-lg z-50 py-2 px-3 border "
            ref={ref}
          >
            <div className="py-2 flex flex-col">
              <span className="font-medium text-gray-100">{data?.user.name}</span>
                <span className="text-sm text-gray-400">{data?.user.email}</span>
            </div>
            <div className="py-1 border-t border-gray-700">
              <Button
                variant="ghost"
                className="flex items-center w-full justify-start py-2 text-left text-gray-200 hover:bg-gray-700 hover:text-white"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span>Sign out</span>
              </Button>
            </div>
          </div>
        )}
      </div>
  );
};

export default AvatarWithMenu;

