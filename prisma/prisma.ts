import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import dotenv from 'dotenv';

dotenv.config();

// Define your local database file path string
const databaseUrl = process.env.DATABASE_URL || 'file:./dev.db';

// 1. Initialize the SQLite driver adapter wrapper
const adapter = new PrismaBetterSqlite3({
    url: databaseUrl
});

// 2. Pass the adapter directly into the constructor object
export const prisma = new PrismaClient({
    adapter
});