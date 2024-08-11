import React from "react";
import { useFormState } from "react-dom";
import { action } from "./actions";
import { useSuccessErrorRedirectHandler } from "@/lib/handleSuccessErrorRedirect";
import { FormSubmitButton } from "@/components/submit-form-button";

function Mutation() {
  const [result, formAction] = useFormState(action, null);

  const { data, error } = result || {};
  const { formErrors, success } = data || {};
  useSuccessErrorRedirectHandler({ error, success });
  return (
    <form
      className="shadow-aesthetic m-2 p-2 rounded-md"
      action={formAction}
    >

      <FormSubmitButton/>
    </form>
  );
}

export default Mutation;
