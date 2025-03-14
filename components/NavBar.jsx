"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import Image from "next/image";
import userImage from "@/app/images/user.png";
import { Button } from "./ui/button";

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-black fixed left-0 top-0 h-screen w-[150px] flex items-center">
      <ul className="flex flex-col justify-between h-full w-full text-white font-semibold text-left p-4">
        <div>
          <li className="mb-5">
            <Link href="/" className="block">
              Home
            </Link>
          </li>
          <li className="mb-5">
            <Link href="/dashboard" className="block">
              Dashboard
            </Link>
          </li>
        </div>

        <div>
          {session ? (
            <li className="mb-5">
              <div className="flex items-center">
                <Image
                  src={userImage}
                  alt="profile"
                  width={20}
                  height={10}
                  className="mb-2.5 mr-2 ml-0.5"
                />
                <p className="mb-4 text-center">
                  {session.user?.email.split("@gmail.com")[0]}
                </p>
              </div>
              <Button onClick={() => signOut()} variant="outline" className="bg-red-600 text-white hover:bg-red-400 hover:text-amber-50 font-semibold">Logout</Button>
            </li>
          ) : (
            <>
              <li className="mb-5">
                <Link href="/login" className="block">
                  Login
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/register" className="block">
                  Register
                </Link>
              </li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
