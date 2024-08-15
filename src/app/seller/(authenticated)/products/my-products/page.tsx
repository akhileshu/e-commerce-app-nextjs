import { ContainerWithHeading } from "@/app/_components/seller-form";
import { WrapWithShowError } from "@/app/_components/wrap-with-show-error";
import { getSessionByRole } from "@/lib/getSessionSeller";
import { userRoles } from "@/types/shared";
import { ProductCard } from "../_components/product-card";
import { getCachedProductsBySellerIdForCardView } from "../actions";

export default async function AllSellerProducts() {
  const seller = await getSessionByRole(userRoles.seller);
  const productResults = await getCachedProductsBySellerIdForCardView(
    seller.user.id
  );
  const { data: products, error: productsError } = productResults || {};
  return (
    <div className="container">
      <ContainerWithHeading className="" heading="My listed Products">
        <WrapWithShowError
          className="flex flex-wrap justify-between"
          error={productsError}
          data={products}
        >
          {products?.map((product, index) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </WrapWithShowError>
      </ContainerWithHeading>
    </div>
  );
}
