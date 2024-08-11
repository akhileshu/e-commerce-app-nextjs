import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

function ShowInfo({
  info,
  className,
}: {
  info: { message: string; description?: string };
  className?: string;
}) {
  return info ? (
    <div
      className={cn(
        className,
        `flex gap-4 items-center shadow-aesthetic mx-auto max-w-xl my-4 p-4 gap-4 rounded-md`
      )}
    >
      <Info size={40} className="text-teal-400" />
      <div className={`flex flex-col gap-4`}>
        <p className="font-medium">{info.message}</p>
        {info.description ? (
          <p className="text-teal-400 text-sm">{info.description}</p>
        ) : null}
      </div>
    </div>
  ) : null;
}

export default ShowInfo;
