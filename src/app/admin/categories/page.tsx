import { getCategoryWithChildren } from "@/data-access/category";
import { AddRootCategoryComponent } from "../_shared/categories/_components/add-root-category";
import CategoryWithChildren from "../_shared/categories/_components/category-with-children";

async function page() {
  const rootCategory = await getCategoryWithChildren();

  return (
    <div className="container">
      <AddRootCategoryComponent />
      <CategoryWithChildren category={rootCategory} />;
    </div>
  );
}

export default page;
