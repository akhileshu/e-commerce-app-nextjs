import { FormatedError } from "@/error-handling/wrap-with-try-catch";
import { cn } from "@/lib/utils";
import { ServerCrash } from "lucide-react";

function ShowError({
  error,
  className,
}: {
  error: FormatedError;
  className?: string;
}) {
  return error ? (
    <div
      className={cn(
        className,
        `flex gap-4 items-center shadow-aesthetic mx-auto max-w-xl my-4 p-4 rounded-md`
      )}
    >
      <ServerCrash className="min-w-[10%]" size={40} color="#ff5c5c" />
      <div className={`space-y-4`}>
        <p className="font-medium">{error.message}</p>
        <p className="text-red-500 text-sm">{error.name}</p>
      </div>
    </div>
  ) : null;
}

export default ShowError;
