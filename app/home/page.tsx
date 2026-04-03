import type { Metadata } from "next";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import HomeNavBar from "@/components/Homepagenav";
import { DashboardHeader } from "@/components/DashboardHeader";
import { SharedLibrariesSection } from "@/components/sharedlibsection";
import { MyLibrariesSection } from "@/components/MylibrarySection";
import { verifysession } from "@/lib/helper";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MdOutlineCreate } from "react-icons/md";
import { DesignedCard } from "@/components/DesignedCard";
import { Card } from "@/components/ui/card";
import { LineGradient } from "@/components/GradientComp";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Home",
  description: "to manage libraries and all",
};

const Page = async () => {
  const session = await verifysession();
  console.log(session);
  if (!session) return redirect("/");
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-260 flex-col gap-2 p-4 [--pattern-fg:var(--color-neutral-900)]">
      <HomeNavBar data={session.user} />
      <div className="container mt-10 flex">
        <div className="flex w-full items-center justify-center gap-2 md:justify-between md:gap-0">
          <h1 className="text-2xl font-bold tracking-tight text-gray-200 text-shadow-md md:text-3xl">
            Dashboard :{" "}
          </h1>
          <Button className="bg-gray-100 text-neutral-800 shadow-2xl ring-2 ring-blue-200 transition duration-200 text-shadow-md active:scale-98">
            <MdOutlineCreate /> Create new library
          </Button>
        </div>
      </div>
      <DesignedCard className="my-2 flex h-full w-full flex-1 flex-col rounded-2xl from-neutral-700/40 to-neutral-900/50 p-2 inset-ring inset-ring-[rgba(255,255,255,0.2)]">
        <div className="grid h-full w-full flex-1 grid-cols-1 gap-4 rounded-xl bg-zinc-900 p-2 py-4 [--pattern-fg:var(--color-white)]/10 md:grid-cols-3 lg:grid-cols-4">
          <LibCard />
          <LibCard />
        </div>
      </DesignedCard>
    </main>
  );
};

export default Page;
export const LibCard = () => {
  return (
    <Card className="group flex max-h-40 max-w-100 items-center rounded-md bg-zinc-950/80 p-2 inset-shadow-xs inset-shadow-zinc-400 backdrop-contrast-50 perspective-distant">
      <div className="relative flex h-full w-full rounded-md bg-zinc-900">
        <LineGradient />
        <div className="absolute inset-0 h-full w-full translate-x-3 -translate-y-3 rounded-md bg-neutral-800 py-2 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
          <div className="flex flex-col items-start justify-start gap-2 p-2">
            <Link
              href="/"
              className="text-shadow flex items-center gap-2 text-2xl font-medium tracking-tight text-gray-200 underline"
            >
              {" "}
              Lib name{" "}
            </Link>
            <p className="font-light text-gray-400">
              Seats : <span className="test-gray-300 font-medium">1/20</span>
            </p>
            <div className="mb-2 flex gap-5">
              <Button
                variant={"outline"}
                className="relative bg-gray-200 text-gray-400 shadow-xl transition duration-200 text-shadow-sm active:scale-98"
              >
                <div className="absolute inset-x-0 -bottom-px h-px bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
                <MdModeEdit className="size-4" />
                Edit
              </Button>
              <Button
                variant={"outline"}
                className="relative bg-gray-200 text-gray-400 shadow-xl transition duration-200 text-shadow-sm active:scale-98"
              >
                <MdDelete className="size-4" />
                Delete
                <div className="absolute inset-x-0 -bottom-px h-px bg-linear-to-r from-transparent via-red-500 to-transparent"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
