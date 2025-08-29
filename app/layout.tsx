import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; 
import localFont from 'next/font/local'; 
import "./globals.css";
import { Provider } from "./provider"; 


const rubik = localFont({
  display: 'swap',
  src: [
    {
      path: '../public/font/rubik.woff2',
    },
  ],
  variable: '--font-rubik',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lib manage",
  description: "To manage the library seats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubik.variable}  antialiased`} 
        suppressHydrationWarning
      >
        <Provider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Provider>
      </body>
    </html>
  );
}
