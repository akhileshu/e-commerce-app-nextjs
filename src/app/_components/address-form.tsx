import { FormSubmitButton } from "@/components/submit-form-button";
import { AddressFieldErrors } from "@/types/address";
import { ReactNode } from "react";

export default function AddressForm({
  type,
  children,
  formAction,
  fieldErrors,
}: {
  type: "SellerAddress" | "UserAddress" | "ShippingAddress";
  children?: ReactNode;
  formAction: (payload: FormData) => void;
  fieldErrors: AddressFieldErrors;
}) {
  return (
    <div>
      <form
        action={formAction}
        className="m-2 p-2 border-solid border-purple-200 border-2 rounded-md"
      >
        {children}
        <AddressField fieldError={fieldErrors.addressLine1}>
          <>
            <label className="text-gray-500 min-w-32" htmlFor="addressLine1">
              Address Line 1:
            </label>
            <input
              className="max-w-60 focus:border-purple-400 p-1 outline-none border-purple-200 border-2 border-solid rounded-sm"
              placeholder="House/Apmt/Flat no"
              type="text"
              name="addressLine1"
              id="addressLine1"
            />
          </>
        </AddressField>
        <AddressField fieldError={fieldErrors.street}>
          <>
            <label className="text-gray-500 min-w-32" htmlFor="street">
              Street:
            </label>
            <input
              className="max-w-60 focus:border-purple-400 p-1 outline-none border-purple-200 border-2 border-solid rounded-sm"
              type="text"
              id="street"
              name="street"
            />
          </>
        </AddressField>
        <AddressField fieldError={fieldErrors.landmark}>
          <>
            <label className="text-gray-500 min-w-32" htmlFor="landmark">
              Landmark:
            </label>
            <input
              className="max-w-60 focus:border-purple-400 p-1 outline-none border-purple-200 border-2 border-solid rounded-sm"
              type="text"
              id="landmark"
              name="landmark"
            />
          </>
        </AddressField>
        <AddressField fieldError={fieldErrors.city}>
          <>
            <label className="text-gray-500 min-w-32" htmlFor="city">
              City:
            </label>
            <input
              className="max-w-60 focus:border-purple-400 p-1 outline-none border-purple-200 border-2 border-solid rounded-sm"
              type="text"
              id="city"
              name="city"
            />
          </>
        </AddressField>
        <AddressField fieldError={fieldErrors.state}>
          <>
            <label className="text-gray-500 min-w-32" htmlFor="state">
              State:
            </label>
            <input
              className="max-w-60 focus:border-purple-400 p-1 outline-none border-purple-200 border-2 border-solid rounded-sm"
              type="text"
              id="state"
              name="state"
            />
          </>
        </AddressField>
        <AddressField fieldError={fieldErrors.zipCode}>
          <>
            <label className="text-gray-500 min-w-32" htmlFor="zipCode">
              Zip Code:
            </label>
            <input
              className="max-w-60 focus:border-purple-400 p-1 outline-none border-purple-200 border-2 border-solid rounded-sm"
              type="number"
              id="zipCode"
              name="zipCode"
            />
          </>
        </AddressField>
        <AddressField fieldError={fieldErrors.country}>
          <>
            <label className="text-gray-500 min-w-32" htmlFor="country">
              Country:
            </label>
            <input
              readOnly
              type="text"
              id="country"
              defaultValue="India"
              name="country"
              className="max-w-60 focus:border-purple-400 p-1 outline-none border-purple-200 border-2 border-solid rounded-sm"
            />
          </>
        </AddressField>
        <AddressField fieldError={fieldErrors.type}>
          <>
            <label hidden className="text-gray-500 min-w-32" htmlFor="type">
              Type:
            </label>
            <input
              className="max-w-60 focus:border-purple-400 p-1 outline-none border-purple-200 border-2 border-solid rounded-sm"
              type="hidden"
              id="type"
              value={type}
              name="type"
            />
          </>
        </AddressField>
        <FormSubmitButton />
      </form>
    </div>
  );
}

export function AddressField({
  fieldError,
  children,
}: {
  fieldError: string[] | undefined;
  children: ReactNode;
}) {
  return (
    <div className="mb-3 ">
      <div className="flex items-center">{children}</div>
      {fieldError ? <p className="text-red-400 text-sm">{fieldError}</p> : null}
    </div>
  );
}
