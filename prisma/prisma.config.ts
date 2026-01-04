import "dotenv/config";
import path from "node:path";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  // The main entry for your schema
  schema: path.join(__dirname, "schema.prisma"),

  // Where migrations should be generated
  migrations: {
    path: path.join(__dirname, "migrations"),
  },

  // The database URL
  datasource: {
    url: env("DATABASE_URL"),
  },
});
