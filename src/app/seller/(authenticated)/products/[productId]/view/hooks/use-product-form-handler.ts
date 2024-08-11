import { useSuccessErrorRedirectHandler } from "@/lib/handleSuccessErrorRedirect";
import { useFormState } from "react-dom";
import { editProductDetails } from "../actions";

export function useProductFormHandler(onSuccess: () => void) {
  const [result, formAction] = useFormState(editProductDetails, null);
  const { data, error } = result || {};
  const { formErrors, success } = data || {};

  useSuccessErrorRedirectHandler({ error, success });

  if (success) onSuccess();

  return { formAction, formErrors };
}
