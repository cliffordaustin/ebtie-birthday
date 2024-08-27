import prisma from "@/db/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const user = await prisma.emergencyContact.update({
      where: {
        id: body.id,
      },
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email,
        relationship: body.relationship,
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

export async function DELETE(request: Request) {
  const body = await request.json();

  try {
    await prisma.emergencyContact.delete({
      where: {
        id: body.id,
      },
    });

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" });
  }
}
