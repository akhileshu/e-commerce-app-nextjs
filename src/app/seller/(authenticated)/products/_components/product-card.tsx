"use client";

import { BadgeComponent } from "@/components/badge";
import { DropdownMenuComponent } from "@/components/dropdown-menu";
import { getProductByIdToAddVariants } from "@/data-access/product";
import { cn } from "@/lib/utils";

import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  deleteAllProductVariants,
  deleteProduct,
  deleteProductVariantById,
} from "../actions";
import { useFormState } from "react-dom";
import { FormSubmitButton } from "@/components/submit-form-button";
import { useSuccessErrorRedirectHandler } from "@/lib/handleSuccessErrorRedirect";

export function ProductCard({
  className,
  product,
}: {
  product: Awaited<ReturnType<typeof getProductByIdToAddVariants>>;
  className?: string;
}) {
  const { id, pics, name, productSearchability, productVariants } = product;

  return (
    <div
      className={cn(
        "h-52  w-[40rem] flex gap-2 border-solid border-teal-200 border-[1px] rounded-sm p-1 m-2",
        className
      )}
    >
      <div className="relative h-full flex-1">
        <Image
          src={pics[0]}
          className="rounded-md"
          alt={name}
          fill
          objectFit="cover"
        />
      </div>
      <div className="flex-1 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-500">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">{name}</p>
          <ProductDropdownComponent
            productId={id}
            variantsCount={productVariants.length}
          />
        </div>
        <p className="text-gray-500 text-sm">
          description: {productSearchability?.description}
        </p>
        <p className="my-2 text-sm">{`${productVariants.length} varients`}</p>
        <div className="divide-y-[1px] divide-gray-200 divide-solid">
          {productVariants.map((variant) => {
            return (
              <div
                className="mt-2 py-2 px-1 -mb-2 hover:bg-gray-200 rounded-sm flex justify-between"
                key={variant.id}
              >
                <div className="flex gap-1 ">
                  {variant.productVariantToAttributes.map(
                    (attribute, index) => {
                      return (
                        <BadgeComponent
                          className="px-1"
                          content={attribute.value}
                          key={index}
                        />
                      );
                    }
                  )}
                  <p className="text-sm">₹ {variant.price}</p>
                </div>
                <VariantDropdownComponent variantId={variant.id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const ProductDropdownComponent = ({
  productId,
  variantsCount,
}: {
  productId: string;
  variantsCount: number;
}) => {
  //todo : use form state for handling loading
  const [deleteProductResult, deleteProductAction] = useFormState(
    deleteProduct,
    null
  );
  const [deleteAllProductVariantsResult, deleteAllProductVariantsAction] =
    useFormState(deleteAllProductVariants, null);

  useSuccessErrorRedirectHandler({
    errors: [deleteProductResult?.error, deleteAllProductVariantsResult?.error],
  });

  return (
    <DropdownMenuComponent
      trigger={
        <EllipsisVertical
          className="cursor-pointer p-1 rounded-full hover:bg-gray-100"
          color="gray"
        />
      }
    >
      <div className="text-sm flex flex-col gap-2">
        <Link href={`/seller/products/${productId}/edit`}>edit product</Link>
        <form action={deleteProductAction}>
          <input type="hidden" name="productId" value={productId} />
          <FormSubmitButton
            variant="text"
            className="text-red-400"
            label="delete Product"
          />
        </form>

        {variantsCount ? (
          <form action={deleteAllProductVariantsAction}>
            <input type="hidden" name="productId" value={productId} />
            <FormSubmitButton
              variant="text"
              className="text-red-400"
              label="delete All variants"
            />
          </form>
        ) : null}
        <Link href={`/seller/products/add-variants/${productId}`}>
          add variants
        </Link>
        <Link href={`/seller/products/${productId}/view`}>view</Link>
      </div>
    </DropdownMenuComponent>
  );
};

const VariantDropdownComponent = ({ variantId }: { variantId: string }) => {
  const [deleteProductVariantResult, deleteProductVariantAction] = useFormState(
    deleteProductVariantById,
    null
  );
  useSuccessErrorRedirectHandler({ error: deleteProductVariantResult?.error });
  return (
    <DropdownMenuComponent
      trigger={
        <EllipsisVertical
          className="cursor-pointer p-1 rounded-full hover:bg-gray-100"
          color="gray"
        />
      }
    >
      <div className="text-sm flex flex-col gap-2">
        <Link href={""}>edit variant</Link>
        <form action={deleteProductVariantAction}>
          <input type="hidden" name="productVariantId" value={variantId} />
          <FormSubmitButton
            className="text-red-400"
            variant="text"
            label="delete variant"
          />
        </form>

        <Link href={""}>view</Link>
      </div>
    </DropdownMenuComponent>
  );
};

export const SideBySide = ({
  children,
}: {
  children: [React.ReactNode, React.ReactNode];
}) => {
  return (
    <div className="flex gap-2">
      {children.map((child, index) => (
        <div key={index} className="flex-1">
          {child}
        </div>
      ))}
    </div>
  );
};
