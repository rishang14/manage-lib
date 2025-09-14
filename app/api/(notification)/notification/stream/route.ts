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

  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      const send = (data: any) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
      };

      registerClient(userid as string, send, () => controller.close());

      send({ type: "connected", userid });

      const interval = setInterval(() => {
        send({ type: "ping" });
      }, 15000);

      req.signal.addEventListener("abort", () => {
        removeClient(userid as string);
        controller.close();
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
