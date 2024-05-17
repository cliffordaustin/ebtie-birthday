import prisma from "@/db/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (body.packageId === "others") {
    try {
      const user = await prisma.user.update({
        where: {
          email: body.email,
        },

        data: {
          others: body.userPackage,
          packageId: null,
        },
      });

      if (user) {
        return NextResponse.json({ user });
      } else {
        return NextResponse.json({ message: "User not found" });
      }
    } catch (error) {
      return NextResponse.json({ message: "Internal server error" });
    }
  } else {
    try {
      const user = await prisma.user.update({
        where: {
          email: body.email,
        },

        data: {
          packageId: body.packageId,
        },
      });

      if (user) {
        return NextResponse.json({ user });
      } else {
        return NextResponse.json({ message: "User not found" });
      }
    } catch (error) {
      return NextResponse.json({ message: "Internal server error" });
    }
  }
}
