 "use client"

import { revalidateHome } from "@/lib/serveraction";

export default  function Page() {
   
  return (
   
<button onClick={async()=>await revalidateHome("cmdskhcgh0001zgpsze5yd08c")}>home</button>
  )
}
