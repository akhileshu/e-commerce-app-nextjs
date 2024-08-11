import { errorToast, successToast } from "@/app/_components/toast";
// import { FormatedError } from "@/error-handling/wrap-with-try-catch";
import { ActionSuccessBase } from "@/types/shared";
import { redirect } from "next/navigation";
import { useEffect } from "react";

interface Error {
  name: string;
  message: string;
  redirectPath?: string;
}

type Nullable<T> = T | null | undefined;

interface Params<S extends ActionSuccessBase> {
  success?: Nullable<S>; // Single success
  successes?: Nullable<S>[]; // Multiple successes
  error?: Nullable<Error>; // Single error
  errors?: Nullable<Error>[]; // Multiple errors
  // errors?: ((FormatedError & { redirectPath?: string }) | null | undefined)[];
}

export function useSuccessErrorRedirectHandler<S extends ActionSuccessBase>({
  success,
  successes,
  error,
  errors,
}: Params<S>) {
  useEffect(() => {
    const handleSuccesses = (successes?: Nullable<S> | Nullable<S>[]) => {
      const successArray = Array.isArray(successes) ? successes : [successes];
      for (const s of successArray) {
        if (!s) continue;
        const { message: successMessage, redirectPath: successRedirectPath } =
          s;
        if (successMessage) successToast(successMessage);
        if (successRedirectPath) redirect(successRedirectPath);
      }
    };

    const handleErrors = (errors?: Nullable<Error> | Nullable<Error>[]) => {
      const errorArray = Array.isArray(errors) ? errors : [errors];
      for (const e of errorArray) {
        if (!e) continue;
        const { message, name, redirectPath } = e;
        errorToast(message, name);
        if (redirectPath) redirect(redirectPath);
      }
    };

    // Process the success and error items
    handleSuccesses(successes || success);
    handleErrors(errors || error);
  }, [success, successes, error, errors]);
}
