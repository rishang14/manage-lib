
import { auth } from '@/auth'
import { libroles } from '@/common/types'
import AdminDashboard from '@/components/adminpage/Admin'
import { ManagerControls } from '@/components/adminpage/ManagerControl'
import { RoleType } from '@prisma/client'
import { Session } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => { 
  const session = await auth(); 
  const {id} = await params; 
  console.log(id,"params");
   
  const {role}= session?.user.libdetails.find((item:libroles) => item.libid === id);  

  if(role !== "ADMIN"){
    return redirect(`/library/${id}`);
  }
   
  const Managercontrol=<ManagerControls libid={id} admin={role as string}/>
  return ( 
    
   <AdminDashboard userinfo={session as Session} tabs={{
    managers:Managercontrol
   }} />
  )
}

export default Page;