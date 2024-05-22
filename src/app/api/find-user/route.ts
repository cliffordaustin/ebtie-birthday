import prisma from "@/db/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
      include: {
        tripAddOns: true,
        dietryRestrictions: true,
        package: {
          include: {
            properties: true,
          },
        },
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
