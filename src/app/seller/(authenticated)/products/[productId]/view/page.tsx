import { ContainerWithHeading } from '@/app/_components/seller-form';
import { WrapWithShowError } from '@/app/_components/wrap-with-show-error';
import { getCachedProductForSellerView } from './actions';
import Product from './sections/product';

async function page({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const productResult = await getCachedProductForSellerView(productId);
  const { data: product, error: productError } = productResult || {};
  return (
    <ContainerWithHeading className="px-0" heading="Product Info">
      <WrapWithShowError
        className=""
        error={productError}
        data={product}
      >
        <Product product={product!}/>
      </WrapWithShowError>
    </ContainerWithHeading>
  );
}

export default page