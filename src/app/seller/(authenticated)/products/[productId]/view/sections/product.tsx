"use client";

import ProductPage from "@/components/product-page";
import { getProductForSellerViewFromDb } from "@/data-access/product";
import { Check, CirclePlus, Pencil, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";
import { DropdownMenuComponent } from "@/components/dropdown-menu";
import { BadgeComponent, BadgeComponentWithDelete } from "@/components/badge";
import { DialogComponent } from "@/components/dialog";
import { FormSubmitButton } from "@/components/submit-form-button";
import { Field, FieldInput, FieldLabel } from "@/app/_components/seller-form";
import { useTags } from "@/hooks/useTag";
import { testPics } from "@/lib/temporary/code";
import { useFormState } from "react-dom";
import { editProductDetails } from "../actions";
import { useSuccessErrorRedirectHandler } from "@/lib/handleSuccessErrorRedirect";
import { useDialogControl } from "@/hooks/useDialogControl";
import { useFormValues } from "../hooks/use-form-values";
import { useProductFormHandler } from "../hooks/use-product-form-handler";
import { ProductVariant } from "@prisma/client";

type Product = Awaited<ReturnType<typeof getProductForSellerViewFromDb>>;

function Product({ product }: { product: Product }) {
  return (
    <div className="m-2">
      <ImagesAndInfoSection product={product} />
      <ProductVariants variants={product.productVariants} />
    </div>
  );
}

const ProductVariants=({variants}:{variants:ProductVariant[]})=>{
  return (
    <div>
      {variants.map((v,index)=><div key={index}>{v.price}</div>)}
    </div>
  );
}
function ImagesAndInfoSection({ product }: { product: Product }) {
  const [hoverImage, setHoverImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>(product.pics[0]);

  return (
    <div className="flex rounded-md border divide-x-[1.5px] divide-gray-200">
      <ProductImages
        images={[...product.pics,...testPics]}
        hoverImage={hoverImage}
        selectedImage={selectedImage}
        onHover={setHoverImage}
        onSelect={setSelectedImage}
      />
      <div className="flex-1 flex gap-2 p-2">
        <ProductDetails product={product} />
        <EditProductForm product={product} />
      </div>
    </div>
  );
}

function ProductImages({
  images,
  hoverImage,
  selectedImage,
  onHover,
  onSelect,
}: {
  images: string[];
  hoverImage: string | null;
  selectedImage: string;
  onHover: (img: string) => void;
  onSelect: (img: string) => void;
}) {
  return (
    <div className="flex-1 flex sticky top-1 m-2">
      <div className="flex flex-col gap-1 m-1">
        {images.map((pic, index) => (
          <ImageThumbnail
            key={index}
            image={pic}
            isSelected={selectedImage === pic}
            onHover={() => onHover(pic)}
            onSelect={() => onSelect(pic)}
          />
        ))}
      </div>
      <SelectedImage image={hoverImage || selectedImage} />
    </div>
  );
}

function ImageThumbnail({
  image,
  isSelected,
  onHover,
  onSelect,
}: {
  image: string;
  isSelected: boolean;
  onHover: () => void;
  onSelect: () => void;
}) {
  return (
    <div
      className={cn(
        "size-14 relative rounded-sm border-solid border-teal-400",
        isSelected ? "border-2" : null
      )}
      onMouseEnter={onHover}
      onClick={onSelect}
    >
      <Image
        className="p-[1px] rounded-md"
        src={image}
        alt=""
        fill
        objectFit="cover"
      />
    </div>
  );
}

function SelectedImage({ image }: { image: string }) {
  return (
    <div className="relative size-96 m-2">
      <Image className="rounded-md" src={image} alt="" fill objectFit="cover" />
      <span className="absolute top-2 right-2 rounded-full p-2 bg-white">
        <DropdownMenuComponent trigger={<Pencil className="cursor-pointer" />}>
          <div>
            <p>delete image</p>
            <p>manage images</p>
          </div>
        </DropdownMenuComponent>
      </span>
    </div>
  );
}

const ProductDetails = ({ product }: { product: Product }) => {
   const {
     brand,
     category,
     name,
     pics,
     productSearchability,
     productVariants,
   } = product;
  return (
    <div className="flex flex-col gap-2">
      <p className="font-medium text-lg">{name}</p>
      <p className="text-sm">{productSearchability?.description}</p>
      <p>{`Category : ${category.name}`}</p>
      <p>{`Brand : ${brand.name}`}</p>
      <div className="flex gap-2">
        <p>{`Tags : `}</p>
        <div className="flex gap-2">
          {productSearchability?.tags.map((tag, index) => {
            return <BadgeComponent key={index} content={tag} />;
          })}
        </div>
      </div>
    </div>
  );
};

const EditProductForm = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  const {
    brand,
    category,
    name,
    pics,
    productSearchability,
    productVariants,
    id,
  } = product;
  const { dialogCloseRef, closeDialog } = useDialogControl();
  const { tags = [], description = "" } = productSearchability || {};
  const initialFormValues = { name, description };
  const { formValues, setFormValues, handleChange } =
    useFormValues(initialFormValues);

  const { formAction, formErrors } = useProductFormHandler(closeDialog);
  const handleDialogOpen = () => {
    setFormValues(initialFormValues);
    setProductTags(tags);
  };
  const {
    addProductTag,
    setProductTags,
    productTagInputRef,
    productTags,
    removeProductTag,
  } = useTags("product", tags);
  return (
    <DialogComponent
      className="min-w-[70rem]"
      triggerComponent={
        <div
          onClick={handleDialogOpen}
          className="rounded-full cursor-pointer size-10 p-2 bg-gray-300"
        >
          <Pencil />
        </div>
      }
      triggerTitle={"Edit Product Details"}
      description={"Add product varient"}
      saveTitle={"save"}
      dialogCloseRef={dialogCloseRef}
    >
      <form
        className={cn("m-2 overflow-y-auto max-h-96", className)}
        action={formAction}
      >
        <input type="hidden" name="tags" value={JSON.stringify(productTags)} />
        <input type="hidden" name="productId" value={id} />
        <Field error={formErrors?.name}>
          <FieldLabel htmlFor="name" labelText="Enter name" />
          <FieldInput
            className="w-1/2"
            onChange={handleChange}
            value={formValues.name}
            type="text"
            id="name"
            name="name"
          />
        </Field>
        <Field error={formErrors?.description}>
          <FieldLabel htmlFor="description" labelText="Enter description" />
          <textarea
            rows={5}
            onChange={handleChange}
            value={formValues.description}
            className="outline-none w-1/2 m-2 px-2 py-1 border-solid border-[1px] border-teal-400 rounded-md"
            name="description"
            id="description"
          />
        </Field>

        <div className="flex gap-2 flex-wrap">
          {productTags.map((value, valueIndex) => (
            <BadgeComponentWithDelete
              key={valueIndex}
              onDelete={() => removeProductTag(valueIndex)}
              badgeContent={value}
            />
          ))}
        </div>

        <Field error={formErrors?.tags}>
          <FieldLabel
            htmlFor="possibleValueInput"
            labelText="Add Product Tag"
          />
          <div className="relative flex items-center">
            <FieldInput
              type="text"
              id={"possibleValueInput"}
              myRef={productTagInputRef}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  addProductTag();
                }
              }}
            />
            <CirclePlus onClick={addProductTag} className="absolute right-3" />
          </div>
        </Field>

        <FormSubmitButton className="" />
      </form>
    </DialogComponent>
  );
};


export default Product;
