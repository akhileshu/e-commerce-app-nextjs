-- CreateEnum
CREATE TYPE "ShippingDetailsType" AS ENUM ('HOME', 'WORK');

-- CreateEnum
CREATE TYPE "ShippingDetailsWeekendPreference" AS ENUM ('BOTH', 'SATUDAY', 'SUNDAY');

-- CreateEnum
CREATE TYPE "AdditionalInfoDataType" AS ENUM ('TEXT', 'NUMBER', 'BOOLEAN', 'DATE');

-- CreateEnum
CREATE TYPE "AdditionalInfoType" AS ENUM ('FEATURE', 'DETAIL');

-- CreateTable
CREATE TABLE "CartItem" (
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,
    "isSavedForLater" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CartOrWishlistItem" (
    "id" TEXT NOT NULL,
    "qty" INTEGER NOT NULL DEFAULT 1,
    "rate" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    "productVariantId" TEXT NOT NULL,

    CONSTRAINT "CartOrWishlistItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seller" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pic" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WishlistItem" (
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "wishlistId" TEXT NOT NULL,

    CONSTRAINT "WishlistItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wishlist" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SellerAddress" (
    "id" TEXT NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "landmark" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL,

    CONSTRAINT "SellerAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAddress" (
    "id" TEXT NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "landmark" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShippingAddress" (
    "id" TEXT NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "landmark" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "ShippingAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShippingDetails" (
    "id" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "ShippingDetailsType" NOT NULL,
    "weekendPreference" "ShippingDetailsWeekendPreference" NOT NULL,
    "locationInstruction" TEXT NOT NULL,

    CONSTRAINT "ShippingDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SellerFeedback" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "badRatingReasonId" TEXT,

    CONSTRAINT "SellerFeedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BadRatingReason" (
    "id" TEXT NOT NULL,
    "reason" TEXT NOT NULL,

    CONSTRAINT "BadRatingReason_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pic" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SellerContactInfo" (
    "id" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL,

    CONSTRAINT "SellerContactInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserContactInfo" (
    "id" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserContactInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchTerm" (
    "id" TEXT NOT NULL,
    "term" TEXT NOT NULL,

    CONSTRAINT "SearchTerm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchersOfSearchTerms" (
    "id" TEXT NOT NULL,
    "searcherId" TEXT NOT NULL,
    "searcherTermId" TEXT NOT NULL,
    "searchCount" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "SearchersOfSearchTerms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "qty" INTEGER NOT NULL DEFAULT 1,
    "rate" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "searcherTermId" TEXT,
    "productId" TEXT NOT NULL,
    "productVariantId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProductView" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productVariantId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "viewCount" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "UserProductView_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "shippingDetailsId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdditionalInfo" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "datatype" "AdditionalInfoDataType" NOT NULL,
    "infoType" "AdditionalInfoType" NOT NULL,

    CONSTRAINT "AdditionalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductAdditionalInfo" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "additionalInfoId" TEXT,

    CONSTRAINT "ProductAdditionalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariantAdditionalInfo" (
    "id" TEXT NOT NULL,
    "productVariantId" TEXT NOT NULL,
    "additionalInfoId" TEXT,

    CONSTRAINT "ProductVariantAdditionalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParentCategory" (
    "categoryId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ChildCategory" (
    "categoryId" TEXT NOT NULL,
    "parentCategoryId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaUrl" (
    "id" TEXT NOT NULL,

    CONSTRAINT "MediaUrl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryAttributeAssociation" (
    "id" TEXT NOT NULL,

    CONSTRAINT "CategoryAttributeAssociation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "sellerId" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariantAttributeValue" (
    "id" TEXT NOT NULL,

    CONSTRAINT "ProductVariantAttributeValue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" TEXT NOT NULL,

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductReview" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ProductReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductFeature" (
    "id" TEXT NOT NULL,

    CONSTRAINT "ProductFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductAdditionalDetails" (
    "id" TEXT NOT NULL,

    CONSTRAINT "ProductAdditionalDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SearchTermToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_itemId_key" ON "CartItem"("itemId");

-- CreateIndex
CREATE UNIQUE INDEX "CartOrWishlistItem_productId_productVariantId_key" ON "CartOrWishlistItem"("productId", "productVariantId");

-- CreateIndex
CREATE UNIQUE INDEX "WishlistItem_itemId_key" ON "WishlistItem"("itemId");

-- CreateIndex
CREATE UNIQUE INDEX "Wishlist_userId_key" ON "Wishlist"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_userId_key" ON "Cart"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SellerAddress_sellerId_key" ON "SellerAddress"("sellerId");

-- CreateIndex
CREATE UNIQUE INDEX "UserAddress_userId_key" ON "UserAddress"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ShippingDetails_addressId_key" ON "ShippingDetails"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "SellerFeedback_orderId_sellerId_key" ON "SellerFeedback"("orderId", "sellerId");

-- CreateIndex
CREATE UNIQUE INDEX "SellerContactInfo_sellerId_key" ON "SellerContactInfo"("sellerId");

-- CreateIndex
CREATE UNIQUE INDEX "UserContactInfo_userId_key" ON "UserContactInfo"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SearchersOfSearchTerms_searcherId_searcherTermId_key" ON "SearchersOfSearchTerms"("searcherId", "searcherTermId");

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_orderId_productId_productVariantId_key" ON "OrderItem"("orderId", "productId", "productVariantId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProductView_userId_productId_productVariantId_key" ON "UserProductView"("userId", "productId", "productVariantId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductAdditionalInfo_additionalInfoId_key" ON "ProductAdditionalInfo"("additionalInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariantAdditionalInfo_additionalInfoId_key" ON "ProductVariantAdditionalInfo"("additionalInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "ParentCategory_categoryId_key" ON "ParentCategory"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "ChildCategory_categoryId_key" ON "ChildCategory"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "_SearchTermToUser_AB_unique" ON "_SearchTermToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_SearchTermToUser_B_index" ON "_SearchTermToUser"("B");

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "CartOrWishlistItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartOrWishlistItem" ADD CONSTRAINT "CartOrWishlistItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartOrWishlistItem" ADD CONSTRAINT "CartOrWishlistItem_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistItem" ADD CONSTRAINT "WishlistItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "CartOrWishlistItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistItem" ADD CONSTRAINT "WishlistItem_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellerAddress" ADD CONSTRAINT "SellerAddress_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAddress" ADD CONSTRAINT "UserAddress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShippingDetails" ADD CONSTRAINT "ShippingDetails_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "ShippingAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShippingDetails" ADD CONSTRAINT "ShippingDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellerFeedback" ADD CONSTRAINT "SellerFeedback_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellerFeedback" ADD CONSTRAINT "SellerFeedback_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellerFeedback" ADD CONSTRAINT "SellerFeedback_badRatingReasonId_fkey" FOREIGN KEY ("badRatingReasonId") REFERENCES "BadRatingReason"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellerContactInfo" ADD CONSTRAINT "SellerContactInfo_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserContactInfo" ADD CONSTRAINT "UserContactInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SearchersOfSearchTerms" ADD CONSTRAINT "SearchersOfSearchTerms_searcherId_fkey" FOREIGN KEY ("searcherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SearchersOfSearchTerms" ADD CONSTRAINT "SearchersOfSearchTerms_searcherTermId_fkey" FOREIGN KEY ("searcherTermId") REFERENCES "SearchTerm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_searcherTermId_fkey" FOREIGN KEY ("searcherTermId") REFERENCES "SearchTerm"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProductView" ADD CONSTRAINT "UserProductView_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProductView" ADD CONSTRAINT "UserProductView_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProductView" ADD CONSTRAINT "UserProductView_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_shippingDetailsId_fkey" FOREIGN KEY ("shippingDetailsId") REFERENCES "ShippingDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductAdditionalInfo" ADD CONSTRAINT "ProductAdditionalInfo_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductAdditionalInfo" ADD CONSTRAINT "ProductAdditionalInfo_additionalInfoId_fkey" FOREIGN KEY ("additionalInfoId") REFERENCES "AdditionalInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantAdditionalInfo" ADD CONSTRAINT "ProductVariantAdditionalInfo_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantAdditionalInfo" ADD CONSTRAINT "ProductVariantAdditionalInfo_additionalInfoId_fkey" FOREIGN KEY ("additionalInfoId") REFERENCES "AdditionalInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentCategory" ADD CONSTRAINT "ParentCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChildCategory" ADD CONSTRAINT "ChildCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChildCategory" ADD CONSTRAINT "ChildCategory_parentCategoryId_fkey" FOREIGN KEY ("parentCategoryId") REFERENCES "ParentCategory"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductReview" ADD CONSTRAINT "ProductReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SearchTermToUser" ADD CONSTRAINT "_SearchTermToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "SearchTerm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SearchTermToUser" ADD CONSTRAINT "_SearchTermToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
