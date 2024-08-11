import { createContext, ReactNode, useContext, useState } from "react";

export interface Attribute {
  attributeId: string;
  attributeName: string;
  availableIn: string[];
}

interface AttributeContextProps {
  attributes: Attribute[];
  updateAttributes: ({
    attributeId,
    attributeName,
    value,
  }: {
    attributeId: string;
    attributeName: string;
    value: string;
  }) => void;
  handleValueDelete: ({
    attributeId,
    value,
  }: {
    attributeId: string;
    value: string;
  }) => void;
}

const AttributeContext = createContext<AttributeContextProps | undefined>(
  undefined
);

export const useAttributeContext = () => {
  const context = useContext(AttributeContext);
  if (!context) {
    throw new Error(
      "useAttributeContext must be used within an AttributeProvider"
    );
  }
  return context;
};

export const AttributeProvider = ({ children }: { children: ReactNode }) => {
  const [attributes, setAttributes] = useState<Attribute[]>([]);

  const updateAttributes = ({
    attributeId,
    attributeName,
    value,
  }: {
    attributeId: string;
    attributeName: string;
    value: string;
  }) => {
    setAttributes((prev) => {
      const attributeExists = prev.find(
        (attribute) => attribute.attributeId === attributeId
      );

      if (attributeExists) {
        return prev.map((attribute) =>
          attribute.attributeId === attributeId
            ? {
                ...attribute,
                availableIn: [...attribute.availableIn, value],
              }
            : attribute
        );
      } else {
        return [
          ...prev,
          {
            attributeId,
            attributeName,
            availableIn: [value],
          },
        ];
      }
    });
  };

  const handleValueDelete = ({
    attributeId,
    value,
  }: {
    attributeId: string;
    value: string;
  }) => {
    setAttributes(
      (prev) =>
        prev
          .map((attribute) => {
            const { attributeId, availableIn } = attribute;
            const hasSingleValue =
              attributeId === attributeId &&
              availableIn.length === 1 &&
              availableIn[0] === value;

            if (hasSingleValue) {
              return null; // Mark for removal
            }

            if (attributeId === attributeId) {
              return {
                ...attribute,
                availableIn: availableIn.filter((v) => v !== value),
              };
            }

            return attribute;
          })
          .filter((attribute) => attribute !== null) as Attribute[]
    );
  };

  return (
    <AttributeContext.Provider
      value={{ attributes, updateAttributes, handleValueDelete }}
    >
      {children}
    </AttributeContext.Provider>
  );
};
