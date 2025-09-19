import { Session } from "next-auth";
import ManagerTab from "./ManagerTab"; 
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ManagersPerLib } from "@/lib/dbcalls";
import { User } from "@prisma/client";


type prop ={
  libid:string, 
  admin:string
}

export async function ManagerControls({libid,admin}:prop) {   
const session= await auth(); 
if(!session?.user.id){
  return redirect("/")
}
if(admin != "ADMIN"){
  return redirect("/");
} 

const managers:User[]= await ManagersPerLib(libid as string); 
console.log(managers);

  return (
    <div className="space-y-6">
      <ManagerTab libid={libid} admin={session as Session} mamangers={managers } />
    </div>
  );
}
