import { LibraryCard } from "./LibraryCard";
import {  BookOpen, Crown, Eye } from "lucide-react";
import { alllibrary } from "@/lib/apihelper";
import { auth } from "@/auth";

export async function MyLibrariesSection() {
  const session = await auth();

  if (!session?.user.id) return;

  const myLibraries = await alllibrary(session?.user.id);

  console.log(myLibraries, "libraries");
  return (
    <>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-foreground flex items-center">
            <Crown className="h-6 w-6 text-yellow-500 mr-2" />
            My Libraries
          </h3>
        </div>
        {myLibraries.length === 0 ? (
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
                    Create your first library to start .
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {myLibraries.map((library) => (
              <LibraryCard key={library.id} library={library} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
