"use server";
import db from "@/db/db";
import { AppError } from "@/error-handling/app-error";
import { wrapWithDbTryCatch } from "@/error-handling/wrap-with-try-catch";
import { revalidatePath } from "next/cache";

export type categoryAttribute = {
  description: string;
  id: string;
  displayName: string;
  internalName: string;
  possibleValues: string[];
};
export type addAttributeToCategoryInDBParams = {
  description: string;
  categoryId: string;
  displayName: string;
  internalName: string;
  possibleValues: string[];
};

export const addAttributeToCategoryInDB = wrapWithDbTryCatch(
  async ({
    description,
    categoryId,
    displayName,
    internalName,
    possibleValues,
  }: addAttributeToCategoryInDBParams) => {
    //check if brand with same categoryId already exists
    console.log("addBrandToCategoryInDb called");

    const newCategoryAttribute = await db.categoryAttribute.create({
      data: {
        displayName,
        internalName,
        possibleValues,
        description,
        categoryToCategoryAttributes: {
          create: { categoryId },
        },
      },
    });
    console.log({ newCategoryAttribute });
    return newCategoryAttribute;
  }
);
export const getCategoryAttributesByProductId = wrapWithDbTryCatch(
  async (productId: string) => {
    const result = await db.product.findUnique({
      where: { id: productId },
      select: { categoryId: true },
    });
    if (!result?.categoryId)
      throw new AppError({
        message: `ProductId ${productId} record does not have a category field`,
      });
    const attributes = await db.categoryToCategoryAttribute.findMany({
      where: { categoryId: result.categoryId },
      select: {
        categoryAttribute: true,
        categoryId: true,
      },
    });
    return attributes;
  }
);

export const getCategoryAttributesByCategoryId = wrapWithDbTryCatch(
  async (categoryId: string) => {
    const attributes = await db.categoryToCategoryAttribute.findMany({
      where: { categoryId },
      select: {
        categoryAttribute: true,
        categoryId: true,
      },
    });
    return attributes;
  }
);

export const unlinkAttributeFromCategoryInDB = wrapWithDbTryCatch(
  async ({
    categoryId,
    attributeId: categoryAttributeId,
  }: {
    categoryId: string;
    attributeId: string;
  }) => {
    console.log("inside unlinkBrandFromCategoryInDB");
    const attribute = await db.categoryToCategoryAttribute.deleteMany({
      where: { categoryAttributeId, categoryId },
    });

    return attribute;
    // Create category with nested searchability relation
  }
);
