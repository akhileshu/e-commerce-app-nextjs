"use client";
import { getChildren } from "@/data-access/category";
import { cn } from "@/lib/utils";
import { getCategoryWithChildrenType } from "@/types/category";
import { Category } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";

function CategoryWithChildren({
  category,
  className,
}: {
  category: getCategoryWithChildrenType;
  className?: string;
}) {
  const [hoveredCategoryId, setHoveredCategoryId] = useState<string | null>(
    null
  );

  const handleCategoryHover = (categoryId: string) => {
    setHoveredCategoryId(categoryId);
  };
  const { id, children, name, parent, searchability } = category;
  return (
    <div className={cn(className, "text-sm")}>
      <>
        <div
          className="flex items-center m-2 p-2 h-9 bg-amazon-light-gray"
          onMouseEnter={() => handleCategoryHover(id)} // Enter event
          onMouseLeave={() => setHoveredCategoryId(null)} // Leave event
        >
          {name}
          {1 && (
            <CategoryActionsComponent className="ml-2" category={category} />
          )}
          {/* {hoveredCategoryId === category.id && (
              <CategoryActionsComponent className="ml-2" category={category} />
            )} */}
        </div>

        {children?.length > 0 && (
          <CategoryChildren initialCategories={category.children} />
        )}
      </>
    </div>
  );
}

const CategoryChildren = ({
  initialCategories,
  className,
}: {
  initialCategories: Category[];
  className?: string;
}) => {
  const [categories, setCategories] = useState(initialCategories);

  const loadChildren = async (category: Category) => {
    let children: Category[] =
      category.children ?? (await getChildren(category.id));
    // let children=c.map(child => {
    //   return {...child, parentName:category.name, parentId:category.id};
    // })

    setCategories((prevCategories) => {
      if (category.children) {
        return initialCategories;
      }
      const clickedCategoryWithChildren = [{ ...category, children }];
      return clickedCategoryWithChildren;
    });
  };

  return (
    <div>
      {categories.map((category, index) => (
        <div className="flex items-center ml-5" key={index}>
          <span onClick={() => loadChildren(category)}>^</span>
          <CategoryWithChildren className={className} category={category} />
        </div>
      ))}
    </div>
  );
};

const CategoryActionsComponent = ({
  category,
  className,
}: {
  category: getCategoryWithChildrenType;
  className: string;
}) => {
  const isRootCategory = (id: string) =>
    id === "67efe834-c541-48c0-8fac-28c1697c7121";
  const { name, id } = category;
  const parentCategory = { name, id };

  return (
    <div className={cn(className, "")}>
      <Link
        className="myborder rounded-sm"
        href={{
          pathname: `/admin/categories/${id}/add-children-categories`,
          query: { parentCategoryData: JSON.stringify({ name }) },
        }}
      >
        + Children
      </Link>
      <Link
        className="myborder rounded-sm"
        href={{
          pathname: `/admin/categories/${id}/brands`,
          query: { categoryData: JSON.stringify({ name }) },
        }}
      >
        brands
      </Link>
      <Link
        className="myborder rounded-sm"
        href={{
          pathname: `/admin/categories/${id}/attributes`,
          query: { categoryData: JSON.stringify({ name }) },
        }}
      >
        attributes
      </Link>
      <Link
        className="myborder rounded-sm"
        href={{
          pathname: "/manage-category",
          query: { category: JSON.stringify({ name, id }) },
        }}
      >
        details
      </Link>
    </div>
  );
};

export default CategoryWithChildren;
