"use server";

import { addBrandToCategoryInDb } from "@/data-access/brand";
import { unlinkBrandFromCategoryInDB } from "@/data-access/categoryToBrand";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const addBrandToCategorySchema = z.object({
  name: z.string().min(2).max(100),
  categoryId: z.string().min(2).max(100),
  description: z.string().min(2).max(500),
});
const unlinkBrandFromCategorySchema = z.object({
  categoryId: z.string().min(2).max(100),
  brandId: z.string().min(2).max(100),
});
export async function addBrandToCategory(
  prevState: unknown,
  formData: FormData
) {
  try {
    console.log("addBrandToCategoryInDb called");
    const { success, data, error } = addBrandToCategorySchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (error) {
      return { error: error.formErrors.fieldErrors };
    }

    const rootCategory = await addBrandToCategoryInDb(data);
    revalidatePath(`/admin/categories/${data.categoryId}/brands`);
    return { isSaved: true };
  } catch (error) {
    throw error;
  }
}
export async function unlinkBrandFromCategory(
  prevState: unknown,
  formData: FormData
) {
  try {
    console.log("sa called");
    const { success, data, error } = unlinkBrandFromCategorySchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (error) {
      return { error: error.formErrors.fieldErrors };
    }

    const result = await unlinkBrandFromCategoryInDB(data);
    revalidatePath(`/admin/categories/${data.categoryId}/brands`);
    return { isUnlinked: true };
  } catch (error) {
    throw error;
  }
}
