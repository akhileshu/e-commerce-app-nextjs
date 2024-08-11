"use client";
import { CircleArrowRight } from "lucide-react";
import { useRef, useState } from "react";

export function AddChildrenCategoryCount({
  parentCategoryName,
  handleSetCount,
}: {
  parentCategoryName: string;
  handleSetCount:(count:number)=>void;
}) {

  const countInputRef = useRef<HTMLInputElement>(null);


  return (
    <div className="flex items-center gap-2">
      <label className="text-xs" htmlFor="">
        No Of Categories
      </label>
      <input
        className="myborder w-20 rounded-sm"
        min={1}
        max={10}
        type="number"
        name=""
        id=""
        ref={countInputRef}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            handleSetCount(parseInt(countInputRef.current?.value || "1"));
          }
        }}
      />
      <CircleArrowRight
        onClick={() =>
          handleSetCount(parseInt(countInputRef.current?.value || "1"))
        }
      />
      <p>
        <span>add children categories under</span> {parentCategoryName}
      </p>
    </div>
  );
}
