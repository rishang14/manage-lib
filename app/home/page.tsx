
import type { Metadata } from "next";
import { SidebarProvider,SidebarInset } from '@/components/ui/sidebar'
import { SimpleSidebar } from '@/components/Simplesidebar'
import HomeNavBar from '@/components/Homepagenav'
import { DashboardHeader } from '@/components/DashboardHeader'
import { SharedLibrariesSection } from '@/components/sharedlibsection'
import { MyLibrariesSection } from '@/components/MylibrarySection' 
export const metadata:Metadata={
  title:"Home", 
  description:"to manage libraries and all"
}

 const Page= async()=> {  
//   //  made the call for server query 
//   const queryclinet= makeQueryClient(); 

//  // prefetch the data from the server 
//    await queryclinet.prefetchQuery({
//    queryKey:["mylibraries"],
//    queryFn:getalllibrary,  
//   })
  
//  // dehydrate it 
//   const dehydratedState = dehydrate(queryclinet);
 

 
  return (  
     <SidebarProvider>
      {/* <SimpleSidebar /> */}
      <SidebarInset className="">
        <HomeNavBar />
        
        <div className="flex mx-auto max-w-6xl flex-col container space-y-6 p-6">
          <DashboardHeader />

           <MyLibrariesSection  />

          <SharedLibrariesSection /> 
        </div>
      </SidebarInset>
    </SidebarProvider>
      )
} 

export default Page;