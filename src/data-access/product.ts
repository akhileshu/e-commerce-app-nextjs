"use server";
import db from "@/db/db";
import {
  NotFoundError,
  UnauthenticatedError,
} from "@/error-handling/custom-error-classes";
import { wrapWithDbTryCatch } from "@/error-handling/wrap-with-try-catch";

export const deleteProductFromDb = wrapWithDbTryCatch(
  async (productId: string) => {
    await db.product.delete({ where: { id: productId } });
  }
);

export const getAllSellerProductsFromDB = wrapWithDbTryCatch(
  async (sellerId: string) => {
    const products = await db.product.findMany({
      where: {
        sellerId,
      },
      select: {
        productVariants: {
          include: {
            productVariantToAttributes: true,
          },
        },
        id: true,
        name: true,
        productSearchability: true,
        pics: true,
        categoryId: true,
      },
    });
    return products;
  }
);

export const addProductInDB = wrapWithDbTryCatch(
  async (data: {
    brandId: string;
    categoryId: string;
    name: string;
    description: string;
    pics: string[];
    tags: string[];
    sellerId: string;
  }) => {
    const { brandId, categoryId, name, description, pics, tags, sellerId } =
      data;

    const product = await db.product.create({
      data: {
        name,
        brandId,
        categoryId,
        sellerId,
        pics,
        productSearchability: {
          create: {
            description,
            tags,
          },
        },
      },
    });
    return product.id;
  }
);

export const getProductForSellerViewFromDb = wrapWithDbTryCatch(
  async (productId: string) => {
    const product = await db.product.findUnique({
      where: { id: productId },
      select: {
        brand: true,
        category: true,
        productSearchability: true,
        pics: true,
        productVariants: {
          select: {
            pics:true,
            id: true,
            price: true,
            statusName: true,
            additionalInformations: true,
            productId: true,
            isDefaultVariant: true,
            productVariantSearchability: true,
            productVariantToAttributes:{
              select:{
                categoryAttribute:true,id:true,value:true
              }
            }
          },
        },
        name: true,
        id: true,
      },
    });
    if (!product)
      throw new NotFoundError(`Product not found with id ${productId}`);
    return product;
  }
);

export const updateProductInDb = wrapWithDbTryCatch(
  async (data: {
    name: string;
    description: string;
    tags: string[];
    productId: string;
  }) => {
    const { productId, description, name, tags } = data;
    await db.product.update({
      where: { id: productId },
      data: {
        name,
        productSearchability: {
          update: {
            description,
            tags,
          },
        },
      },
    });
  }
);
export const perform = wrapWithDbTryCatch(async () => {});

export const getProductByIdToAddVariants = wrapWithDbTryCatch(
  async (id: string) => {
    const product = await db.product.findUnique({
      where: { id },
      select: {
        productVariants: {
          include: {
            productVariantToAttributes: true,
          },
        },
        id: true,
        name: true,
        productSearchability: true,
        pics: true,
        categoryId: true,
      },
    });
    if (!product) throw new NotFoundError(`product not found with id ${id}`);
    return product;
  }
);
