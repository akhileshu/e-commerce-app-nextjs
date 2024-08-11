"use client";
import { parentCategoryType } from "@/types/category";
import { CirclePlus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { addCategoryChildren } from "../../actions/add-children-categories";
import { BadgeComponentWithDelete } from "@/components/badge";

export function AddCategoriesComponent({
  parentCategory,
  count,
}: {
  parentCategory: parentCategoryType;
  count: number;
}) {
  const prefill = {
    name: "",
    slug: "some slug",
    description: "",
    metadata: "",
    tags: [],
  };
  const [categories, setCategories] = useState<
    {
      name: string;
      slug: string;
      description: string;
      metadata: string;
      tags: string[];
    }[]
  >(Array.from({ length: count }, () => prefill));

  //todo: need to work on this feature of multiple forms on change of count
  // useEffect(() => {
  //   setCategories(() => Array.from({ length: count }, () => prefill));
  // }, [count, prefill]);

  const [error, formAction] = useFormState(addCategoryChildren, null);

  const tagInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleAddCategory = () => {
    setCategories((prevCategories) => [...prevCategories, prefill]);
  };

  const handleRemoveCategory = (index: number) => {
    setCategories((prevCategories) =>
      prevCategories.filter((_, i) => i !== index)
    );
  };

  const handleInputChange = (index: number, field: string, value: string) => {
    setCategories((prevCategories) =>
      prevCategories.map((category, i) =>
        i === index ? { ...category, [field]: value } : category
      )
    );
  };

  const handleAddTag = (index: number) => {
    const newTag = tagInputRefs.current[index]?.value;

    if (newTag) {
      const updatedCategories = categories.map((category, i) =>
        i === index
          ? { ...category, tags: [...category.tags, newTag] }
          : category
      );
      setCategories(updatedCategories);
      tagInputRefs.current[index]!.value = "";
      tagInputRefs.current[index]!.focus();
    }
  };

  const handleRemoveTag = (categoryIndex: number, tagIndex: number) => {
    setCategories((prevCategories) =>
      prevCategories.map((category, i) =>
        i === categoryIndex
          ? {
              ...category,
              tags: category.tags.filter((_, j) => j !== tagIndex),
            }
          : category
      )
    );
  };

  return (
    <>
      <form
        action={(formData: FormData) => {
          formData.append("categories", JSON.stringify(categories));
          formData.append("parentCategoryId", parentCategory.id);
          // console.log(Object.fromEntries(formData.entries()));
          formAction(formData);
        }}
      >
        <div className="flex gap-2 flex-wrap">
          {categories.map((category, index) => (
            <div key={index} className="myborder mb-4 border-b pb-4 w-1/4">
              <input
                className="outline-none myborder rounded-md w-[90%]"
                type="text"
                value={category.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
                placeholder="Enter name"
              />
              {error?.name && (
                <div className="text-destructive">{error?.name}</div>
              )}
              <textarea
                placeholder="Enter description"
                className="outline-none myborder w-[90%] rounded-md"
                value={category.description}
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }
              ></textarea>
              {error?.description && (
                <div className="text-destructive">{error?.description}</div>
              )}
              <textarea
                placeholder="Enter Metadata Description"
                className="outline-none myborder w-[90%] rounded-md"
                value={category.metadata}
                onChange={(e) =>
                  handleInputChange(index, "metadata", e.target.value)
                }
              ></textarea>
              {error?.metadata && (
                <div className="text-destructive">{error?.metadata}</div>
              )}
              <div className="flex gap-2 flex-wrap">
                {category.tags.map((tag, tagIndex) => (
                  <BadgeComponentWithDelete
                    key={tagIndex}
                    onDelete={() => handleRemoveTag(index, tagIndex)}
                    badgeContent={tag}
                  />
                ))}
              </div>
              {error?.tags && (
                <div className="text-destructive">{error?.tags}</div>
              )}

              <div className="flex items-center">
                <input
                  className="outline-none myborder w-3/4 rounded-md"
                  type="text"
                  id={`tag-${index}`}
                  ref={(el) => (tagInputRefs.current[index] = el)}
                  placeholder="Add Tags"
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      handleAddTag(index);
                    }
                  }}
                />
                <CirclePlus
                  onClick={() => handleAddTag(index)}
                  className="-mx-10"
                />
              </div>
              <button
                type="button"
                onClick={() => handleRemoveCategory(index)}
                className="myborder rounded-md mt-2"
              >
                Remove Category
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={handleAddCategory}
          className="myborder rounded-md"
        >
          Add Category
        </button>
        <SubmitButton />
      </form>
    </>
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
      {pending ? "..." : "Save All Categories"}
    </button>
  );
}
