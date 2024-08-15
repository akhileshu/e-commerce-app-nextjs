"use server";

import { getCategoryAttributesByProductId } from "@/data-access/categoryAttribute";
import { addProductVarientInDB } from "@/data-access/productVariant";
import { handleError } from "@/error-handling/wrap-with-try-catch";
import { uploadImageAndGetUrl } from "@/lib/uploadFiles";
import { stringToJSONSchema, stringToNumberSchema } from "@/lib/zod";
import { ActionSuccessBase } from "@/types/shared";
import { revalidateTag } from "next/cache";
import { z } from "zod";

const addProductVarientSchema = z.object({
  price: stringToNumberSchema.pipe(z.number().min(1).max(100000)),
  productId: z.string().min(2).max(100),
  description: z.string().min(2).max(500),
  productVariantToAttributes: stringToJSONSchema.pipe(
    z
      .object({
        categoryAttributeId: z.string().min(2).max(100),
        value: z.string().min(1).max(100),
      })
      .array()
  ),
  //todo: not able to handle multiple files at once : may need upload things
  pics: z
    .instanceof(File, { message: "Required" })
    .refine((file) => file.size <= 5000000 && file.type.startsWith("image/"), {
      message: "File size should not exceed 5MB",
    }),
  tags: stringToJSONSchema.pipe(z.string().array()),
});

export const getCategoryAttributes = handleError(async (productId: string) => {
  return await getCategoryAttributesByProductId(productId);
});


export const addProductVarient = handleError(
  async (prevState: unknown, formData: FormData) => {
    const { success, data, error } = addProductVarientSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) {
      return { formErrors: error.formErrors.fieldErrors };
    }

    // let imagePath =
    //   "https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D";
    let imagePath = await uploadImageAndGetUrl(data.pics);
    let updatedData = {
      ...data,
      pics: [imagePath],
    };

    const productVariant = await addProductVarientInDB(updatedData);
    revalidateTag("get-product-for-card-view");
    // 🐛 🚨 having a loading.tsx at /app root will cause full page reload on first call of revalidateTag()
    revalidateTag("get-products-for-card-view");

    type Success = ActionSuccessBase & {};
    const successObj: Success = {
      message: "Product Variant added successfully",
    };
    return {
      success: successObj,
    };
  }
);
