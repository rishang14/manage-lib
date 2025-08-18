import { auth } from "@/auth";
import { libroles } from "@/common/types";
import Libdetailspage from "@/components/Librarydetails";
import { getlibrarydetails } from "@/lib/apihelper";
import { makeQueryClient } from "@/lib/serverquery";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const session = await auth();
  console.log(session, "session");

  if (!session?.user) {
    redirect("/login");
  }

  const libid = session?.user.libdetails.find((u: libroles) => u.libid === id);

  if (!libid) {
    redirect("/home");
  }

  const queryClinet = makeQueryClient();

  queryClinet.prefetchQuery({
    queryKey: ["libdetails", id],
    queryFn: () => getlibrarydetails(id as string),
    staleTime: 1000 * 60,
  });

  const dehydratedState = dehydrate(queryClinet);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Libdetailspage id={id as string} />
    </HydrationBoundary>
  );
};

export default Page;
