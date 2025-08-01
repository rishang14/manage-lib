import { NextRequest, NextResponse } from "next/server";
import { publicRoutes,protectedRoutes,libadminRoute } from "./lib/pathroute";
import NextAuth from "next-auth";
import authConfig from "./lib/auth.config";

const {auth}= NextAuth(authConfig);
export default async function middleware(req: NextRequest) {
  const session= await auth(); 
  console.log(session,"inside middleware"); 
   const pathname = req.nextUrl.pathname;  

  const isProtected = protectedRoutes.some(route => pathname.startsWith(route));
  const isPublic = publicRoutes.includes(pathname);  
  const isadmin = libadminRoute.some(route => pathname.startsWith(route)); 
  

   if(isProtected  && !session?.user?.email ){
    return NextResponse.redirect(new URL('/login', req.nextUrl))
   }
   
   if(isPublic && session?.user?.email &&   !req.nextUrl.pathname.startsWith('/home')){
    return NextResponse.redirect(new URL("/home", req.nextUrl) ); 
   } 

  return NextResponse.next();

}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};