"use server";
import db from "@/db/db";
import { wrapWithDbTryCatch } from "@/error-handling/wrap-with-try-catch";

export const isSellerAddressAndPhoneNumberSubmitted = wrapWithDbTryCatch(
  async (sellerId:string) => {
    const seller = await db.seller.findFirst({
      where: { id: sellerId },
      select: {
        phoneNumber: true,
        address: true,
      },
    });
    return seller?.address && seller?.phoneNumber ? true : false;
  }
);
export const updateSellerAddressAndPhoneNumber = wrapWithDbTryCatch(
  async ({
    addressId,
    phoneNumber,
    sellerId,
  }: {
    addressId: string;
    phoneNumber: string;
    sellerId: string;
  }) => {
    const updatedSeller = await db.seller.update({
      where: { id: sellerId },
      data: {
        address: {
          create: {
            addressId,
          },
        },
        phoneNumber,
      },
    });
    return updatedSeller;
  }
);
