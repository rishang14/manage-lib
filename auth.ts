import NextAuth , { User as NextAuthUser }  from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./lib/prisma"
import authConfig from "./lib/auth.config"
 
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma), 
  pages:{
  signIn: "/login",
  },  
   events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  }, 
    callbacks: {
    async signIn ({user,account,profile}) {
       if (account?.provider !== "credentials") {
        return true;
      } 
        return false;  
    }
},
  session: { strategy: "jwt" },
  ...authConfig,
})