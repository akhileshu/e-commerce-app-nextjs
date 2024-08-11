import { useRef } from "react";

export function useDialogControl() {
  const dialogCloseRef = useRef<HTMLButtonElement>(null);

  const closeDialog = () => {
    if (dialogCloseRef.current) {
      dialogCloseRef.current.click();
    }
  };

  return {
    dialogCloseRef,
    closeDialog,
  };
}
