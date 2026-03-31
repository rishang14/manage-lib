import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma"; 
import { nextCookies } from "better-auth/next-js";
import prisma from "./lib/prisma";
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }), 
    socialProviders: {
    google: {
        prompt: "select_account", 
        clientId: process.env.AUTH_GOOGLE_ID as string,
        clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    },
}, 
plugins:[nextCookies()]
});