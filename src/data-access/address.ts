"use server";
import db from "@/db/db";
import { wrapWithDbTryCatch } from "@/error-handling/wrap-with-try-catch";
import { BaseAddress } from "@/types/address";

export const addAddressInDB = wrapWithDbTryCatch(
  async (address: BaseAddress) => {
    const { id: addressId } = await db.baseAddress.create({
      data: address,
      select: { id: true },
    });
    return addressId;
  }
);
