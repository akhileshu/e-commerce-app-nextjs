import { DeleteForm } from "./unlink-brand-form";

export function AllBrandsOfACategory({
  categoryId,
  brands,
}: {
  categoryId: string;
  brands: {
    categoryId: string;
    brand: {
      id: string;
      name: string;
      description: string | null;
      createdAt: Date;
      updatedAt: Date;
    };
  }[];
}) {
  // for this category render all associated brands, functionallity to RUD

  return (
    <div className="outline-none myborder w-fit rounded-md divide-y divide-solid">
      <p>list of all associated brands to this category</p>
      {brands.map((brand, index) => (
        <div className="m-2 flex" key={index}>
          <div className="flex-1"> {brand.brand.name}</div>
          <DeleteForm
            className="flex-1"
            categoryId={categoryId}
            brandId={brand.brand.id}
          />
        </div>
      ))}
    </div>
  );
}
