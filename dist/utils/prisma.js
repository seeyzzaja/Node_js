import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import Env from "#utils/env";
const pool = new Pool({ connectionString: Env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
export default prisma;
//# sourceMappingURL=prisma.js.map