import prisma from "@/db/db";
import Main from "@/components/Homepage/Main";

export default async function Home() {
  const packages = await prisma.package.findMany({
    include: {
      properties: true,
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Main packages={packages} />
    </main>
  );
}
