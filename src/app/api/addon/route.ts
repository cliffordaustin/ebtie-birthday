import prisma from "@/db/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (body.isOnSite) {
    try {
      const addon = await prisma.tripAddOn.update({
        where: {
          id: body.id,
        },
        data: {
          userOnSiteTripAddOns: {
            connect: {
              id: body.userId,
            },
          },
        },
      });

      return NextResponse.json({ addon });
    } catch (error) {
      return NextResponse.json({ message: "Internal server error" });
    }
  } else {
    try {
      const addon = await prisma.tripAddOn.update({
        where: {
          id: body.id,
        },
        data: {
          users: {
            connect: {
              id: body.userId,
            },
          },
        },
      });

      return NextResponse.json({ addon });
    } catch (error) {
      return NextResponse.json({ message: "Internal server error" });
    }
  }
}

export async function DELETE(request: Request) {
  const body = await request.json();

  if (body.isOnSite) {
    try {
      await prisma.tripAddOn.update({
        where: {
          id: body.id,
        },
        data: {
          userOnSiteTripAddOns: {
            disconnect: {
              id: body.userId,
            },
          },
        },
      });

      return NextResponse.json({ message: "Deleted" });
    } catch (error) {
      return NextResponse.json({ message: "Internal server error" });
    }
  } else {
    try {
      await prisma.tripAddOn.update({
        where: {
          id: body.id,
        },
        data: {
          users: {
            disconnect: {
              id: body.userId,
            },
          },
        },
      });

      return NextResponse.json({ message: "Deleted" });
    } catch (error) {
      return NextResponse.json({ message: "Internal server error" });
    }
  }
}
