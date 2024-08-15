  import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReactNode } from "react";

import { BadgeComponentWithDelete } from "@/components/badge";
import { cn } from "@/lib/utils";
import { CategoryAttribute } from "@prisma/client";
import { Plus } from "lucide-react";
import {
  useAttributeContext
} from "../context/category-attributes-context";

export function CategoryAttributes({
  categoryAttributes,
}: {
  categoryAttributes: {
    categoryId: string;
    categoryAttribute: CategoryAttribute;
  }[];
}) {
  const { attributes, updateAttributes, handleValueDelete } =
    useAttributeContext();
  return (
    <div className="border-solid border-teal-400 border-[1px] rounded-sm p-1 m-2">
      <CategoryAttributesTable>
        {categoryAttributes.map(({ categoryAttribute, categoryId }) => {
          const { description, displayName, id, internalName, possibleValues } =
            categoryAttribute;
          return (
            <TableRow className="" key={id}>
              <TableCell className="w-2/3 p-3">
                <AttributeDetail field="Display Name" value={displayName} />
                <AttributeDetail field="Internal Name" value={internalName} />
                {description ? (
                  <AttributeDetail field="description" value={description} />
                ) : null}
              </TableCell>
              <TableCell className="">
                <div className="flex gap-2">
                  {possibleValues.map((value, index) => {
                    const isValueSelected = attributes.some(
                      (attribute) =>
                        attribute.attributeId === id &&
                        attribute.availableIn.includes(value)
                    );
                    return (
                      <div
                        className={cn(
                          isValueSelected
                            ? ""
                            : "border-solid border-[1px] border-teal-400 p-1 rounded-md",
                          "cursor-pointer"
                        )}
                        key={index}
                      >
                        {isValueSelected ? (
                          <BadgeComponentWithDelete
                            className=""
                            onDelete={() =>
                              handleValueDelete({
                                attributeId: id,
                                value,
                              })
                            }
                            badgeContent={value}
                          />
                        ) : (
                          <div className="flex justify-between gap-2">
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
              </TableCell>
            </TableRow>
          );
        })}
      </CategoryAttributesTable>
    </div>
  );
}

function AttributeDetail({ field, value }: { field: string; value: string }) {
  return (
    <div className="">
      <span className="font-bold mr-2 inline-block min-w-28">{field}</span>
      <span>{value}</span>
    </div>
  );
}

function CategoryAttributesTable({children:tableBodyContent}:{children:ReactNode}) {
  return (
    <Table>
      <TableCaption>Select Attributes to add product variants</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Attribute Details</TableHead>
          <TableHead className="text-right">
            Attribute Possible values
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{tableBodyContent}</TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
