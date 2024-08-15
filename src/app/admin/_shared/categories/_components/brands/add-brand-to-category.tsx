"use client";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FormSubmitButton } from "@/components/submit-form-button";
import { addBrandToCategory } from "../../actions/brands";
import { DialogComponent } from "@/components/dialog";
import { useDialogControl } from "@/hooks/useDialogControl";

export function AddBrandToCategory({ categoryId }: { categoryId: string }) {
  //todo: implement search to find available brands to map to category
  //todo: if not found , then give option to add a new brand to category
  const { dialogCloseRef, closeDialog } = useDialogControl();

  const [result, formAction] = useFormState(addBrandToCategory, null);

  if (result?.isSaved) closeDialog();

  return (
    <DialogComponent
      triggerText={"Add brand to category"}
      description={"enter brand details"}
      saveTitle={"save"}
      dialogCloseRef={dialogCloseRef}
    >
      <form
        className=""
        action={(formData: FormData) => {
          formData.append("categoryId", categoryId);
          formAction(formData);
        }}
      >
        <input
          className="outline-none myborder w-3/4 rounded-md"
          type="text"
          name="name"
          placeholder="Enter name"
        />
        {result?.error?.name && (
          <div className="text-destructive">{result?.error?.name}</div>
        )}
        <textarea
          placeholder="Enter description"
          className="outline-none myborder w-3/4 rounded-md"
          name="description"
          id=""
        ></textarea>
        {result?.error?.description && (
          <div className="text-destructive">{result?.error?.description}</div>
        )}

        <FormSubmitButton />
      </form>
    </DialogComponent>
  );
}
