import HomeNavBar from "@/components/Homepagenav";
import { verifysession } from "@/lib/helper";
import { redirect } from "next/navigation";
import { DesignedCard } from "@/components/DesignedCard";
import type { Metadata } from "next";
import { LibraryCard } from "@/components/LibraryCard";
import { CreateLibButton } from "@/components/CreateLibButton";
import CreateLibraryDialog from "@/components/all-dialog/Library";
export const metadata: Metadata = {
  title: "Home",
  description: "to manage libraries and all",
};

const Page = async () => {
  const session = await verifysession();
  console.log(session);
  if (!session) return redirect("/");
  return (
    <>
      <main className="mx-auto flex min-h-screen w-full max-w-260 flex-col gap-2 p-4 [--pattern-fg:var(--color-neutral-900)]">
        <HomeNavBar data={session.user} />
        <div className="container mt-10 flex">
          <div className="flex w-full items-center justify-center gap-2 md:justify-between md:gap-0">
            <h1 className="text-2xl font-bold tracking-tight text-gray-200 text-shadow-md md:text-3xl">
              Dashboard :{" "}
            </h1>
            <CreateLibButton />
          </div>
        </div>
        <DesignedCard className="my-2 flex h-full w-full flex-1 flex-col rounded-2xl from-neutral-700/40 to-neutral-900/50 p-2 inset-ring inset-ring-[rgba(255,255,255,0.2)]">
          <div className="grid h-full w-full flex-1 grid-cols-1 place-items-center gap-4 rounded-xl bg-zinc-900 p-2 py-4 [--pattern-fg:var(--color-white)]/10 md:grid-cols-2 md:place-items-start lg:grid-cols-4">
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
          </div>
        </DesignedCard>
      </main>
      <CreateLibraryDialog />
    </>
  );
};

export default Page;
