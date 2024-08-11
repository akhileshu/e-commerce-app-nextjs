import { DeleteForm } from "./unlink-attribute-form";

type Attribute = {
  categoryId: string;
  categoryAttribute: {
    id: string;
    displayName: string;
    internalName: string;
    possibleValues: string[];
    description: string | null;
  };
};

export function AllAttributesOfACategory({
  categoryId,
  attributes,
}: {
  categoryId: string;
  attributes: Attribute[];
}) {
  // for this category render all associated attributes, functionallity to RUD

  return (
    <div className="outline-none myborder w-fit rounded-md divide-y divide-solid">
      <p>list of all associated attributes to this category</p>
      {attributes.map((attribute, index) => {
        const { id, description, displayName, internalName, possibleValues } =
          attribute.categoryAttribute;
        return (
          <div className="flex m-2" key={index}>
            <div className="flex-1">
              <div>display name : {displayName}</div>
              <div>internal name : {internalName}</div>
            </div>
            <DeleteForm
              className="flex-1"
              categoryId={categoryId}
              attributeId={id}
            />
          </div>
        );
      })}
    </div>
  );
}
