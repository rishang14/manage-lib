import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ExternalLink,  SquarePenIcon } from 'lucide-react'
import { Library } from "@/prisma/zod"
import { PrefectchLibdetailsCard } from "./PrefectchLibdetailsComp"



export function LibraryCard({ library }: { library: Library }) {

  return (
    <Card className="hover:shadow-md hover:shadow-cyan-900 border-cyan-950 transition-shadow border-1 ">
      <CardHeader className="pb-4">
          <div className="flex items-center justify-between space-x-3">
            <div className="space-x-2 flex items-center"> 
               <BookOpen className="h-6 w-6 text-cyan-300/50" />
              <CardTitle className="text-lg text-cyan-400">{library.name}</CardTitle>
            </div> 
            <PrefectchLibdetailsCard libid={library.id}/>
          </div>   
      </CardHeader>
    </Card>
  )
}
