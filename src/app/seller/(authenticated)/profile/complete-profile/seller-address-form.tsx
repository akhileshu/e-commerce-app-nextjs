"use client";
import AddressForm, { AddressField } from "@/app/_components/address-form";

import { redirect } from "next/navigation";
import { isSellerAddressSubmitted } from "./action";
import useSellerAddressFormHandler from "./hooks";

export function SellerAddressForm({
  isAddressAlreadySubmitted,
}: {
  isAddressAlreadySubmitted: Awaited<
    ReturnType<typeof isSellerAddressSubmitted>
  >;
}) {
  if (isAddressAlreadySubmitted) redirect("/seller");
  const { formErrors, formAction } = useSellerAddressFormHandler();
  const { phoneNumber: phoneNumberFieldError, ...addressFieldErrors } =
    formErrors || {};

  return (
    <AddressForm
      fieldErrors={addressFieldErrors}
      formAction={formAction}
      type="SellerAddress"
    >
      <>
        <AddressField fieldError={phoneNumberFieldError}>
          <>
            <label className="text-gray-500 min-w-32" htmlFor="phoneNumber">
              Phone Number:
            </label>
            <input
              className="max-w-60 focus:border-purple-400 p-1 outline-none border-purple-200 border-2 border-solid rounded-sm"
              name="phoneNumber"
              type="number"
              id="phoneNumber"
            />
          </>
        </AddressField>
      </>
    </AddressForm>
  );
}
