"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { UserCheck, Plus} from "lucide-react";
import { Session } from "next-auth";
import { User } from "@prisma/client";

type prop={
  libid:string, 
  admin:Session 
  mamangers:User[]
}

const ManagerTab = ({libid,admin,mamangers}:prop) => {
 const [openaddmanagerDialog,setopenADDmanagerDialog]=useState(false)

  return ( 
    <>
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UserCheck className="w-5 h-5" />
              Manager Controls
            </div>
            <Button onClick={() => setopenADDmanagerDialog(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Manager
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
            
            </div>
          </div>
        </CardContent>
      </Card>
    </div>  
 </>
  );
};

export default ManagerTab;
