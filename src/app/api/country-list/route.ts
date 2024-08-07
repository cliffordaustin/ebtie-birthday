import prisma from "@/db/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const countries = fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    );

    return NextResponse.json({ countries });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" });
  }
}
