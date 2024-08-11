"use server";
import { z } from "zod";

import { revalidatePath } from "next/cache";
import { addRootCategoryInDb } from "@/data-access/category";
import { stringToJSONSchema } from "@/lib/zod";


const searchabilityDataSchema = z.object({
  metadata: z.string().nullable(),
  description: z.string().min(2).max(500),
  tags: stringToJSONSchema.pipe(z.string().array().optional()),
});

const categorySchema = z.object({
  name: z.string().min(2).max(100),
  slug: z.string().min(2).max(100),
});

const addRootCategorySchema = categorySchema.and(searchabilityDataSchema);

/*

const some = z.object({
  name: z.string().min(2).max(100),
  slug: z.string().min(2).max(100),
  metadata: z.string().nullable(),
  description: z.string().min(2).max(500),
  tags: z.string().array().optional(),
});

export type addRootCategorySchemaType = z.infer<typeof addRootCategorySchema>;

const addChildrenCategorySchema = z.object({
  categories: stringToJSONSchema.pipe(some.array()),
  parentCategoryId: z.string(),
});



async function DeleteCategory(categoryId: string) {
  try {
    // Fetch the category to ensure it exists
    const category = await db.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      throw new Error(`Category with ID ${categoryId} not found.`);
    }

    // Delete related entities (cascade onDelete ensures this)
    // await db.categoryToBrand.deleteMany({ where: { categoryId } });
    // await db.categoryToCategoryAttribute.deleteMany({ where: { categoryId } });
    // await db.product.deleteMany({ where: { categoryId } });

    // Finally, delete the category itself
    await db.category.delete({ where: { id: categoryId } });

    return { message: `Category with ID ${categoryId} deleted successfully.` };
  } catch (error) {
    throw error; // Re-throw for proper error handling
  }
}

// async function renameCategory(categoryId, newName, newSlug) {
//   try {
//     // Validate required fields (newName)
//     if (!newName) {
//       throw new Error("New name is a required field for renaming a category.");
//     }

//     // Check for unique slug before update
//     const existingCategory = await db.category.findUnique({
//       where: { slug: newSlug },
//     });
//     if (existingCategory && existingCategory.id !== categoryId) {
//       throw new Error(`A category with the slug "${newSlug}" already exists.`);
//     }

//     const updatedCategory = await db.category.update({
//       where: { id: categoryId },
//       data: {
//         name: newName,
//         slug: newSlug,
//       },
//     });

//     return updatedCategory;
//   } catch (error) {
//     throw error; // Re-throw for proper error handling
//   }
// }

// async function addCategorySiblings(categoryId, name, slug, searchabilityData) {
//   try {
//     // Validate required fields (name, slug) and sibling existence
//     if (!name || !slug || !categoryId) {
//       throw new Error('Name, Slug, and Category ID are required fields for creating a sibling category.');

function addCategorySibblings() {}
function getCategorySibblings() {}
function getCategoryChildren() {}

function addParentCategory() {}

*/
export async function addRootCategory(prevState: unknown, formData: FormData) {
  try {
    const { success, data, error } = addRootCategorySchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (error) {
      return { error: error.formErrors.fieldErrors };
      // return error.formErrors.fieldErrors;
    }

    console.log(data);
    const rootCategory = addRootCategoryInDb(data);

    revalidatePath("admin/categories");
    // revalidatePath("/products");
    return { isSaved: true };
    // return newCategory;
  } catch (error) {
    throw error; // Re-throw for proper error handling
  }
}
