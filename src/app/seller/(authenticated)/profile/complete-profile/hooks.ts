import { errorToast, successToast } from "@/app/_components/toast";
import { redirect } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { addSellerAddress, isSellerAddressSubmitted } from "./action";
import { useSuccessErrorRedirectHandler } from "@/lib/handleSuccessErrorRedirect";

function useSellerAddressFormHandler() {
  const [result, formAction] = useFormState(addSellerAddress, null);
  const { data, error } = result || {};
  const { formErrors, success } = data || {};

  useSuccessErrorRedirectHandler({ error, success });

  return {
    formErrors,
    formAction,
  };
}

export default useSellerAddressFormHandler;
