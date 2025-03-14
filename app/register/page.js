"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Register = () => {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.push("/dashboard");
    }
  }, [sessionStatus, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;

    if (!username || !email || !password || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password,confirmPassword }),
      });

      if (res.status === 400) {
        toast.error("Email already registered :( ");
      } else if (res.status === 201) {
        toast.success("Account created successfully");
        router.push("/login");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  if (sessionStatus === "loading") {
    return <h2>Loading...</h2>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="bg-slate-900 p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-200 text-sm font-bold mb-2"
                >
                  Username
                </label>
                <Input
                  type="text"
                  className="w-full"
                  placeholder="Enter username"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-200 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <Input
                  type="text"
                  className="w-full"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-200 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <Input
                  type="password"
                  className="w-full"
                  placeholder="Enter password"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirm-password"
                  className="block text-gray-200 text-sm font-bold mb-2"
                >
                  Confirm Password
                </label>
                <Input
                  type="password"
                  className="w-full"
                  placeholder="Confirm password"
                />
              </div>
              <div>
                <Button
                  variant="outline"
                  type="submit"
                  className="w-full bg-blue-700 text-white hover:bg-blue-400 hover:text-white mb-2"
                >
                  Register
                </Button>
              </div>
              <span>
                {" "}
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-center text-blue-500 hover:underline mt-2 ml-1.5"
                >
                  {" "}
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Register;
