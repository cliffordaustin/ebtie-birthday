"use client";

import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button, Input } from "@nextui-org/react";
import { BackgroundBeams } from "./ui/background-beam";
import prisma from "@/db/db";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function Login() {
  const [loading, setLoading] = React.useState(false);
  const [userNotFound, setUserNotFound] = React.useState(false);

  const router = useRouter();

  const checkUser = async (formData: FormData) => {
    setLoading(true);
    const email = formData.get("email");
    if (!email) return;
    const res = await fetch("/api/find-user", {
      method: "POST",
      body: JSON.stringify({ email: email.toString() }),
    });

    const data = await res.json();

    if (data.user) {
      Cookies.set("email", email.toString());
      router.push(`/user-profile`);
    } else {
      setUserNotFound(true);
      setLoading(false);
    }
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <BackgroundGradient className="max-w-[470px] p-4 sm:p-10 bg-white">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Enter your email to continue</h1>
          <p>Use the email you provided in the response form.</p>
        </div>

        <form action={checkUser}>
          <div className="mt-6">
            <Input
              isRequired
              type="email"
              name="email"
              label="Email"
              radius="none"
              onBlur={() => setUserNotFound(false)}
              className="w-full"
              isInvalid={userNotFound}
              errorMessage={userNotFound ? "User not found" : ""}
            />
          </div>

          <Button
            type="submit"
            radius="none"
            color="primary"
            isLoading={loading}
            size="lg"
            className="w-full mt-6 text-white"
          >
            Continue
          </Button>
        </form>
      </BackgroundGradient>

      <BackgroundBeams />
    </div>
  );
}

export default Login;
