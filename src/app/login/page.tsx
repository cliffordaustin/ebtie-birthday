"use client";

import Login from "@/components/Login";
import React from "react";
import { Suspense } from "react";

function VerifyUserProfile() {
  return (
    <Suspense>
      <Login></Login>
    </Suspense>
  );
}

export default VerifyUserProfile;
