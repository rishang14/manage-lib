export const runtime = "nodejs";
import { auth } from "@/auth";
import { registerClient, removeClient } from "@/lib/sse";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const session = await auth(); 
  if (!session?.user.email) {
    return NextResponse.json(
      {
        error: "Unauthorized request ",
      },
      { status: 401 }
    );
  }
  const searchParams = req.nextUrl.searchParams;
  const userid = searchParams.get("userid"); 
  const name =searchParams.get("name") ?? ""
  const stream = new ReadableStream({   

    start(controller) {
      const encoder = new TextEncoder(); 
      let isClosed = false;
      let timeout: NodeJS.Timeout;
      const send = (data: any) => {  
          if (isClosed) {
          return;
        }
        console.log("sse",data);
      
        try { 
         controller.enqueue(encoder.encode(`\n\ndata: ${JSON.stringify(data)}\n\n`)); 
        } catch (error) {
           console.log(error,"error in the catch block of the stream ") 
           cleanup();
        }
      };
       console.log("stream is ongoing") 


      const cleanup=()=>{
        if (isClosed) return;
        isClosed = true;

        console.log(`Cleaning up SSE connection for user: ${name}`);

        // Clear interval first
        if (timeout) {
          clearInterval(timeout);
          timeout = undefined as any;
        }

        // Remove client from registry (this won't call cleanup again due to our logic)
        removeClient(userid as string);
        try {
          if (controller.desiredSize !== null) {
            controller.close();
          }
        } catch (error) {
          // Controller already closed, ignore
          console.log('Controller already closed');
        }
      }; 
     console.log("before register clinet");
      send({ type: "connected", userid }); 
      console.log("send client after ",)
      registerClient(userid as string, send);  
      console.log("hey after register clinet")
       timeout = setInterval(() => {
          if (!isClosed) {
          send({ type: "ping" });
        }
      }, 15000); 
    req.signal.addEventListener("abort", () => { 
      console.log(`connection lost for  user : ${name}`)
       cleanup()
      });
    },
  });
  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
