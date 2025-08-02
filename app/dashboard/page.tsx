
import { auth } from '@/auth'
import React from 'react'
// const {auth} =NextAuth(authConfig)
const   Page = async() => { 
    const session= await auth() 
    console.log(session,"users")
  return (
    <div>page</div>
  )
}

export default Page