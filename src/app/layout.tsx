import { AuthButton } from "@/components/navbar";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/session-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import DevNavBar from "./_components/dev-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" className="">
      <SessionProvider session={session}>
        <body className={cn(inter.className)}>
          <DevNavBar />
          <div className="container">{children} </div>
          <Toaster richColors />
        </body>
      </SessionProvider>
    </html>
  );
}
