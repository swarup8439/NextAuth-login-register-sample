"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.push("/dashboard");
    }
  }, [sessionStatus, router]);

  const handleSubmit = async (e)=>{
    e.preventDefault();

    const email=e.target[0].value;
    const password=e.target[1].value;

    if(!email || !password){
        toast.error("Please fill in all fields");
    }

    try {
        const res = await signIn("credentials",{
            redirect:false,
            email,password
        });

        if(res?.error){
            if(res?.url){
                router.replace('/dashboard');
            }
            toast.error("Invalid Credentials :( ")
        }else{
            toast.success("Successfully Logged In :) ");
        }
    } catch (error) {
        toast.error(error);
    }

  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="bg-slate-900 p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-200 text-sm font-bold mb-2"
              >
                Email
              </label>
              <Input type="text" className="w-full" placeholder="Enter email" />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-200 text-sm font-bold mb-2"
              >
                Password
              </label>
              <Input type="password" className="w-full" placeholder="Enter password" />
            </div>
            <div>
                <Button
                  variant="outline"
                  type="submit"
                  className="w-full bg-blue-700 text-white hover:bg-blue-400 hover:text-white mb-2"
                >
                  Login
                </Button>
              </div>
              <span>
                {" "}
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-center text-blue-500 hover:underline mt-2 ml-1.5"
                >
                  {" "}
                  Register
                </Link>
              </span>
          </form>
        </div>
      </div>
    )
  );
};

export default Login;
