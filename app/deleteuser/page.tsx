import { DeleteUser } from '@/lib/helper'
import React from 'react'

const Page = async() => { 

    const deluser= await  DeleteUser('cmdd702q40000zgwstx0z14mk'); 
    console.log(deluser,'user')
  return (
    <div>hello</div>
  )
}

export default Page