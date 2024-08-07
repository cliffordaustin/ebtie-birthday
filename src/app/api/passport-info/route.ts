import prisma from "@/db/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const user = await prisma.user.update({
      where: {
        email: body.email,
      },
      data: {
        flightFirstName: body.firstName,
        flightLastName: body.lastName,
        flightMiddleName: body.middleName,
        flightDateOfBirth: body.dateOfBirth,
        flightPassportNumber: body.passportNumber,
        flightNationality: body.nationality,
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