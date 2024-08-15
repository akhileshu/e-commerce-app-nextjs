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
import { BadgeComponent } from "@/components/badge";
import { cn } from "@/lib/utils";
import { ProductVariant } from "./product";
import { HoverCardComponent } from "@/components/hover-card";
import { EllipsisVertical, Image as ImageIcon, Pencil } from "lucide-react";
import { DropdownMenuComponent } from "@/components/dropdown-menu";
import Image from "next/image";
import { DialogComponent } from "@/components/dialog";

// Assuming ProductVariant type is defined elsewhere
// interface ProductVariant {
//   id: string;
//   pics: string[];
//   price: string;
//   statusName: string;
//   isDefaultVariant: boolean;
//   productVariantToAttributes: Array<{
//     categoryAttribute: { displayName: string };
//     value: string;
//   }>;
//   productVariantSearchability?: {
//     description?: string;
//     tags?: string[];
//   };
// }

const TableRowWithStyle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <TableRow className={cn("divide-x-[1px]", className)}>{children}</TableRow>
);

const VariantMore = () => {
  return (
    <DropdownMenuComponent
      trigger={
        <EllipsisVertical className="cursor-pointer bg-gray-200 rounded-full p-1" />
      }
    >
      <div className="m-2 flex flex-col gap-2">
        <ManageImagesFrom/>
        <EditVariantDetailsForm/>
      </div>
    </DropdownMenuComponent>
  );
};

const EditVariantDetailsForm=()=>{
  return (
    <DialogComponent
      className="min-w-[70rem]"
      triggerComponent={
        <div
          // onClick={handleDialogOpen}
          className="flex gap-2 items-center text-sm cursor-pointer"
        >
          <ImageIcon size={20} className="" />
          <span>
            {" "}
            <p className="text-sm">manage images</p>
          </span>
        </div>
      }
      triggerText={"Edit Details"}
      description={"Add product varient"}
      saveTitle={"save"}
      // dialogCloseRef={dialogCloseRef}
    >
      <form action=""></form>
    </DialogComponent>
  );
}

const ManageImagesFrom=()=>{
  return (
    <DialogComponent
      className="min-w-[70rem]"
      triggerComponent={
        <div
          // onClick={handleDialogOpen}
          className="flex gap-2 items-center text-sm cursor-pointer"
        >
          <Pencil size={20} className="" /> <span>Edit Details</span>
        </div>
      }
      triggerText={"Edit Details"}
      description={"Add product varient"}
      saveTitle={"save"}
      // dialogCloseRef={dialogCloseRef}
    >
      <form action=""></form>
    </DialogComponent>
  );
}

export default function ProductVariantsTable({
  variants,
  className,
}: {
  variants: ProductVariant[];
  className?: string;
}) {
  // Utility to render table cells
  const renderTableCells = (
    key: keyof ProductVariant,
    formatter?: (value: any, variant: ProductVariant) => React.ReactNode
  ) =>
    variants.map((variant) => (
      <TableCell key={variant.id}>
        {formatter ? formatter(variant[key], variant) : String(variant[key])}
      </TableCell>
    ));

  // Rendering product attributes
  const renderAttributes = (variant: ProductVariant) => (
    <div>
      {variant.productVariantToAttributes.map((attribute, index) => (
        <div key={index}>
          {`${attribute.categoryAttribute.displayName} : ${attribute.value}`}
        </div>
      ))}
    </div>
  );

  // Rendering tags
  const renderTags = (tags: string[] | undefined) =>
    tags && tags.length ? (
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <BadgeComponent content={tag} key={index} />
        ))}
      </div>
    ) : (
      "no tags"
    );

  return (
    <Table className={cn(className)}>
      <TableHeader>
        <TableRowWithStyle>
          <TableHead>Feature</TableHead>
          {variants.map((variant) => (
            <TableHead className="" key={variant.id}>
              <div className="flex gap-2 items-center">
                <Image
                  className="m-2"
                  alt="variant"
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                  src={variant.pics[0]}
                />
                <VariantMore />
              </div>
            </TableHead>
          ))}
        </TableRowWithStyle>
      </TableHeader>
      <TableBody></TableBody>
      <TableFooter className="divide-y-[1px]">
        <TableRowWithStyle>
          <TableCell>Price</TableCell>
          {renderTableCells("price")}
        </TableRowWithStyle>
        <TableRowWithStyle>
          <TableCell>Status</TableCell>
          {renderTableCells("statusName")}
        </TableRowWithStyle>
        <TableRowWithStyle>
          <TableCell>Default Variant</TableCell>
          {renderTableCells("isDefaultVariant", (value) =>
            value ? value : "false"
          )}
        </TableRowWithStyle>
        <TableRowWithStyle>
          <TableCell>Attributes</TableCell>
          {variants.map((variant) => (
            <TableCell key={variant.id}>{renderAttributes(variant)}</TableCell>
          ))}
        </TableRowWithStyle>
        <TableRowWithStyle>
          <TableCell>Description</TableCell>
          {variants.map((variant) => {
            const description =
              variant.productVariantSearchability?.description ||
              "No description";
            return <TableCell key={variant.id}>{description}</TableCell>;
          })}
        </TableRowWithStyle>
        <TableRowWithStyle>
          <TableCell>Tags</TableCell>
          {variants.map((variant) => {
            const tags = variant.productVariantSearchability?.tags;
            return <TableCell key={variant.id}>{renderTags(tags)}</TableCell>;
          })}
        </TableRowWithStyle>
      </TableFooter>
    </Table>
  );
}
