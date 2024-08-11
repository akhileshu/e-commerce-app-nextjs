"use server";
import db from "@/db/db";
import { wrapWithDbTryCatch } from "@/error-handling/wrap-with-try-catch";

export const addBrandToCategoryInDb = wrapWithDbTryCatch(
  async ({
    name,
    description,
    categoryId,
  }: {
    name: string;
    categoryId: string;
    description: string;
  }) => {
    const newBrand = await db.brand.create({
      data: {
        name,
        description,
        categoryToBrands: {
          create: { categoryId },
        },
      },
    });
    console.log(newBrand);
    return newBrand;
  }
);
