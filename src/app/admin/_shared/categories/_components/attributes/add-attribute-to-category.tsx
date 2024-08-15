"use client";
import { useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { CirclePlus } from "lucide-react";
import { addAttributeToCategory } from "../../actions/attributes";
import { DialogComponent } from "@/components/dialog";
import { BadgeComponentWithDelete } from "@/components/badge";
import { useDialogControl } from "@/hooks/useDialogControl";

export function AddAttributeToCategory({ categoryId }: { categoryId: string }) {
  //todo: implement search to find available attributes to map to category
  //todo: if not found , then give option to add a new attribute to category
  const { dialogCloseRef, closeDialog } = useDialogControl();
  const possibleValueInputRef = useRef<HTMLInputElement | null>(null);
  const [possibleValues, setPossibleValues] = useState<string[]>([]);

  const [result, formAction] = useFormState(addAttributeToCategory, null);

  if (result?.isSaved) closeDialog();

  const handleAddValue = () => {
    const newValue = possibleValueInputRef.current?.value;

    if (newValue) {
      setPossibleValues((previousPossibleValues) => [
        ...previousPossibleValues,
        newValue,
      ]);
      possibleValueInputRef.current!.value = "";
      possibleValueInputRef.current!.focus();
    }
  };

  const handleRemoveValue = (removeValueIndex: number) => {
    setPossibleValues((previousPossibleValues) =>
      previousPossibleValues.filter((tag, index) =>
        index !== removeValueIndex ? tag : null
      )
    );
  };

  return (
    <DialogComponent
      triggerText={"Add attribute to category"}
      description={"enter attribute details"}
      saveTitle={"save"}
      dialogCloseRef={dialogCloseRef}
    >
      <form className="" action={formAction}>
        <input
          name="possibleValues"
          type="hidden"
          value={JSON.stringify(possibleValues)}
        />
        <input name="categoryId" type="hidden" value={categoryId} />

        <input
          className="outline-none myborder w-3/4 rounded-md"
          type="text"
          name="displayName"
          placeholder="Enter displayName"
        />
        {result?.error?.displayName && (
          <div className="text-destructive">{result?.error?.displayName}</div>
        )}
        <input
          className="outline-none myborder w-3/4 rounded-md"
          type="text"
          name="internalName"
          placeholder="Enter internalName"
        />
        {result?.error?.internalName && (
          <div className="text-destructive">{result?.error?.internalName}</div>
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

        <div className="flex gap-2 flex-wrap">
          {possibleValues.map((value, valueIndex) => (
            <BadgeComponentWithDelete
              key={valueIndex}
              onDelete={() => handleRemoveValue(valueIndex)}
              badgeContent={value}
            />
          ))}
        </div>
        {result?.error?.possibleValues && (
          <div className="text-destructive">
            {result?.error?.possibleValues}
          </div>
        )}

        <div className="flex items-center">
          <input
            className="outline-none myborder w-3/4 rounded-md"
            type="text"
            id={"possibleValueInput"}
            ref={possibleValueInputRef}
            placeholder="Add possibleValues"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleAddValue();
              }
            }}
          />
          <CirclePlus onClick={handleAddValue} className="-mx-10" />
        </div>

        <SubmitButton />
      </form>
    </DialogComponent>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="myborder rounded-md"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? "..." : "Add"}
    </button>
  );
}
