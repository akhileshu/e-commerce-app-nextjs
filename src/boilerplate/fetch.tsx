import { WrapWithShowError } from '@/app/_components/wrap-with-show-error';
import React from 'react'

async function Fetch() {
   const productResult = await getResource();
   const { data: product, error: productsError } = productResult || {};
  return (
    <WrapWithShowError
      className="flex flex-wrap justify-between"
      error={productsError}
      data={product}
    >
      <ProductCard product={product} key={product.id} />
    </WrapWithShowError>
  );
}


export default Fetch