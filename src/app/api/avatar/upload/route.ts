import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import prisma from "../../../../db/db";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  if (!filename) {
    return NextResponse.json(
      { error: "Filename is required" },
      { status: 400 }
    );
  }

  const blob = await put(filename, request.body as any, {
    access: "public",
  });

  return NextResponse.json(blob);
}
