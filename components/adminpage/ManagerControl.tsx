import { Session } from "next-auth";
import ManagerTab from "./ManagerTab"; 


type prop ={
  libid:string, 
  admin:Session
}

export async function ManagerControls({libid,admin}:prop) {  
  return (
    <div className="space-y-6">
      <ManagerTab libid={libid} admin={admin} />
    </div>
  );
}
