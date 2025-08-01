import NextAuth, { User as NextAuthUser } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/prisma";
import authConfig from "./lib/auth.config";
import { CodeSquare } from "lucide-react";

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
    async jwt({ token, user }) {
      if (user && user.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email },
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
      console.log('token',token);
      return token;
    },

    async signIn({ account }) {
      if (account?.provider !== "credentials") {
        return true;
      }
      return false;
    },

    async session({ session, token, user }) {
       console.log(token,"token inside session is this available ")
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
