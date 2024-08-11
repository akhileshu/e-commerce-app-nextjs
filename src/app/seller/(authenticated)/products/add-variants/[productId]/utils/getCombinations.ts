import { Attribute } from "../context/category-attributes-context";

export type AttributeCombination = {
  attributeName: string;
  attributeValue:string;
  attributeId: string;
}[];

function cartesianProduct<T>(arrays: T[][]): T[][] {
  return arrays.reduce<T[][]>(
    (acc, curr) => acc.flatMap((prev) => curr.map((next) => [...prev, next])),
    [[]]
  );
}

export function getAllPossibleCombinations(attributes: Attribute[]) {
  const attributeValues = attributes.map((attr) => attr.availableIn);
  const combinations = cartesianProduct(attributeValues);

  const formattedCombinations: AttributeCombination[] = combinations.map(
    (combination) => {
      return combination.map((attributeValue, index) => {
        const attributeName = attributes[index].attributeName;
        const attributeId = attributes[index].attributeId;
        return { attributeName,attributeValue,attributeId };
      });
    }
  );
  return formattedCombinations;
}
