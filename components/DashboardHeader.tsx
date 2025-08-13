"use client"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react' 
import CreateLibraryDialog from "./all-dialog/Createlibdialog"
import { useDialogstore } from "@/store/StateStore"

export function DashboardHeader() {
  const {setIsdialogOpen}= useDialogstore()
  return (  
    <>
    <div className="flex   items-center  md:flex-row flex-col md:justify-between  gap-2">
      <div className="flex gap-2 md:text-start text-center space-y-2 md:flex-row flex-col">
        <h2 className="md:text-3xl text-3xl font-bold text-foreground">Library Dashboard</h2>
        <p className="text-muted-foreground mt-1 md:text-start text-center">
          Manage your libraries and track performance
        </p>
      </div>
      <Button onClick={()=>setIsdialogOpen(true)}>
        <Plus className="h-4 w-4 mr-2" />
        Add New Library
      </Button>
    </div> 
    <CreateLibraryDialog />
    </>
  )
}
