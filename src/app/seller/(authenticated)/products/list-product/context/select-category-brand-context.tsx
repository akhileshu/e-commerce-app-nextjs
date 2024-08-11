"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the type for the context value
type SelectedCategoryBrandContextType = {
  selectedCategoryBrand: SelectedCategoryBrand | null;
  setSelectedCategoryBrand: Dispatch<
    SetStateAction<SelectedCategoryBrand | null>
  >;
};

type SelectedCategoryBrand = {
  categoryId: string | null;
  categoryName: string | null;
  categoryHierarchy: string[];
  brandId: string | null;
  brandName: string | null;
};

// Create context with default value as null
const CategoryBrandContext =
  createContext<SelectedCategoryBrandContextType | null>(null);

function CategoryBrandProvider({ children }: { children: ReactNode }) {
  const [selectedCategoryBrand, setSelectedCategoryBrand] =
    useState<SelectedCategoryBrand | null>(null);

  return (
    <CategoryBrandContext.Provider
      value={{ selectedCategoryBrand, setSelectedCategoryBrand }}
    >
      {children}
    </CategoryBrandContext.Provider>
  );
}

// Custom hook for using the context
function useCategoryBrand() {
  const context = useContext(CategoryBrandContext);
  if (!context) {
    throw new Error(
      "useCategoryBrand must be used within a CategoryBrandProvider"
    );
  }
  return context;
}

export { CategoryBrandProvider, useCategoryBrand };
