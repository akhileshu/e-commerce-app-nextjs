"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex gap-4 items-center justify-center flex-col border-solid border-purple-200 border-2 rounded-sm p-2">
      <h2>{error.message || "Something went wrong!"}</h2>
      <p>{error.stack}</p>

      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
