/*
  Warnings:

  - You are about to drop the `ProductVariantAttribute` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_statusName_fkey";

-- DropForeignKey
ALTER TABLE "ProductVariant" DROP CONSTRAINT "ProductVariant_statusName_fkey";

-- DropForeignKey
ALTER TABLE "ProductVariantAttribute" DROP CONSTRAINT "ProductVariantAttribute_categoryAttributeId_fkey";

-- DropForeignKey
ALTER TABLE "ProductVariantAttribute" DROP CONSTRAINT "ProductVariantAttribute_productVariantId_fkey";

-- DropTable
DROP TABLE "ProductVariantAttribute";

-- CreateTable
CREATE TABLE "ProductVariantToAttribute" (
    "id" TEXT NOT NULL,
    "categoryAttributeId" TEXT NOT NULL,
    "productVariantId" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "ProductVariantToAttribute_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariantToAttribute_categoryAttributeId_productVarian_key" ON "ProductVariantToAttribute"("categoryAttributeId", "productVariantId", "value");

-- AddForeignKey
ALTER TABLE "ProductVariantToAttribute" ADD CONSTRAINT "ProductVariantToAttribute_categoryAttributeId_fkey" FOREIGN KEY ("categoryAttributeId") REFERENCES "CategoryAttribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantToAttribute" ADD CONSTRAINT "ProductVariantToAttribute_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
