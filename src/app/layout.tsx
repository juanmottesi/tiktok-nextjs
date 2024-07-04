import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";

import UserProvider from "@/hooks/UserContext";
import { getUser } from "@/service/Api";

import Navbar from "./components/Navbar";

import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiktok",
  description: "Tiktok clone with nextjs",
};

const getLoguedUser = (token?: string) => {
  if (!token) return null;
  return getUser(token);
}

const RootLayout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const token = cookies().get('token')?.value;
  const user = await getLoguedUser(token);

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider tokenData={token} userData={user}>
          <Navbar />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}

export default  RootLayout