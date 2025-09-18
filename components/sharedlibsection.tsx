import { auth } from '@/auth'
import { SharedLib } from '@/lib/dbcalls';
import { BookOpen, Users,  } from 'lucide-react'
import { LibraryCard } from './LibraryCard';
import { Library } from '@prisma/client';


export async function SharedLibrariesSection() { 
  const session= await auth(); 
   if(!session?.user.id) return;  
    
    const sharedlib= await SharedLib(session?.user.id as string)
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-foreground flex items-center">
          <Users className="h-6 w-6 text-blue-500 mr-2" />
          Shared Libraries
        </h3>
      </div>
       {sharedlib.length === 0 ? (
          <>
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex items-center justify-center   ">
                <div className=" flex flex-col gap-4 items-center">
                  <BookOpen size={40} color="#fff" />
                  <h2 className="font-bold text-lg text-gray-200">
                    No libraries yet{" "}
                  </h2>
                  <p className="font-medium text-lg text-center text-gray-600 ">
                    {" "}
                    You are not added yet  .
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {sharedlib.map((library) => (
              <LibraryCard key={library.id} library={library as Library} />
            ))}
          </div>
        )}
    </div>
  )
}