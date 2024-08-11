"use server";

import {
  addAttributeToCategoryInDB,
  unlinkAttributeFromCategoryInDB,
} from "@/data-access/categoryAttribute";
import { stringToJSONSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { z } from "zod";



const addAttributeToCategorySchema = z.object({
  displayName: z.string().min(2).max(100),
  internalName: z.string().min(2).max(100),
  possibleValues: stringToJSONSchema.pipe(z.string().array()),
  categoryId: z.string().min(2).max(100),
  description: z.string().min(2).max(500),
});
const unlinkAttributeFromCategorySchema = z.object({
  categoryId: z.string().min(2).max(100),
  attributeId: z.string().min(2).max(100),
});
export async function addAttributeToCategory(
  prevState: unknown,
  formData: FormData
) {
  try {
    console.log("addBrandToCategoryInDb called");
    const { success, data, error } = addAttributeToCategorySchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (error) {
      return { error: error.formErrors.fieldErrors };
    }

    const newCategoryAttribute = await addAttributeToCategoryInDB(data);
    revalidatePath(`/admin/categories/${data.categoryId}/attributes`);
    return { isSaved: true };
  } catch (error) {
    throw error;
  }
}
export async function unlinkAttributeFromCategory(
  prevState: unknown,
  formData: FormData
) {
  try {
    console.log("sa called");
    const { success, data, error } =
      unlinkAttributeFromCategorySchema.safeParse(
        Object.fromEntries(formData.entries())
      );

    if (error) {
      return { error: error.formErrors.fieldErrors };
    }

    const result = await unlinkAttributeFromCategoryInDB(data);
    revalidatePath(`/admin/categories/${data.categoryId}/attributes`);
    return { isUnlinked: true };
  } catch (error) {
    throw error;
  }
}
