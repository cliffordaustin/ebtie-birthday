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
      const user = await prisma.userPackage.upsert({
        where: {
          userId_packageId: {
            userId: body.userId,
            packageId: body.packageId,
          },
        },
        update: {
          selectedNumber: body.selectedNumber,
        },
        create: {
          userId: body.userId,
          packageId: body.packageId,
          selectedNumber: body.selectedNumber,
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
        userPackages: true,
        UserPackage: true,
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
    await prisma.userPackage.delete({
      where: {
        id: body.packageId,
        userId: body.userId,
      },
    });

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" });
  }
}
