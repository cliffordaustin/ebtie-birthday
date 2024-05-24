"use client";

import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next-nprogress-bar";

function Logout() {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        Cookies.remove("email");
        router.push("/login");
      }}
      className="text-blue-600 hover:underline cursor-pointer"
    >
      Logout
    </div>
  );
}

export default Logout;
