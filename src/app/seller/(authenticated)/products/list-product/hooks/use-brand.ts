// hooks/useBrands.ts
import { useState, useEffect } from "react";
import { Brand } from "@prisma/client";
import { getBrandsOfACategory } from "@/data-access/categoryToBrand";

export function useBrands(categoryId: string | undefined |null) {
  const [brands, setBrands] = useState<
    {
      categoryId: string;
      brand: Brand;
    }[]
  >([]);

  useEffect(() => {
    async function fetchBrands() {
      if (categoryId) {
        const data = await getBrandsOfACategory({ categoryId });
        setBrands(data);
      }
    }
    fetchBrands();
  }, [categoryId]);

  return brands;
}
