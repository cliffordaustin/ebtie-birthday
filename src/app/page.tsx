import prisma from "@/db/db";
import Main from "@/components/Homepage/Main";
import { Button } from "@nextui-org/react";
import ContactUs from "@/components/ContactUs";

export default async function Home() {
  const packages = await prisma.package.findMany({
    include: {
      properties: true,
    },
    orderBy: {
      price: "asc",
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-white z-[50] sticky top-0 left-0 right-0 w-full">
        <ContactUs></ContactUs>
      </div>
      <Main packages={packages} />
    </main>
  );
}
