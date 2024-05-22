import prisma from "@/db/db";
import Main from "@/components/Homepage/Main";
import ContactUs from "@/components/ContactUs";
import { Property } from "@prisma/client";

const sortProperties = (properties: Property[]): Property[] => {
  const order = ["Trademark", "Enkewa", "Nomad"];
  return properties.sort((a, b) => {
    return (
      order.indexOf(a.name.toLowerCase()) - order.indexOf(b.name.toLowerCase())
    );
  });
};

export default async function Home() {
  let packages = await prisma.package.findMany({
    include: {
      properties: true,
      User: true,
    },
    orderBy: {
      price: "asc",
    },
  });

  packages = packages.map((p) => {
    return {
      ...p,
      properties: sortProperties(p.properties),
    };
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
