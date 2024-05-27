import prisma from "@/db/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const user = await prisma.user.update({
      where: {
        email: body.email,
      },

      data: {
        yellow_fever_vaccine: body.vaccineSelected,
        visa_received: body.isVisaReceived,
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
