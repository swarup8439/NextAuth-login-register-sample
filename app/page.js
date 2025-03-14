"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

const Home = () => {
  const {data:session}=useSession();

  return !session ? (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href='/login' className="border border-red-400 px-4 py-2 text-red-400 rounded-2xl">Please login to see the content :( </Link>
    </div>
  ) : (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="border border-green-400 text-green-400 font-semibold rounded-2xl p-4">Welcome back, Buddy 😊</p>
    </div>
  )
};

export default Home;