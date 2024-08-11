import { getCategoryWithChildren } from "@/data-access/category";
import { Category, CategorySearchability } from "@prisma/client";

export type getCategoryWithChildrenType = {
  name: string;
  id: string;
  children: Category[];
  searchability: CategorySearchability | null;
  parent: Category | null;
};

export type parentCategoryType = Pick<Category,'name'|'id'>

export type CategoryWithChildren = Awaited<ReturnType<typeof getCategoryWithChildren>>;


