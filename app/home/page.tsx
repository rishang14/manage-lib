import type { Metadata } from "next";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import HomeNavBar from "@/components/Homepagenav";
import { DashboardHeader } from "@/components/DashboardHeader";
import { SharedLibrariesSection } from "@/components/sharedlibsection";
import { MyLibrariesSection } from "@/components/MylibrarySection";
import { verifysession } from "@/lib/helper";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Home",
  description: "to manage libraries and all",
};

const Page = async () => {
  const session = await verifysession();
  console.log(session);
  if (!session) return redirect("/");
  return (
    <main className="bg-conic-0  from-zinc-950  to-zinc-950/50 backdrop-blur-3xl w-full h-full min-h-screen">
      <HomeNavBar data={session.user} />
      <div className="flex mx-auto max-w-6xl flex-col container space-y-6 p-6"> 
         <h2 className="text-3xl text-center md:text-5xl  text-transparent bg-linear-180 bg-clip-text  to-gray-400/80 from-white font-bold ">
              Everything you need to manage your library
            </h2>
        {/* <DashboardHeader />
          <MyLibrariesSection />
          <SharedLibrariesSection /> */}
      </div>
    </main>
  );
};

export default Page;
