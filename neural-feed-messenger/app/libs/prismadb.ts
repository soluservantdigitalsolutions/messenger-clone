import * as Prisma from "@prisma/client";

declare global {
  var prisma: Prisma.PrismaClient | undefined;
}

const client = globalThis.prisma || new Prisma.PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
