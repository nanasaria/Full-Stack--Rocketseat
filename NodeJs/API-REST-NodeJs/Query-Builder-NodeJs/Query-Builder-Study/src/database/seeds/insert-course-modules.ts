import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("courses").insert([
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "Angular" },
    { name: "Node.js" },
    { name: "React Js" },
    { name: "Java" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Spring" },
    { name: "Kotlin" },
    { name: "React Native" },
    { name: "Git" },
    { name: "Docker" },
    { name: "Kubernets" },
    { name: "Terraform" },
  ]);
}
