import { NavProps } from "@/common/types";
import Profilesetting from "./Profilesetting";
import { MdLocalLibrary } from "react-icons/md"; 

const HomeNavBar = async({data}:NavProps) => {   
  return (
    <header className=" w-full  max-w-240  mx-auto p-2  ">
      <div className="container flex h-16 items-center justify-between inset-shadow-2xs inset-shadow-neutral-500 bg-linear-to-bl px-2  border from-neutral-900/10  to-neutral-900  rounded-2xl  md:px-4">
        <div className="flex items-center space-x-2 md:mr-8 mr-3">
          <div className="w-8 h-8  rounded-lg flex items-center justify-center">
            <MdLocalLibrary className="w-5 h-5"/>
          </div>
          <h1 className="text-xl font-bold text-foreground ">LibShift</h1>
        </div>
          <Profilesetting data={data}/>
      </div>
    </header>
  );
};

export default HomeNavBar;
