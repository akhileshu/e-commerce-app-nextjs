import React from "react";
import { AddBrandToCategory } from "../../../_shared/categories/_components/brands/add-brand-to-category";
import { AllBrandsOfACategory } from "../../../_shared/categories/_components/brands/get-brands-of-category";
import { getBrandsOfACategory } from "@/data-access/categoryToBrand";
async function page({
  params,
  searchParams,
}: {
  params: { categoryId: string };
  searchParams: { categoryData: string };
}) {
  const { categoryId } = params;
  const { name: categoryName } = JSON.parse(searchParams.categoryData);
  const brands = await getBrandsOfACategory({ categoryId });

  return (
    <div>
      <p>category : {categoryName}</p>
      <AddBrandToCategory categoryId={categoryId} />
      <AllBrandsOfACategory brands={brands} categoryId={categoryId} />
    </div>
  );
}

export default page;
