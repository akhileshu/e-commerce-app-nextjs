import React from "react";
import CategoryBrads from "../../../../categories/[categoryId]/brands/_components/category-brands";
import { AllBrandsOfACategory } from "../../../../_shared/categories/_components/brands/get-brands-of-category";

function page({
  params,
  searchParams,
}: {
  params: { categoryName: string; categoryId: string };
  searchParams: { category: string };
}) {
  // const { categoryName, categoryId } = params;
  const { name: categoryName, id: categoryId } = JSON.parse(
    searchParams.category
  );
  console.log({ categoryName, categoryId });
  return (
    <div>
      <h1>hello from category page</h1>
      <CategoryBrads
        /* cc */ categoryId={categoryId}
        categoryName={categoryName}
      >
        <AllBrandsOfACategory /* sc */ categoryId={categoryId} />
      </CategoryBrads>
    </div>
  );
}

export default page;
