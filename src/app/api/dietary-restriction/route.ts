import prisma from "@/db/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const addon = await prisma.dietryRestriction.create({
      data: {
        name: body.name,
        userId: body.userId,
      },
    });

    return NextResponse.json({ addon });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function DELETE(request: Request) {
  const body = await request.json();

  try {
    await prisma.dietryRestriction.delete({
      where: {
        id: body.id,
      },
    });

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" });
  }
}
