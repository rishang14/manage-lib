// import { Button } from '@/components/ui/button'
"use client"
import React, { useEffect }  from 'react'

import axios from "axios"
// import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, FileText, Clock, Users, ExternalLink, Sparkles } from "lucide-react"
import { useSession } from 'next-auth/react' 
import { createlibdata } from '@/lib/dumydata'
// import  CreateLibraryDialog  from '@/components/all-dialog/createlibdialog'
// import { CreateLibraryDialog } from "../create-library-dialog"

const existingFiles = [
  {
    id: "1",
    name: "Production Library",
    type: "Library",
    shifts: 3,
    lastModified: "2024-01-15",
    status: "Active",
    description: "Main production environment with 24/7 coverage",
    color: "from-blue-400/20 to-purple-400/20",
  },
  {
    id: "2",
    name: "Development Setup",
    type: "Configuration",
    shifts: 2,
    lastModified: "2024-01-14",
    status: "Draft",
    description: "Development environment configuration",
    color: "from-green-400/20 to-blue-400/20",
  },
  {
    id: "3",
    name: "Testing Framework",
    type: "Library",
    shifts: 1,
    lastModified: "2024-01-13",
    status: "Active",
    description: "Automated testing and QA processes",
    color: "from-purple-400/20 to-pink-400/20",
  },
]

 const Page= ()=> {
  // const [isDialogOpen, setIsDialogOpen] = useState(false) 
  const {data,status}=useSession(); 
  console.log(data,"data") 
 
  const handleFileClick = (file: (typeof existingFiles)[0]) => {
    window.open(`/file-info/${file.id}`, "_blank")
  } 


 useEffect(()=>{
   async function getsession(){
   const res=  await axios.post(`/api/createLibrary`,createlibdata,{withCredentials:true});  
   console.log(res); 
   } 
   getsession();
 },[]) 
  return ( 
    <div className='max-w-7xl container mx-auto'>
      <div className="relative z-10 space-y-8">
        {/* Header */}
        <div className="backdrop-blur-xl bg-white/10 dark:bg-slate-900/10 border border-white/20 dark:border-slate-700/20 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                <Sparkles className="w-8 h-8 text-purple-500" />
                Glass Design
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Frosted glass effects with translucent elements and soft shadows
              </p>
            </div>
            <Button
              // onClick={() => setIsDialogOpen(true)}
              className="backdrop-blur-xl bg-white/20 dark:bg-slate-900/20 border border-white/30 dark:border-slate-700/30 text-slate-900 dark:text-slate-100 hover:bg-white/30 dark:hover:bg-slate-900/30 px-6 py-3 rounded-2xl shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create Library
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Total Libraries", value: existingFiles.length, icon: FileText, color: "text-blue-400" },
            { label: "Active Shifts", value: existingFiles.reduce((sum, file) => sum + file.shifts, 0), icon: Clock, color: "text-green-400" },
            { label: "Team Members", value: 24, icon: Users, color: "text-purple-400" },
          ].map((stat, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/10 dark:bg-slate-900/10 border border-white/20 dark:border-slate-700/20 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl bg-white/20 dark:bg-slate-900/20 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Files Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {existingFiles.map((file) => (
         <div
            key={file.id}
            // initial={{ opacity: 0, scale: 0.8 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ delay: index * 0.1 }}
            // whileHover={{ y: -5 }}
            className="group cursor-pointer"
            // onClick={() => handleFileClick(file)}
          >
            <div className="relative">
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${file.color} rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}
              />
              <Card className="relative bg-slate-900 border-slate-700 h-full">
                <CardContent className="p-6">
                  {/* Header with Icon and Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${file.color} rounded-full blur-sm opacity-50`}
                      />
                      <div className="relative p-3 bg-slate-800 rounded-full">
                        {/* <file className="w-6 h-6 text-white" /> */}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                        {file.status}
                      </Badge>
                      <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {file.name}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-2">{file.description}</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 p-2 bg-slate-800/50 rounded-lg">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <div>
                        <p className="text-xs text-slate-500">Modified</p>
                        <p className="text-xs text-white font-medium">{file.lastModified}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-800/50 rounded-lg">
                      <Users className="w-4 h-4 text-slate-400" />
                      <div>
                        <p className="text-xs text-slate-500">Seats</p>
                        <p className="text-xs text-white font-medium">{file.shifts}</p>
                      </div>
                    </div>
                  </div>

                  {/* Status and Type */}
                  <div className="flex items-center justify-between">
                    <Badge
                      className={`text-xs ${
                        file.status === "Active"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }`}
                    >
                      {file.status}
                    </Badge>
                    <span className="text-xs text-slate-500">{file.type}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
           </div>
          ))}
        </div>

        {/* <CreateLibraryDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} /> */}

    </div> 
     </div>
      )
} 

export default Page;