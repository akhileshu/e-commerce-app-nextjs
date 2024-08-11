import { toast } from "sonner";
import { X } from "lucide-react";

export function successToast(message: string, description?: string) {
  return toast.success(message, {
    position: "top-center",
    description: description || undefined,
    cancel: {
      label: "ok",
      onClick: () => {},
    },
  });
}
export function errorToast(message: string, description?: string) {
  return toast.error(message, {
    position: "top-center",
    description: description || undefined,
    cancel: {
      label: "OK",
      onClick: () => {},
    },
  });
}
