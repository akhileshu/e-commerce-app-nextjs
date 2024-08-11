"use server";
import db from "@/db/db";
import { wrapWithDbTryCatch } from "@/error-handling/wrap-with-try-catch";

// export wrapWithDbTryCatch(async function getAllSellerProductsFromDB() {
//   const session = await getSessionSeller();
//   const { id } = session.user;
//   const products = await db.product.findMany({
//     where: {
//       sellerId: id,
//     },
//   });
//   return products;
// }

export const addProductVarientInDB = wrapWithDbTryCatch(
  async (data: {
    price: number;
    productId: string;
    description: string;
    productVariantToAttributes: {
      value: string;
      categoryAttributeId: string;
    }[];
    pics: string[];
    tags: string[];
  }) => {
    const {
      price,
      productId,
      productVariantToAttributes,
      description,
      pics,
      tags,
    } = data;

    const product = await db.productVariant.create({
      data: {
        price,
        pics,
        productId,
        productVariantToAttributes: {
          create: productVariantToAttributes,
        },
        productVariantSearchability: {
          create: {
            description,
            tags,
          },
        },
      },
      select: {
        productVariantToAttributes: true,
        product: true,
      },
    });
    return product;
  }
);

export const deleteProductVariantFromDb = wrapWithDbTryCatch(
  async (variantId: string) => {
    await db.productVariant.delete({ where: { id: variantId } });
  }
);

export const deleteAllProductVariantsFromDb = wrapWithDbTryCatch(
  async (productId: string) => {
    await db.productVariant.deleteMany({ where: { productId } });
  }
);
