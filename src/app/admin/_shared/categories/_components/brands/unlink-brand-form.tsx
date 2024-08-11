"use client";

import { cn } from "@/lib/utils";
import { Trash } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { FormSubmitButton } from "@/components/submit-form-button";
import { unlinkBrandFromCategory } from "../../actions/brands";

const initialState = {
  message: "",
};

export function DeleteForm({
  className,
  categoryId,
  brandId,
}: {
  className: string;
  categoryId: string;
  brandId: string;
}) {
  const [result, formAction] = useFormState(unlinkBrandFromCategory, null);

  return (
    <form action={formAction}>
      <input type="hidden" name="categoryId" value={categoryId} />
      <input type="hidden" name="brandId" value={brandId} />
      <FormSubmitButton label={<Trash />} />
      {result?.error ? (
        <p aria-live="polite" className="sr-only" role="status">
          {"failed to unlink"}
        </p>
      ) : null}
    </form>
  );
}
