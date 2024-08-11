"use client";
import { FormSubmitButton } from "@/components/submit-form-button";
import { CirclePlus } from "lucide-react";
import { useRef, useState } from "react";
import { useFormState } from "react-dom";
import { addRootCategory } from "../actions/category";
import { DialogComponent } from "@/components/dialog";
import { BadgeComponentWithDelete } from "@/components/badge";
import { useDialogControl } from "@/hooks/useDialogControl";

export function AddRootCategoryComponent() {
  const { dialogCloseRef, closeDialog } = useDialogControl();
  const tagInputRef = useRef<HTMLInputElement>(null);

  const [tags, setTags] = useState<string[]>([]);
  const initialState = {};

  const [result, formAction] = useFormState(addRootCategory, null);

  if (result?.isSaved) closeDialog();

  function onSave() {}
  function handleRemoveTag(index: number) {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  }

  function handleAddTag() {
    const newTag = tagInputRef.current?.value;
    if (newTag) {
      setTags((prevTags) => [...prevTags, newTag]);
      tagInputRef.current.value = "";
      tagInputRef.current.focus();
    }
  }
  return (
    <DialogComponent
      onSave={onSave}
      triggerTitle={"Add Root Category"}
      description={"this will delete all existing categories"}
      saveTitle={"save"}
      dialogCloseRef={dialogCloseRef}
    >
      <form
        className=""
        action={(formData: FormData) => {
          formData.append("tags", JSON.stringify(tags));
          formData.append("slug", "someSlug");
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
        <textarea
          placeholder="Enter Metadata Description"
          className="outline-none myborder w-3/4 rounded-md"
          name="metadata"
          id=""
        ></textarea>
        {result?.error?.metadata && (
          <div className="text-destructive">{result?.error?.metadata}</div>
        )}
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <BadgeComponentWithDelete
              key={index}
              onDelete={() => handleRemoveTag(index)}
              badgeContent={tag}
            />
          ))}
        </div>
        {result?.error?.tags && (
          <div className="text-destructive">{result?.error?.tags}</div>
        )}
        <div className="flex items-center ">
          <input
            className="outline-none myborder w-3/4 rounded-md "
            type="text"
            id="tag"
            ref={tagInputRef}
            placeholder="Add Tags"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleAddTag();
              }
            }}
          />
          <CirclePlus onClick={handleAddTag} className="-mx-10" />
        </div>
        <FormSubmitButton />
      </form>
    </DialogComponent>
  );
}
