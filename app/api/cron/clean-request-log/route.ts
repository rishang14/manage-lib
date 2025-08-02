// app/api/cron/clean-request-log/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    // const cutoff = subMinutes(new Date(), 15); // Keep logs for 15 min  

    

    // const deleted = await prisma.requestLog.deleteMany({
    //   where: {
    //     createdAt: {
    //       lt: cutoff,
    //     },
    //   },
    // });

    // return NextResponse.json({ deleted: deleted.count });
  } catch (err) {
    return NextResponse.json({ error: "Failed to clean logs" }, { status: 500 });
  }
}
