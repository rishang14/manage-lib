import { auth } from "@/auth";
import { libroles } from "@/common/types";
import { Suspense } from "react";
import TablibNavigation from "@/components/ChangeLibraryTab";
import { getshifts, getssrlibdata } from "@/lib/serveraction";
import { Building2, Shield } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { ShiftManagement } from "@/components/Shift";
import Manage from "@/components/Manage";

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ tab?: string }>;
}) => {
  const { id } = await params;
  const session = await auth();
  console.log(session, "session");

  if (!session?.user) {
    redirect("/login");
  }

  const libid = session?.user.libdetails.find((u: libroles) => u.libid === id); 

  const userrole= session?.user.libdetails.find((u:libroles)=>u.libid== id); 


  if (!libid) {
    redirect("/home");
  }
  const { tab = "shifts" } = await searchParams;
  const data = await getssrlibdata(id as string);
  const shifts = await getshifts(id);
  return (
    <>
      <header className="bg-white dark:bg-neutral-950 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                  { data &&  data.name.charAt(0).toUpperCase() + data?.name.slice(1)}
                </h1>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Owner-Name : <span>{data?.owner.name}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="text-green-600 border-green-200"
              >
                Online
              </Badge>
              {
                userrole.role === "ADMIN" && (
                  <Link href={`/library/${id}/admin`}>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Shield className="w-4 h-4 mr-1" />
                  Admin
                </Button>
              </Link>
                )
              }
            </div>
          </div>
        </div>
      </header>
      <TablibNavigation activeTab={tab} libraryId={id} />
      {tab === "shifts" && (
        <Suspense fallback={<div className="p-6">Loading shifts...</div>}>
          <ShiftManagement shifts={shifts} />
        </Suspense>
      )}

      {tab === "manage" && (
        <Suspense fallback={<div className="p-6">Loading management...</div>}>
          <Manage />
        </Suspense>
      )}
    </>
  );
};

export default Page;
