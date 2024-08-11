"use server"
import db from "@/db/db";
import { wrapWithDbTryCatch } from "@/error-handling/wrap-with-try-catch";

export const getBrandsOfACategory = wrapWithDbTryCatch(async (
    {
      categoryId,
    }: {
      categoryId: string;
    }
) => {
  const brands = await db.categoryToBrand.findMany({
    where: { categoryId },
    select: {
      brand: true,
      categoryId: true,
    },
  });
  console.log({ brands });
  return brands;
});
export const unlinkBrandFromCategoryInDB = wrapWithDbTryCatch(async (
    {
      categoryId,
      brandId,
    }: {
      categoryId: string;
      brandId: string;
    }
) => {
  console.log("inside unlinkBrandFromCategoryInDB");
  const brand = await db.categoryToBrand.deleteMany({
    where: { brandId, categoryId },
  });

  return brand;
  // Create category with nested searchability relation
});
