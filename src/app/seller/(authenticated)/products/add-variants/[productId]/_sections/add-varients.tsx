"use client";

import { CollapsibleComponent } from "@/app/_components/collapsible";
import { WrapWithShowError } from "@/app/_components/wrap-with-show-error";
import { AttributeCombinationsTable } from "@/app/seller/(authenticated)/products/add-variants/[productId]/_sections/attribute-combinations-table";
import { useSuccessErrorRedirectHandler } from "@/lib/handleSuccessErrorRedirect";
import React, { useEffect } from "react";
import { ProductCard } from "../../../_components/product-card";
import { getCachedProductByIdForCardView } from "../../../actions";
import { getCategoryAttributes, revalidateProductOnMOunt } from "../actions";
import { AttributeProvider } from "../context/category-attributes-context";
import { CategoryAttributes } from "./category-attributes";

interface AddVariantsProps {
  product: Awaited<ReturnType<typeof getCachedProductByIdForCardView>>;
  productId: string;
  categoryAttributes: Awaited<ReturnType<typeof getCategoryAttributes>>;
}

export const AddVariants: React.FC<AddVariantsProps> = ({
  product,
  productId,
  categoryAttributes,
}) => {
  // useEffect(() => {
  //   revalidateProductOnMOunt();
  // }, []);

  return (
    <div>
      <AttributeProvider>
        <ProductAndCategoryAttributes
          product={product}
          categoryAttributes={categoryAttributes}
        />
        <AttributeCombinationsTable productId={productId} />
      </AttributeProvider>
    </div>
  );
};

function ProductAndCategoryAttributes({
  product: { data: product, error: productError },
  categoryAttributes: {
    data: categoryAttributes,
    error: categoryAttributesError,
  },
}: {
  product: Awaited<ReturnType<typeof getCachedProductByIdForCardView>>;
  categoryAttributes: Awaited<ReturnType<typeof getCategoryAttributes>>;
}) {
  useSuccessErrorRedirectHandler({
    errors: [categoryAttributesError, productError],
  });
  return (
    <WrapWithShowError
      className="flex gap-2 flex-wrap"
      error={productError}
      data={product}
    >
      <ProductCard className="flex-1" product={product!} />
      <WrapWithShowError
        className="flex-1"
        error={categoryAttributesError}
        data={categoryAttributes}
      >
        <CollapsibleComponent
          className="w-full"
          heading="Select Available Attributes"
        >
          <CategoryAttributes categoryAttributes={categoryAttributes!} />
        </CollapsibleComponent>
      </WrapWithShowError>
    </WrapWithShowError>
  );
}
