import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Michael",
        email: "michael@gmail.com",
      },
      {
        name: "Sophia",
        email: "sophia@gmail.com",
      },
      {
        name: "Lucas",
        email: "lucas@gmail.com",
      },
      {
        name: "Isabella",
        email: "isabella@gmail.com",
      },
      {
        name: "Gabriel",
        email: "gabriel@gmail.com",
      },
      {
        name: "Valentina",
        email: "valentina@gmail.com",
      },
      {
        name: "Mateus",
        email: "mateus@gmail.com",
      },
      {
        name: "Laura",
        email: "laura@gmail.com",
      },
      {
        name: "Enzo",
        email: "enzo@gmail.com",
      },
      {
        name: "Helena",
        email: "helena@gmail.com",
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
