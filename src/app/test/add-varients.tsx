"use client";

import { AttributeCombinationsTable } from "@/app/seller/(authenticated)/products/add-variants/[productId]/_sections/attribute-combinations-table";
import { BadgeComponentWithDelete } from "@/components/badge";
import { getCategoryAttributesByProductId } from "@/data-access/categoryAttribute";
import { cn } from "@/lib/utils";
import { CategoryAttribute } from "@prisma/client";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import {
  AttributeProvider,
  useAttributeContext,
} from "../../../hooks/useAttributeContext";
import { revalidateTag } from "next/cache";

type AddVariantsProps = {
  categoryAttributes: Awaited<
    ReturnType<typeof getCategoryAttributesByProductId>
  >;
  productId: string;
};

const AddVariants: React.FC<AddVariantsProps> = ({
  categoryAttributes,
  productId,
}) => {
  const [submitAttributes, setSubmitAttributes] = useState(false);

  return (
    <AttributeProvider>
      <RenderCategoryAttributes
        setSbmitAttributes={() => setSubmitAttributes(true)}
        categoryAttributes={categoryAttributes}
      />
      {submitAttributes ? (
        <AttributeCombinationsTable productId={productId} />
      ) : (
        <button
          className="myborder"
          onClick={() => {
            revalidateTag("number");
          }}
        >
          revalidae number
        </button>
      )}
    </AttributeProvider>
  );
};

export default AddVariants;

function RenderCategoryAttributes({
  categoryAttributes,
  setSbmitAttributes,
}: {
  setSbmitAttributes: () => void;
  categoryAttributes: {
    categoryId: string;
    categoryAttribute: CategoryAttribute;
  }[];
}) {
  const { attributes, updateAttributes, handleValueDelete } =
    useAttributeContext();
  return (
    <div>
      {categoryAttributes.map(({ categoryAttribute, categoryId }) => {
        const { description, displayName, id, internalName, possibleValues } =
          categoryAttribute;
        return (
          <div className="flex gap-2" key={id}>
            <h4>{displayName}</h4>
            <p>{internalName}</p>
            <p>{description}</p>
            <div>
              <p>possible values:</p>
              {possibleValues.map((value, index) => {
                const isValueSelected = attributes.some(
                  (attribute) =>
                    attribute.attributeId === id &&
                    attribute.availableIn.includes(value)
                );
                return (
                  <div
                    className={cn(
                      isValueSelected ? "" : "myborder rounded-md",
                      "cursor-pointer"
                    )}
                    key={index}
                  >
                    {isValueSelected ? (
                      <BadgeComponentWithDelete
                        onDelete={() =>
                          handleValueDelete({
                            attributeId: id,
                            value,
                          })
                        }
                        badgeContent={value}
                      />
                    ) : (
                      <div className="flex justify-between">
                        {value}{" "}
                        <Plus
                          onClick={() => {
                            updateAttributes({
                              attributeName: displayName,
                              attributeId: id,
                              value,
                            });
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {attributes.length ? (
        <button onClick={setSbmitAttributes} className="myborder rounded-md">
          submit attributes
        </button>
      ) : null}
    </div>
  );
}
