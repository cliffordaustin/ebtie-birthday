"use client";

import React from "react";

function ClientOnly({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export default ClientOnly;
