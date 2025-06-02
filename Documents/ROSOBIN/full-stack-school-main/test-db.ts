// test-db.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log("✅ Koneksi ke Neon berhasil!");
  } catch (error) {
    console.error("❌ Gagal koneksi ke Neon:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
