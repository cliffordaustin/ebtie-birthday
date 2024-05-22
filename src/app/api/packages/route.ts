import prisma from "@/db/db";
import { NextApiRequest } from "next";
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

export async function GET(request: Request) {
  const query = request.url.split("?")[1];

  const packageId = new URLSearchParams(query).get("packageId");

  try {
    const packageUnique = await prisma.package.findUnique({
      where: {
        id: packageId as string,
      },
      include: {
        User: true,
      },
    });

    return NextResponse.json({ packageUnique });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function DELETE(request: Request) {
  const body = await request.json();

  try {
    await prisma.user.update({
      where: {
        id: body.userId,
      },
      data: {
        packageId: null,
      },
    });

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" });
  }
}
