import { NextRequest, NextResponse } from "next/server";
import { publicRoutes, protectedRoutes } from "./lib/pathroute";
import { auth } from "@/auth";
import { libroles } from "./common/types";
export default async function middleware(req: NextRequest) {
  const session = await auth(); 
  const pathname = req.nextUrl.pathname;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isPublic = publicRoutes.includes(pathname);

  if (isProtected && !session?.user?.email) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (
    isPublic &&
    session?.user?.email &&
    !req.nextUrl.pathname.startsWith("/home")
  ) {
    return NextResponse.redirect(new URL("/home", req.nextUrl));
  }

  if (session?.user?.email && pathname.startsWith("/library")) {
    const libid = pathname.split("/")[2];
    const isadminRoute= pathname.includes(`/library/${libid}/admin`);
    const check = session?.user?.libdetails.find(
      (item: libroles) => item.libid === libid );

    if (!check) {
      return NextResponse.redirect(new URL("/unauthorized?reason=Invalid Library Id ", req.nextUrl));
    }

    if (
      check &&
      check.role != "ADMIN" && isadminRoute
        ){
      return NextResponse.redirect(new URL("/unauthorized?reason=only admin can access this route", req.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
