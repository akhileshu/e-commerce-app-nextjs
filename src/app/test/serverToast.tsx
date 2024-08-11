// unable to show toast on server component
// so use this
"use client";

import { X } from "lucide-react";
import React, { useState } from "react";

export function ServerToast({
  type,
  message,
  description,
}: {
  type: "success" | "error";
  message: string;
  description?: string;
}) {
  const [hide, setHide] = useState(false);
  setTimeout(() => {
    // setHide(true);
  }, 10000);
  return (
    <div
      className={`shadow-aesthetic ${
        hide ? "hidden" : null
      } flex justify-between sticky top-2 z-10 border-solid border-[1px]   items-center rounded-sm my-2  mx-auto p-2 max-w-sm   ${
        type === "success"
          ? "bg-green-300 border-green-400"
          : "bg-red-300 border-red-400"
      }`}
    >
      <div>
        <p className="font-medium">{message}</p>
        <p className="text-sm">{description}</p>
      </div>
      <button
        onClick={() => setHide(true)}
        className="bg-white rounded-full p-1"
      >
        <X size={15} />
      </button>
    </div>
  );
}

export default ServerToast;
