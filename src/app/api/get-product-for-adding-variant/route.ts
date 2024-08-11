import db from "@/db/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("productId")!;
  const product = await db.product.findUnique({
    where: { id },
    select: {
      productVariants: {
        include: {
          productVariantToAttributes: true,
        },
      },
      id: true,
      name: true,
      productSearchability: true,
      pics: true,
      categoryId: true,
    },
  });
  if (!product) throw new Error("Product not found");
  return Response.json({ product });
}
