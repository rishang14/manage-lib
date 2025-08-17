import NextAuth  from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/prisma";
import authConfig from "./lib/auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
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
        async signIn({ account }) {
      if (account?.provider !== "credentials") {
        return true;
      }
      return false;
    },
    async jwt({ token,trigger, user }) {
      if (user?.email || trigger === "update") {
        const dbUser = await prisma.user.findUnique({
          where: { email: user?.email  as string},
          include: {
            userRoles: true,
          },
        }); 
 
        token.id = dbUser?.id;
        token.name = dbUser?.name;
        token.email = dbUser?.email;
        token.libraryRoles = dbUser?.userRoles.map((u) => ({ 
         libid : u.libraryId,
          role : u.role 
        }));
      }
      // console.log(token,"modified token");
      return token;
    },

    async session({ session, token, user }) {
      //  console.log(token,"token inside session is this available ")
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
          libdetails:token.libraryRoles
        },
      };
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  ...authConfig,
});
