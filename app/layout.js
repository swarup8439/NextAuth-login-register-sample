import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";
import NavBar from "@/components/NavBar";
import ReactToast from "@/components/react-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next-Auth Example Project",
  description: "Created by Swarup.dev",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-white`}
      >
        <SessionProvider session={session}>
          <NavBar />
          {children}
          <ReactToast />
        </SessionProvider>
      </body>
    </html>
  );
}
