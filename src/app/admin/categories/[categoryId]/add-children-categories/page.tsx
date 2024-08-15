"use client";
import { CircleArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { AddChildrenCategoryCount } from "../../../_shared/categories/_components/add-children-categories/add-count";
import { AddCategoriesComponent } from "../../../_shared/categories/_components/add-children-categories/add-categories";

export default function AddCategoriesPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const { categoryId } = params;
  const searchParams = useSearchParams();

  const { name } = JSON.parse(searchParams.get("parentCategoryData") as string);
  const parentCategory = { id: categoryId, name: name };

  const [count, setCount] = useState<number>(1);
  function handleSetCount(n: number) {
    setCount(n);
  }

  return (
    <div className="container">
      <AddChildrenCategoryCount
        handleSetCount={handleSetCount}
        parentCategoryName={parentCategory.name}
      />
      <AddCategoriesComponent count={count} parentCategory={parentCategory} />
    </div>
  );
}
