"use server";

import {
  getProductForSellerViewFromDb,
  updateProductInDb,
} from "@/data-access/product";
import { handleError } from "@/error-handling/wrap-with-try-catch";
import { stringToJSONSchema } from "@/lib/zod";
import { ActionSuccessBase } from "@/types/shared";
import { revalidateTag, unstable_cache } from "next/cache";
import { z } from "zod";

export const getCachedProductForSellerView = unstable_cache(
  handleError(async (productId: string) => {
    return await getProductForSellerViewFromDb(productId);
  }),
  ["product"],
  { tags: ["get-product-for-seller-view"] }
);

const editProductSchema = z.object({
  tags: stringToJSONSchema.pipe(z.string().array()),
  productId: z.string().min(2).max(100),
  name: z.string().min(2).max(100),
  description: z.string().min(2).max(500),
});

export const editProductDetails = handleError(
  async (prevState: unknown, formData: FormData) => {
    const { success, data, error } = editProductSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) {
      return { formErrors: error.formErrors.fieldErrors };
    }
    await updateProductInDb(data);
    revalidateTag("get-product-for-seller-view");
    type Success = ActionSuccessBase & {};
    const successObj: Success = {
      message: "successfully done",
    };
    return {
      success: successObj,
    };
  }
);
