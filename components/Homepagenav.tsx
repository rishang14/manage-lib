'use client'

// import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Search, Bell, Moon, Sun, User, Settings, LogOut } from 'lucide-react'
import { ModeToggle } from './Theme'
import { SidebarTrigger } from './ui/sidebar'
import { NotificationTrigger } from "./NotificationDropdown"
import Profilesetting from "./Profilesetting"

const  HomeNavBar=()=> {

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center md:justify-between  md:px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 md:mr-8 mr-3"> 
           <SidebarTrigger className="h-10 w-10 text-white hover:text-white bg-zinc-800 hover:bg-zinc-800 rounded-md mr-2 " />
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground ">LibraryHub</h1>
        </div>

        {/* Right side actions */}
        <div className="flex items-center md:space-x-3 md:ml-6">
          <NotificationTrigger/>
          <ModeToggle/> 
          <Profilesetting/>

         
        </div>
      </div>
    </header>
  )
}


export default HomeNavBar;