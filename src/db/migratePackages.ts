// Import the Prisma Client
const { PrismaClient } = require("@prisma/client");

// Instantiate the Prisma Client
const prisma = new PrismaClient();

async function migratePackages() {
  // Fetch all users that have a package
  const users = await prisma.user.findMany({
    where: {
      packageId: {
        not: null,
      },
    },
    include: {
      package: true,
    },
  });

  // For each user, create a new record in the UserPackages relation with the same package
  for (const user of users) {
    if (user.packageId) {
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          userPackages: {
            connect: {
              id: user.packageId,
            },
          },
        },
      });
    }
  }
}

migratePackages()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
