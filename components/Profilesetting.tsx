"use client"
import React from 'react' 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu" 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button' 
import {  LogOut } from 'lucide-react'
import { useSession ,signOut} from 'next-auth/react'

const Profilesetting = () => {  
  const {data}=useSession() 
   

  return (
    <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={data?.user.image ?? "/defualt.png"} alt={data?.user.name} />
                  <AvatarFallback>{data?.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{data?.user.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                   {data?.user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuItem onClick={()=> signOut({redirectTo:"/"})}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> 
  )
}

export default Profilesetting