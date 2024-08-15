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
      <WrapWithShowError className="container" error={productError} data={product}>
        <Product product={product!} />
      </WrapWithShowError>
  );
}

export default page