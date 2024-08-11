"use server";

import { addProductInDB } from "@/data-access/product";
import { handleError } from "@/error-handling/wrap-with-try-catch";
import { getSessionByRole } from "@/lib/getSessionSeller";
import { uploadImageAndGetUrl } from "@/lib/uploadFiles";
import { stringToJSONSchema } from "@/lib/zod";
import { ActionSuccessBase, userRoles } from "@/types/shared";
import { revalidateTag } from "next/cache";
import { z } from "zod";

const listAProductSchema = z.object({
  brandId: z.string().min(2).max(100),
  categoryId: z.string().min(2).max(100),
  name: z.string().min(2).max(100),
  description: z.string().min(2).max(500),
  //todo: not able to handle multiple files at once : may need upload things
  pics: z
    .instanceof(File, { message: "Required" })
    .refine((file) => file.size <= 5000000 && file.type.startsWith("image/"), {
      message: "File size should not exceed 5MB",
    }),
  tags: stringToJSONSchema.pipe(z.string().array()),
});

export const listAProduct = handleError(
  async (prevState: unknown, formData: FormData) => {
    const { success, data, error } = listAProductSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) {
      return { formErrors: error.formErrors.fieldErrors };
    }

    const session = await getSessionByRole(userRoles.seller);
    let imagePath = await uploadImageAndGetUrl(data.pics);
    let updatedData = {
      ...data,
      sellerId: session.user.id,
      pics: [imagePath],
    };

    const id = await addProductInDB(updatedData);
    //todo :revalidate tag not working properly , reloads current page
    // revalidateTag("get-products-for-card-view");

    type Success = ActionSuccessBase & {};
    const successObj: Success = {
      message: "Product added successfully",
      redirectPath: `/seller/products/add-variants/${id}`,
    };
    return {
      success: successObj,
    };
  }
);
