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
      async jwt({ token, user }) {
    if (user && user.email) {
      const dbUser = await prisma.user.findUnique({
        where: { email: user.email },
      });
      
      token.id = dbUser?.id;  
      console.log(dbUser?.id,"userid") 
      token.name=dbUser?.name;
      token.email=dbUser?.email
      console.log("i got triggered")
    }

    return token;
  },

    async signIn ({account}) {
       if (account?.provider !== "credentials") {
        return true;
      } 
        return false;  
    }, 

     async session({ session, token }) { 
       if(token.id && session.user){
        session.user.id=token.id; //attach user id for api calls 
       } 
       if(session?.user){
        session.user.name=token.name; 
        session.user.email=token.email;
       }
      return session
    },
},
  session: { strategy: "jwt" }, 
  secret:process.env.AUTHSECERT,
  ...authConfig,
})