{
  /*
     <Link
  className="myborder rounded-sm"
  // href={`/admin/brands/category-brands/${name}/${id}`}
  href={{
    pathname: `/admin/brands/category-brands/${name}/${id}`,
    query: { category: JSON.stringify({ name, id }) },
  }}
>
  brands
</Link>;

function page({
  params,
  searchParams,
}: {
  params: { categoryName: string; categoryId: string };
  searchParams: { category:string };
}) {
  // const { categoryName, categoryId } = params;
  const { name : categoryName, id : categoryId } = JSON.parse(searchParams.category);
  console.log({ categoryName, categoryId }); 
  






  ==========================
  const productResult = await getCachedProduct(productId);
  const isErrorProductResult = isErrorResult(productResult);
  let product = !isErrorProductResult ? productResult : null;
  let errorToast: JSX.Element | null = null;


 if (isErrorProductResult) {
    console.error({ error: productResult.error.message });
    errorToast = (
      <ServerToast
        type="error"
        message={productResult.error.message}
        description={productResult.error.name}
      />
    );
  }

=========================================
async function page({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const productResult = await getCachedProduct(productId);
  let isError = isErrorResult(productResult);
  let product = !isError ? productResult : null;

  if (!product) return <ShowError result={productResult} />;
  const categoryAttributesResult = await getCategoryAttributes(productId);

  isError = isErrorResult(categoryAttributesResult);
  let categoryAttributes = !isError ? categoryAttributesResult : null;
  if (!categoryAttributes) return <ShowError result={categoryAttributesResult} />;
  return (
    <div>
        <RenderProduct product={product!} />
        <AddVariants
          productId={productId}
          categoryAttributes={categoryAttributes}
        />
    </div>
  );
}
========================================================

// Higher-order function for wrapping database requests
export function wrapWithDbTryCatch<T extends (...args: any[]) => Promise<any>>(
  fn: T
): T {
  return (async (...args: Parameters<T>): Promise<ReturnType<T>> => {
    try {
      return await fn(...args);
    } catch (error) {
      throwDbRequestError(error);
      // Add an explicit return statement after throwing an error
      return undefined as unknown as ReturnType<T>;
    }
  }) as T;
}




  */
}