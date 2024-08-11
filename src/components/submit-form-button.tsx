import LoadingSpinner from "@/app/_components/loading-spinner";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export function FormSubmitButton({
  variant = "button",
  className,
  label = "Submit",
}: {
  variant?: "text" | "button";
  className?: string;
  label?: string | ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      {variant === "button" ? (
        <button
          type="submit"
          className={cn(
            "hover:bg-teal-500 min-w-20 bg-teal-400 px-2 text-white py-1 rounded-md",
            className
          )}
          aria-disabled={pending}
          disabled={pending}
        >
          {pending ? <LoadingSpinner/> : <>{label}</>}
        </button>
      ) : (
        <button
          type="submit"
          className={cn(
            "bg-transparent border-none min-w-20 p-0 m-0 cursor-pointer outline-none",
            className
          )}
          aria-disabled={pending}
          disabled={pending}
        >
          {pending ? <LoadingSpinner /> : <>{label}</>}
        </button>
      )}
    </>
  );
}
