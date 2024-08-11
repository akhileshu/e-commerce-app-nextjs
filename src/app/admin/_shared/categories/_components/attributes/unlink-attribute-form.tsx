"use client";

import { cn } from "@/lib/utils";
import { Trash } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { unlinkAttributeFromCategory } from "../../actions/attributes";

const initialState = {
  message: "",
};

function DeleteButton({ className }: { className: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={cn(className)}
      type="submit"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? "..." : <Trash className={cn(className)} />}
    </button>
  );
}

export function DeleteForm({
  className,
  categoryId,
  attributeId,
}: {
  className: string;
  categoryId: string;
  attributeId: string;
}) {
  const [result, formAction] = useFormState(unlinkAttributeFromCategory, null);

  return (
    <form action={formAction}>
      <input type="hidden" name="categoryId" value={categoryId} />
      <input type="hidden" name="attributeId" value={attributeId} />
      <DeleteButton className={className} />
      {result?.error ? (
        <p aria-live="polite" className="sr-only" role="status">
          {"failed to unlink"}
        </p>
      ) : null}
    </form>
  );
}
