import { ContainerWithHeading } from "@/app/_components/seller-form";
import { getCachedProductByIdForCardView } from "../../actions";
import { AddVariants } from "./_sections/add-varients";
import { getCategoryAttributes } from "./actions";

async function page({
  params: { productId },
}: {
  params: { productId: string };
}) {

  const [product, categoryAttributes] = await Promise.all([
    getCachedProductByIdForCardView(productId),
    getCategoryAttributes(productId),
  ]);

  return (
    <div className="container">
      <ContainerWithHeading heading="Add Product Variants">
        <AddVariants
          product={product}
          productId={productId}
          categoryAttributes={categoryAttributes}
        />
      </ContainerWithHeading>
    </div>
  );
}

export default page;
