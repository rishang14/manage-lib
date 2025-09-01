
import { auth } from '@/auth'
import { libroles } from '@/common/types'
import AdminDashboard from '@/components/adminpage/Admin'
import { setEngine } from 'crypto'
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
   
  return (
   <AdminDashboard userinfo={session as Session} />
  )
}

export default Page;