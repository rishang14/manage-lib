import Link from 'next/link'
import React from 'react'

const Page= () => {
  return (
   <div className=' flex items-center justify-center w-full h-screen'>
     <div className=' p-3 m-2'>
       <h1 className='text-3xl  font-stretch-75% '>What are you looking for mate  ...   </h1> 
       <Link href={"/"} ><span className=' underline text-blue-600'>
        Go back 
        </span>
        </Link>
     </div>
   </div>
  )
}

export default Page