import ShowInfo from "@/app/_components/showInfo";
import { BadgeComponentWithDelete } from "@/components/badge";
import { DialogComponent } from "@/components/dialog";
import { FormSubmitButton } from "@/components/submit-form-button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CirclePlus, Trash } from "lucide-react";
import { useRef, useState } from "react";
import { useFormState } from "react-dom";
import {
  AttributeCombination,
  getAllPossibleCombinations,
} from "../utils/getCombinations";
import { useAttributeContext } from "../context/category-attributes-context";
import { addProductVarient } from "../actions";
import { Field, FieldInput, FieldLabel } from "@/app/_components/seller-form";
import Image from "next/image";
import { useTags } from "@/hooks/useTag";
import { useImagesPreview } from "@/hooks/useImagesPreview";
import { useSuccessErrorRedirectHandler } from "@/lib/handleSuccessErrorRedirect";
import { useDialogControl } from "@/hooks/useDialogControl";

export function AttributeCombinationsTable({
  productId,
}: {
  productId: string;
}) {
  const { attributes, updateAttributes, handleValueDelete } =
    useAttributeContext();

  const PossibleAttributeCombinations = getAllPossibleCombinations(attributes);
  const attributeTypes = PossibleAttributeCombinations[0].map(
    (attr) => attr.attributeName
  );

  console.log({ attributes, PossibleAttributeCombinations });

  const getValuesForIndex = (index: number): string[] => {
    if (index >= PossibleAttributeCombinations.length) {
      throw new Error("Index out of range");
    }
    return PossibleAttributeCombinations[index].map(
      (attribute) => attribute.attributeValue
    );
  };

  const handleAttributesCombinationDelete = (index: number) => {
    console.log({ PossibleAttributeCombinations });
    const after = PossibleAttributeCombinations.filter(
      (combination, ind) => ind !== index
    );
    console.log({ after });
  };

  if (!attributes.length)
    return (
      <ShowInfo
        info={{ message: "Please Select Attributes to Add Variants" }}
      />
    );
  return (
    <Table
      className="border-[1px] border-solid border-teal-400 m-2"
      style={{ width: "calc(100% - 16px)" }}
    >
      <TableCaption>Possible Combinations of selected Attributes</TableCaption>
      <TableHeader>
        <TableRow>
          {attributeTypes.map((type, index) => {
            return <TableHead key={index}>{type}</TableHead>;
          })}
          <TableHead>Delete</TableHead>
          <TableHead>Add varient</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PossibleAttributeCombinations.map((combination, index) => {
          const valuesForIndex = getValuesForIndex(index);
          return (
            <TableRow key={index}>
              {valuesForIndex.map((Attributevalue, ind) => {
                return (
                  <TableCell key={ind} className="font-medium">
                    {Attributevalue}
                  </TableCell>
                );
              })}
              <TableCell className="font-medium">
                <Trash
                  onClick={() => handleAttributesCombinationDelete(index)}
                />
              </TableCell>
              <TableCell className="font-medium">
                <AddVarientForm
                  productId={productId}
                  attributesCombination={combination}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

/* 
todo
product variants should have unique set of attributes
remove attribute combination row from table after product variant added successfully
table row delete functionality
in addvariantform - allow deleting attributes
*/
function AddVarientForm({
  attributesCombination,
  productId,
}: {
  attributesCombination: AttributeCombination;
  productId: string;
}) {
  const { dialogCloseRef, closeDialog } = useDialogControl();
  const {
    addProductVariantTag,
    removeProductVariantTag,
    productVariantTagInputRef,
    productVariantTags,
  } = useTags("productVariant");
  const { selectedImages, handleImageChange } = useImagesPreview();

  const productVariantToAttributes = attributesCombination.map(
    ({ attributeId, attributeValue }) => {
      return { categoryAttributeId: attributeId, value: attributeValue };
    }
  );

  const [result, formAction] = useFormState(addProductVarient, null);

  const { data, error } = result || {};
  const { formErrors, success } = data || {};
  useSuccessErrorRedirectHandler({ error: error, success: success });
  if (success) closeDialog();

  return (
    <DialogComponent
      className="min-w-[70rem]"
      triggerTitle={"Add varient"}
      description={"Add product varient"}
      saveTitle={"save"}
      dialogCloseRef={dialogCloseRef}
    >
      <div className="overflow-y-scroll h-96">
        <div className="flex gap-2">
          {productVariantToAttributes.map(
            ({ value, categoryAttributeId }, ind) => (
              <BadgeComponentWithDelete
                key={ind}
                className=""
                onDelete={() =>
                  // handleValueDelete({
                  //   attributeId: categoryAttributeId,
                  //   value,
                  // })
                  console.log(value)
                }
                badgeContent={value}
              />
            )
          )}
        </div>
        <>
          <form
            className="shadow-aesthetic m-2 p-2 rounded-md"
            action={formAction}
          >
            <input type="hidden" name="productId" value={productId} />
            <input
              type="hidden"
              name="productVariantToAttributes"
              value={JSON.stringify(productVariantToAttributes)}
            />
            <input
              type="hidden"
              name="tags"
              value={JSON.stringify(productVariantTags)}
            />
            <Field error={formErrors?.price}>
              <FieldLabel htmlFor="price" labelText="Enter price" />
              <FieldInput type="number" name="price" id="price" />
            </Field>
            <Field error={formErrors?.description}>
              <FieldLabel htmlFor="description" labelText="Enter description" />
              <textarea
                className="outline-none min-w-72 m-2 px-2 py-1 border-solid border-[1px] border-teal-400 rounded-md"
                name="description"
                id="description"
              />
            </Field>

            <div className="flex gap-2 flex-wrap">
              {productVariantTags.map((value, valueIndex) => (
                <BadgeComponentWithDelete
                  key={valueIndex}
                  onDelete={() => removeProductVariantTag(valueIndex)}
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
                  myRef={productVariantTagInputRef}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      addProductVariantTag();
                    }
                  }}
                />
                <CirclePlus
                  onClick={addProductVariantTag}
                  className="absolute right-3"
                />
              </div>
            </Field>
            <Field error={formErrors?.pics}>
              <FieldLabel htmlFor="pics" labelText="select upto 3 photos" />
              <input
                className="m-2 max-w-72"
                onChange={handleImageChange}
                type="file"
                name="pics"
                id="pics"
                accept="image/*"
                multiple
              />
            </Field>
            <Field className="flex gap-2 my-2">
              {selectedImages.map((file, index) => (
                <div key={index} className=" ">
                  <Image
                    width={100}
                    height={100}
                    objectFit="cover"
                    src={URL.createObjectURL(file)}
                    alt={`Selected ${index}`}
                    className="border-solid border-[1px] rounded-sm border-teal-400 p-2"
                  />
                </div>
              ))}
            </Field>

            <FormSubmitButton />
          </form>
        </>
      </div>
    </DialogComponent>
  );
}
