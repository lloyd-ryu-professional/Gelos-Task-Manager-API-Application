import "dotenv/config";
import { defineConfig } from "prisma/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    datasource: {
        url: process.env["DATABASE_URL"],
    },
});

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaBetterSqlite3({ url: connectionString });

const prismaConfig = new PrismaClient({ adapter });
export { prismaConfig };

// dotenv.config();
//
// // Define your local database file path string
// const databaseUrl = process.env.DATABASE_URL || 'file:./dev.db';
//
// // 1. Initialize the SQLite driver adapter wrapper
// const adapter = new PrismaBetterSqlite3({
//     url: databaseUrl
// });
//
// // 2. Pass the adapter directly into the constructor object
// export const prisma = new PrismaClient({
//     adapter
// });