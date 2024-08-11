"use server";
import db from "@/db/db";
import { wrapWithDbTryCatch } from "@/error-handling/wrap-with-try-catch";

export const actionInDb = wrapWithDbTryCatch(
  async () => {
    await db.product.delete({ where: { id: "productId" } });
  }
);
