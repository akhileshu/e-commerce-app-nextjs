"use server";

import { addAddressInDB } from "@/data-access/address";
import {
  isSellerAddressAndPhoneNumberSubmitted,
  updateSellerAddressAndPhoneNumber,
} from "@/data-access/seller";
import { handleError } from "@/error-handling/wrap-with-try-catch";
import { getSessionByRole } from "@/lib/getSessionSeller";
import { ActionSuccessBase, userRoles } from "@/types/shared";
import { z } from "zod";


const baseAddressSchema = z.object({
  addressLine1: z.string().min(2).max(100),
  street: z.string().min(2).max(100),
  landmark: z.string().min(2).max(100),
  city: z.string().min(2).max(100),
  state: z.string().min(2).max(100),
  zipCode: z.string().min(6).max(6),
  country: z.literal("India"),
  type: z.enum(["SellerAddress", "UserAddress", "ShippingAddress"]),
});

// Extend the base schema for SellerAddress
const addSellerAddressSchema = baseAddressSchema.extend({
  type: z.literal("SellerAddress"),
  phoneNumber: z.string().length(10),
});

export const addSellerAddress = handleError(
  async (prevState: unknown, formData: FormData) => {
    const { success, data, error } = addSellerAddressSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) {
      return { formErrors: error.formErrors.fieldErrors };
    }
    const { phoneNumber, ...address } = data;

    const session = await getSessionByRole(userRoles.seller);
    const addressId = await addAddressInDB(address);
    const updatedSeller = await updateSellerAddressAndPhoneNumber({
      sellerId: session.user.id,
      addressId,
      phoneNumber,
    });

    type Success = ActionSuccessBase & {};
    const successObj: Success = {
      redirectPath: "/seller",
      message: "Updated your phone number and address",
    };
    return {
      success: successObj,
    };
  }
);

export const isSellerAddressSubmitted = handleError(async () => {
  const {
    user: { id },
  } = await getSessionByRole(userRoles.seller);
  const isSubmitted = await isSellerAddressAndPhoneNumberSubmitted(id);
  return isSubmitted;
});
