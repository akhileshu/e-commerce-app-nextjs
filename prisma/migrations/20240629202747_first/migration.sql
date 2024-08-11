/*
  Warnings:

  - You are about to drop the column `itemId` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `additionalInfoId` on the `ProductAdditionalInfo` table. All the data in the column will be lost.
  - You are about to drop the column `additionalInfoId` on the `ProductVariantAdditionalInfo` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Seller` table. All the data in the column will be lost.
  - You are about to drop the column `addressLine1` on the `SellerAddress` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `SellerAddress` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `SellerAddress` table. All the data in the column will be lost.
  - You are about to drop the column `landmark` on the `SellerAddress` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `SellerAddress` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `SellerAddress` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `SellerAddress` table. All the data in the column will be lost.
  - You are about to drop the column `addressLine1` on the `ShippingAddress` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `ShippingAddress` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `ShippingAddress` table. All the data in the column will be lost.
  - You are about to drop the column `landmark` on the `ShippingAddress` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `ShippingAddress` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `ShippingAddress` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `ShippingAddress` table. All the data in the column will be lost.
  - You are about to drop the column `addressId` on the `ShippingDetails` table. All the data in the column will be lost.
  - You are about to drop the column `addressLine1` on the `UserAddress` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `UserAddress` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `UserAddress` table. All the data in the column will be lost.
  - You are about to drop the column `landmark` on the `UserAddress` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `UserAddress` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `UserAddress` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `UserAddress` table. All the data in the column will be lost.
  - You are about to drop the column `itemId` on the `WishlistItem` table. All the data in the column will be lost.
  - You are about to drop the `AdditionalInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CartOrWishlistItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CategoryAttributeAssociation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChildCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MediaUrl` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ParentCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductAdditionalDetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductFeature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductVariantAttributeValue` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SearchersOfSearchTerms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserProductView` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[productId,productVariantId,cartId]` on the table `CartItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productId,key,value]` on the table `ProductAdditionalInfo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderItemId]` on the table `ProductReview` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productVariantId,key,value]` on the table `ProductVariantAdditionalInfo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[term]` on the table `SearchTerm` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[addressId]` on the table `SellerAddress` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `SellerContactInfo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `SellerContactInfo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[addressId]` on the table `ShippingAddress` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shippingDetailsId]` on the table `ShippingAddress` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[addressId]` on the table `UserAddress` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `UserContactInfo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `UserContactInfo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productId,productVariantId,wishlistId]` on the table `WishlistItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productVariantId` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brandId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `sellerId` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `datatype` to the `ProductAdditionalInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `infoType` to the `ProductAdditionalInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `key` to the `ProductAdditionalInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `ProductAdditionalInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderItemId` to the `ProductReview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ProductReview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `datatype` to the `ProductVariantAdditionalInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `infoType` to the `ProductVariantAdditionalInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `key` to the `ProductVariantAdditionalInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `ProductVariantAdditionalInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SearchTerm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Seller` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressId` to the `SellerAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SellerFeedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressId` to the `ShippingAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingDetailsId` to the `ShippingAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ShippingDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressId` to the `UserAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `UserAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `WishlistItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `WishlistItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productVariantId` to the `WishlistItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `WishlistItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `WishlistItem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AddressType" AS ENUM ('SellerAddress', 'UserAddress', 'ShippingAddress');

-- CreateEnum
CREATE TYPE "MediaUrlType" AS ENUM ('IMAGE', 'VIDEO');

-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_userId_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_cartId_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_itemId_fkey";

-- DropForeignKey
ALTER TABLE "CartOrWishlistItem" DROP CONSTRAINT "CartOrWishlistItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "CartOrWishlistItem" DROP CONSTRAINT "CartOrWishlistItem_productVariantId_fkey";

-- DropForeignKey
ALTER TABLE "ChildCategory" DROP CONSTRAINT "ChildCategory_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ChildCategory" DROP CONSTRAINT "ChildCategory_parentCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_shippingDetailsId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "ParentCategory" DROP CONSTRAINT "ParentCategory_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "ProductAdditionalInfo" DROP CONSTRAINT "ProductAdditionalInfo_additionalInfoId_fkey";

-- DropForeignKey
ALTER TABLE "ProductAdditionalInfo" DROP CONSTRAINT "ProductAdditionalInfo_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductReview" DROP CONSTRAINT "ProductReview_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProductVariantAdditionalInfo" DROP CONSTRAINT "ProductVariantAdditionalInfo_additionalInfoId_fkey";

-- DropForeignKey
ALTER TABLE "ProductVariantAdditionalInfo" DROP CONSTRAINT "ProductVariantAdditionalInfo_productVariantId_fkey";

-- DropForeignKey
ALTER TABLE "SearchersOfSearchTerms" DROP CONSTRAINT "SearchersOfSearchTerms_searcherId_fkey";

-- DropForeignKey
ALTER TABLE "SearchersOfSearchTerms" DROP CONSTRAINT "SearchersOfSearchTerms_searcherTermId_fkey";

-- DropForeignKey
ALTER TABLE "SellerAddress" DROP CONSTRAINT "SellerAddress_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "SellerContactInfo" DROP CONSTRAINT "SellerContactInfo_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "ShippingDetails" DROP CONSTRAINT "ShippingDetails_addressId_fkey";

-- DropForeignKey
ALTER TABLE "ShippingDetails" DROP CONSTRAINT "ShippingDetails_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserAddress" DROP CONSTRAINT "UserAddress_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserContactInfo" DROP CONSTRAINT "UserContactInfo_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserProductView" DROP CONSTRAINT "UserProductView_productId_fkey";

-- DropForeignKey
ALTER TABLE "UserProductView" DROP CONSTRAINT "UserProductView_productVariantId_fkey";

-- DropForeignKey
ALTER TABLE "UserProductView" DROP CONSTRAINT "UserProductView_userId_fkey";

-- DropForeignKey
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_userId_fkey";

-- DropForeignKey
ALTER TABLE "WishlistItem" DROP CONSTRAINT "WishlistItem_itemId_fkey";

-- DropIndex
DROP INDEX "CartItem_itemId_key";

-- DropIndex
DROP INDEX "ProductAdditionalInfo_additionalInfoId_key";

-- DropIndex
DROP INDEX "ProductVariantAdditionalInfo_additionalInfoId_key";

-- DropIndex
DROP INDEX "ShippingDetails_addressId_key";

-- DropIndex
DROP INDEX "WishlistItem_itemId_key";

-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "itemId",
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "productId" TEXT NOT NULL,
ADD COLUMN     "productVariantId" TEXT NOT NULL,
ADD COLUMN     "qty" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "rate" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "parentId" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "shippingDetailsId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "brandId" TEXT NOT NULL,
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "statusName" TEXT DEFAULT 'active',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "sellerId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ProductAdditionalInfo" DROP COLUMN "additionalInfoId",
ADD COLUMN     "datatype" "AdditionalInfoDataType" NOT NULL,
ADD COLUMN     "infoType" "AdditionalInfoType" NOT NULL,
ADD COLUMN     "key" TEXT NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductReview" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "orderItemId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductVariant" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isDefaultVariant" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "productId" TEXT NOT NULL,
ADD COLUMN     "statusName" TEXT DEFAULT 'active',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ProductVariantAdditionalInfo" DROP COLUMN "additionalInfoId",
ADD COLUMN     "datatype" "AdditionalInfoDataType" NOT NULL,
ADD COLUMN     "infoType" "AdditionalInfoType" NOT NULL,
ADD COLUMN     "key" TEXT NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SearchTerm" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Seller" DROP COLUMN "rating",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SellerAddress" DROP COLUMN "addressLine1",
DROP COLUMN "city",
DROP COLUMN "country",
DROP COLUMN "landmark",
DROP COLUMN "state",
DROP COLUMN "street",
DROP COLUMN "zipCode",
ADD COLUMN     "addressId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SellerFeedback" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ShippingAddress" DROP COLUMN "addressLine1",
DROP COLUMN "city",
DROP COLUMN "country",
DROP COLUMN "landmark",
DROP COLUMN "state",
DROP COLUMN "street",
DROP COLUMN "zipCode",
ADD COLUMN     "addressId" TEXT NOT NULL,
ADD COLUMN     "shippingDetailsId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ShippingDetails" DROP COLUMN "addressId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "UserAddress" DROP COLUMN "addressLine1",
DROP COLUMN "city",
DROP COLUMN "country",
DROP COLUMN "landmark",
DROP COLUMN "state",
DROP COLUMN "street",
DROP COLUMN "zipCode",
ADD COLUMN     "addressId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "WishlistItem" DROP COLUMN "itemId",
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "productId" TEXT NOT NULL,
ADD COLUMN     "productVariantId" TEXT NOT NULL,
ADD COLUMN     "qty" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "rate" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "AdditionalInfo";

-- DropTable
DROP TABLE "CartOrWishlistItem";

-- DropTable
DROP TABLE "CategoryAttributeAssociation";

-- DropTable
DROP TABLE "ChildCategory";

-- DropTable
DROP TABLE "MediaUrl";

-- DropTable
DROP TABLE "ParentCategory";

-- DropTable
DROP TABLE "ProductAdditionalDetails";

-- DropTable
DROP TABLE "ProductFeature";

-- DropTable
DROP TABLE "ProductVariantAttributeValue";

-- DropTable
DROP TABLE "SearchersOfSearchTerms";

-- DropTable
DROP TABLE "UserProductView";

-- CreateTable
CREATE TABLE "BaseAddress" (
    "id" TEXT NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "landmark" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "type" "AddressType" NOT NULL,

    CONSTRAINT "BaseAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserToSearchTerm" (
    "id" TEXT NOT NULL,
    "searcherId" TEXT,
    "searcherTermId" TEXT NOT NULL,
    "searchCount" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserToSearchTerm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserToProductView" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productVariantId" TEXT,
    "userId" TEXT NOT NULL,
    "viewCount" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserToProductView_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryAttribute" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "internalName" TEXT NOT NULL,
    "possibleValues" TEXT[],
    "description" TEXT,

    CONSTRAINT "CategoryAttribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryToCategoryAttribute" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "categoryAttributeId" TEXT NOT NULL,

    CONSTRAINT "CategoryToCategoryAttribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategorySearchability" (
    "id" TEXT NOT NULL,
    "metadata" TEXT,
    "description" TEXT NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "CategorySearchability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryToBrand" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,

    CONSTRAINT "CategoryToBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewMediaUrl" (
    "id" TEXT NOT NULL,
    "productReviewId" TEXT NOT NULL,
    "type" "MediaUrlType" NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "ReviewMediaUrl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductSearchability" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "metadata" TEXT,
    "tags" TEXT[],
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductSearchability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariantAttribute" (
    "id" TEXT NOT NULL,
    "categoryAttributeId" TEXT NOT NULL,
    "productVariantId" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "ProductVariantAttribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductStatus" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ProductStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariantSearchability" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "metadata" TEXT,
    "tags" TEXT[],
    "productVariantId" TEXT NOT NULL,

    CONSTRAINT "ProductVariantSearchability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToCategoryAttribute" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BrandToCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserToSearchTerm_searcherId_searcherTermId_key" ON "UserToSearchTerm"("searcherId", "searcherTermId");

-- CreateIndex
CREATE UNIQUE INDEX "UserToProductView_userId_productId_productVariantId_key" ON "UserToProductView"("userId", "productId", "productVariantId");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryAttribute_displayName_internalName_key" ON "CategoryAttribute"("displayName", "internalName");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryToCategoryAttribute_categoryId_categoryAttributeId_key" ON "CategoryToCategoryAttribute"("categoryId", "categoryAttributeId");

-- CreateIndex
CREATE UNIQUE INDEX "CategorySearchability_categoryId_key" ON "CategorySearchability"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryToBrand_categoryId_brandId_key" ON "CategoryToBrand"("categoryId", "brandId");

-- CreateIndex
CREATE UNIQUE INDEX "ReviewMediaUrl_url_key" ON "ReviewMediaUrl"("url");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSearchability_productId_key" ON "ProductSearchability"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariantAttribute_categoryAttributeId_productVariantI_key" ON "ProductVariantAttribute"("categoryAttributeId", "productVariantId", "value");

-- CreateIndex
CREATE UNIQUE INDEX "ProductStatus_status_key" ON "ProductStatus"("status");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariantSearchability_productVariantId_key" ON "ProductVariantSearchability"("productVariantId");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToCategoryAttribute_AB_unique" ON "_CategoryToCategoryAttribute"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToCategoryAttribute_B_index" ON "_CategoryToCategoryAttribute"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BrandToCategory_AB_unique" ON "_BrandToCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_BrandToCategory_B_index" ON "_BrandToCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_productId_productVariantId_cartId_key" ON "CartItem"("productId", "productVariantId", "cartId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ProductAdditionalInfo_productId_key_value_key" ON "ProductAdditionalInfo"("productId", "key", "value");

-- CreateIndex
CREATE UNIQUE INDEX "ProductReview_orderItemId_key" ON "ProductReview"("orderItemId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariantAdditionalInfo_productVariantId_key_value_key" ON "ProductVariantAdditionalInfo"("productVariantId", "key", "value");

-- CreateIndex
CREATE UNIQUE INDEX "SearchTerm_term_key" ON "SearchTerm"("term");

-- CreateIndex
CREATE UNIQUE INDEX "SellerAddress_addressId_key" ON "SellerAddress"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "SellerContactInfo_phoneNumber_key" ON "SellerContactInfo"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "SellerContactInfo_email_key" ON "SellerContactInfo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ShippingAddress_addressId_key" ON "ShippingAddress"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "ShippingAddress_shippingDetailsId_key" ON "ShippingAddress"("shippingDetailsId");

-- CreateIndex
CREATE UNIQUE INDEX "UserAddress_addressId_key" ON "UserAddress"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "UserContactInfo_phoneNumber_key" ON "UserContactInfo"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "UserContactInfo_email_key" ON "UserContactInfo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "WishlistItem_productId_productVariantId_wishlistId_key" ON "WishlistItem"("productId", "productVariantId", "wishlistId");

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistItem" ADD CONSTRAINT "WishlistItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistItem" ADD CONSTRAINT "WishlistItem_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellerAddress" ADD CONSTRAINT "SellerAddress_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "BaseAddress"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellerAddress" ADD CONSTRAINT "SellerAddress_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAddress" ADD CONSTRAINT "UserAddress_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "BaseAddress"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAddress" ADD CONSTRAINT "UserAddress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShippingAddress" ADD CONSTRAINT "ShippingAddress_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "BaseAddress"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShippingAddress" ADD CONSTRAINT "ShippingAddress_shippingDetailsId_fkey" FOREIGN KEY ("shippingDetailsId") REFERENCES "ShippingDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShippingDetails" ADD CONSTRAINT "ShippingDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellerContactInfo" ADD CONSTRAINT "SellerContactInfo_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserContactInfo" ADD CONSTRAINT "UserContactInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToSearchTerm" ADD CONSTRAINT "UserToSearchTerm_searcherId_fkey" FOREIGN KEY ("searcherId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToSearchTerm" ADD CONSTRAINT "UserToSearchTerm_searcherTermId_fkey" FOREIGN KEY ("searcherTermId") REFERENCES "SearchTerm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToProductView" ADD CONSTRAINT "UserToProductView_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToProductView" ADD CONSTRAINT "UserToProductView_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToProductView" ADD CONSTRAINT "UserToProductView_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_shippingDetailsId_fkey" FOREIGN KEY ("shippingDetailsId") REFERENCES "ShippingDetails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductAdditionalInfo" ADD CONSTRAINT "ProductAdditionalInfo_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantAdditionalInfo" ADD CONSTRAINT "ProductVariantAdditionalInfo_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryToCategoryAttribute" ADD CONSTRAINT "CategoryToCategoryAttribute_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryToCategoryAttribute" ADD CONSTRAINT "CategoryToCategoryAttribute_categoryAttributeId_fkey" FOREIGN KEY ("categoryAttributeId") REFERENCES "CategoryAttribute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategorySearchability" ADD CONSTRAINT "CategorySearchability_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryToBrand" ADD CONSTRAINT "CategoryToBrand_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryToBrand" ADD CONSTRAINT "CategoryToBrand_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewMediaUrl" ADD CONSTRAINT "ReviewMediaUrl_productReviewId_fkey" FOREIGN KEY ("productReviewId") REFERENCES "ProductReview"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_statusName_fkey" FOREIGN KEY ("statusName") REFERENCES "ProductStatus"("status") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSearchability" ADD CONSTRAINT "ProductSearchability_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantAttribute" ADD CONSTRAINT "ProductVariantAttribute_categoryAttributeId_fkey" FOREIGN KEY ("categoryAttributeId") REFERENCES "CategoryAttribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantAttribute" ADD CONSTRAINT "ProductVariantAttribute_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_statusName_fkey" FOREIGN KEY ("statusName") REFERENCES "ProductStatus"("status") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantSearchability" ADD CONSTRAINT "ProductVariantSearchability_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductReview" ADD CONSTRAINT "ProductReview_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductReview" ADD CONSTRAINT "ProductReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToCategoryAttribute" ADD CONSTRAINT "_CategoryToCategoryAttribute_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToCategoryAttribute" ADD CONSTRAINT "_CategoryToCategoryAttribute_B_fkey" FOREIGN KEY ("B") REFERENCES "CategoryAttribute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandToCategory" ADD CONSTRAINT "_BrandToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandToCategory" ADD CONSTRAINT "_BrandToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
