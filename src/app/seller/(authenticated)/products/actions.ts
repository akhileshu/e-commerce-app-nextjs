"use server";

import {
  deleteProductFromDb,
  getAllSellerProductsFromDB,
  getProductByIdToAddVariants,
} from "@/data-access/product";
import {
  deleteAllProductVariantsFromDb,
  deleteProductVariantFromDb,
} from "@/data-access/productVariant";
import { handleError } from "@/error-handling/wrap-with-try-catch";
import { revalidateTag, unstable_cache } from "next/cache";
import { z } from "zod";

const hasProductIdSchema = z.object({
  productId: z.string().min(2).max(100),
});
const hasProductVariantIdSchema = z.object({
  productVariantId: z.string().min(2).max(100),
});

export const getCachedProductByIdForCardView = unstable_cache(
  handleError(async (productId) => {
    return await getProductByIdToAddVariants(productId);
  }),
  ["product"],
  { tags: ["get-product-for-card-view"] }
);

export const getCachedProductsBySellerIdForCardView = unstable_cache(
  handleError(async (sellerId) => {
    return await getAllSellerProductsFromDB(sellerId);
  }),
  ["products"],
  { tags: ["get-products-for-card-view"] }
);

export const deleteProductVariantById = handleError(
  async (prevState: unknown, formData: FormData) => {
    const { success, data, error } = hasProductVariantIdSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) {
      return { formErrors: error.formErrors.fieldErrors };
    }
    await deleteProductVariantFromDb(data.productVariantId);
    revalidateTag("get-product-for-card-view");
    revalidateTag("get-products-for-card-view");
  }
);
export const deleteProduct = handleError(
  async (prevState: unknown, formData: FormData) => {
    const { success, data, error } = hasProductIdSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) {
      return { formErrors: error.formErrors.fieldErrors };
    }
    await deleteProductFromDb(data.productId);

    revalidateTag("get-product-for-card-view");
    revalidateTag("get-products-for-card-view");
  }
);
export const deleteAllProductVariants = handleError(
  async (prevState: unknown, formData: FormData) => {
    const { success, data, error } = hasProductIdSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) {
      return { formErrors: error.formErrors.fieldErrors };
    }
    await deleteAllProductVariantsFromDb(data.productId);
    revalidateTag("get-product-for-card-view");
    revalidateTag("get-products-for-card-view");
  }
);
