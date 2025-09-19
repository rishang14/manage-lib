import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"; 
import { Button } from "../ui/button";  
import { Badge } from "../ui/badge";
import { ManagerWithRoles } from "@/common/types";
import { Mail,CalendarHeart,Trash2 } from "lucide-react"; 
import DeleteManager from "../DeleteManager";
 
type prop={
 manager:ManagerWithRoles,
 libid:string   
}

const ManagersList = ({manager,libid}:prop) => { 
    const [manangerid,setManagerId]=useState<string >("")
  return ( 
    <>
    <Card
      key={manager.id}
      className="relative group hover:shadow-md transition-shadow"
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Avatar className="h-10 w-10 flex-shrink-0">
              <AvatarImage
                src={manager.image ?? "/default-avatar.png"}
                alt={manager.name ?? "Manager"}
              />
              <AvatarFallback className="bg-primary/10 text-primary font-medium">
                {manager.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm truncate">{manager.name}</h4>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <Mail className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{manager.email}</span>
              </div>
              {manager.userRoles && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <CalendarHeart className="w-3 h-3 flex-shrink-0" />
                  <span>
                    Joined{" "}
                    {typeof manager.userRoles[0].joinedAt === "string"
                      ? manager.userRoles[0].joinedAt
                      : new Date(
                          manager.userRoles[0].joinedAt
                        ).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                  </span>
                </div>
              )}
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className=" h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={() => setManagerId(manager.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>

        {manager.userRoles[0].role && (
          <Badge variant="outline" className="mt-3 text-xs">
            {manager.userRoles[0].role}
          </Badge>
        )}
      </CardContent>
    </Card>  
    <DeleteManager deleteManagerId={manangerid} setDeleteManagerId={setManagerId} libid={libid}/>
</>
  );
};

export default ManagersList;
