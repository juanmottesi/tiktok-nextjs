'use client';

import { useUser } from "@/hooks/UserContext";
import Link from "next/link";

const Navbar = () => {
  const { user } = useUser();
  return (
  <nav>
    <Link href="/">Tiktok</Link>
    {user ? (
      <>
        <Link href="/createPost">Add post</Link>
        <Link href="/profile">Profile</Link>
      </>
    ) : (
      <>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
      </>
    )}
  </nav>
);}

export default Navbar;