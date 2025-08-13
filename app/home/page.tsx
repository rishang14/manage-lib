// import { Button } from '@/components/ui/button'


import axios from "axios"
// import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, FileText, Clock, Users, ExternalLink, Sparkles } from "lucide-react"
import { useSession } from 'next-auth/react' 
import { createlibdata } from '@/lib/dumydata' 
import { SidebarProvider,SidebarInset } from '@/components/ui/sidebar'
import { Avatar, AvatarFallback,AvatarImage } from '@/components/ui/avatar'
import { SimpleSidebar } from '@/components/simple-sidebar'
import HomeNavBar from '@/components/Homepagenav'
import { DashboardHeader } from '@/components/DashboardHeader'
import { StatsCards } from '@/components/statscard'
import { SharedLibrariesSection } from '@/components/sharedlibsection'
import { MyLibrariesSection } from '@/components/my-library-section'
// import AvatarWithMenu from '@/components/Avatarwithmenu'
// import  CreateLibraryDialog  from '@/components/all-dialog/createlibdialog'
// import { CreateLibraryDialog } from "../create-library-dialog"
const myLibraries = [
  {
    id: 1,
    name: "Central Library",
    location: "Downtown, Main Street",
    totalSeats: 150,
    occupiedSeats: 120,
    monthlyRevenue: 45000,
    managers: 2,
    status: "active",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    name: "Tech Hub Library",
    location: "IT Park, Sector 5",
    totalSeats: 80,
    occupiedSeats: 65,
    monthlyRevenue: 28000,
    managers: 1,
    status: "active",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    name: "Student Corner",
    location: "University Area",
    totalSeats: 200,
    occupiedSeats: 180,
    monthlyRevenue: 52000,
    managers: 3,
    status: "active",
    color: "from-purple-500 to-purple-600"
  }
]

const sharedLibraries = [
  {
    id: 4,
    name: "Elite Study Center",
    owner: "Sarah Johnson",
    location: "Business District",
    myRole: "Manager",
    totalSeats: 120,
    occupiedSeats: 95,
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 5,
    name: "Knowledge Hub",
    owner: "Michael Chen",
    location: "Academic Zone",
    myRole: "Assistant Manager",
    totalSeats: 90,
    occupiedSeats: 70,
    color: "from-indigo-500 to-indigo-600"
  }
]

 const Page= ()=> {
  // const [isDialogOpen, setIsDialogOpen] = useState(false) 
  // const {data,status}=useSession(); 
  // console.log(data,"data") 
 
  return (  
     <SidebarProvider>
      <SimpleSidebar />
      <SidebarInset>
        <HomeNavBar />
        
        <div className="flex-1 space-y-6 p-6">
          <DashboardHeader />
          
           <MyLibrariesSection  />

          <SharedLibrariesSection /> 
        </div>
      </SidebarInset>
    </SidebarProvider>
      )
} 

export default Page;