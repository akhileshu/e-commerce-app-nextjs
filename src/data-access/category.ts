"use server";
import db from "@/db/db";
import { wrapWithDbTryCatch } from "@/error-handling/wrap-with-try-catch";

export const getChildren = wrapWithDbTryCatch(async (parentId?: string) => {
  const rcId = parentId || (await getRootCategoryId());
  const categories = await db.category.findMany({
    where: { parentId: rcId },
    select: {
      name: true,
      parent: true,
      id: true,
      searchability: true,
    },
  });

  console.log(categories);

  return categories;
});

export const getRootCategoryId = wrapWithDbTryCatch(async () => {
  const rootCategory = await db.category.findFirst({
    where: { parent: null },
    select: { id: true },
  });
  if (rootCategory?.id) return rootCategory.id;
});

const getRootCategory = wrapWithDbTryCatch(async () => {
  const rootCategory = await db.category.findFirst({
    where: { parent: null },
  });
  return rootCategory;
});

export type addCategoryChildrenInDbParamType = {
  categories: {
    name: string;
    slug: string;
    metadata: string | null;
    description: string;
    tags?: string[] | undefined;
  }[];
  parentCategoryId: string;
};
export const addCategoryChildrenInDb = wrapWithDbTryCatch(
  async (data: addCategoryChildrenInDbParamType) => {
    const parentId = data.parentCategoryId;
    for (const c of data.categories) {
      const { name, slug, description, metadata, tags } = c;
      const searchabilityData = { description, metadata, tags };

      // Create category with nested searchability relation
      await db.category.create({
        data: {
          name,
          slug: name, // Consider changing this to slug if intended
          parentId,
          searchability: {
            create: searchabilityData,
          },
        },
      });
    }
  }
);

export const getCategoryWithChildren = wrapWithDbTryCatch(
  async (categoryId?: string) => {
    const rcId = categoryId || (await getRootCategoryId());
    const category = await db.category.findUnique({
      where: { id: rcId },
      select: {
        name: true,
        parent: true,
        id: true,
        children: true,
        searchability: true,
      },
    });
    return category;
  }
);

export const addRootCategoryInDb = wrapWithDbTryCatch(
  wrapWithDbTryCatch(
    async (
      data: {
        name: string;
        slug: string;
      } & {
        metadata: string | null;
        description: string;
        tags?: string[] | undefined;
      }
    ) => {
      const { name, slug, description, metadata, tags } = data;
      const searchabilityData = { description, metadata, tags };

      await db.category.deleteMany({ where: {} });

      const newCategory = await db.category.create({
        data: {
          name,
          slug,
          searchability: {
            create: searchabilityData,
          },
        },
      });

      return newCategory;
    }
  )
);
