import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { MutableRefObject, ReactNode, RefObject } from "react";

export function DialogComponent({
  triggerText,
  description,
  saveTitle,
  onSave,
  children,
  dialogCloseRef,
  className,
  triggerComponent,
}: {
  triggerText: String;
  description: String;
  saveTitle: String;
  className?: String;
  onSave?: () => void;
  children: ReactNode;
  triggerComponent?: ReactNode;
  dialogCloseRef: RefObject<HTMLButtonElement>;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerComponent ?? <Button variant="outline">{triggerText}</Button>}
      </DialogTrigger>
      <DialogContent className={cn(className, "sm:max-w-[425px]")}>
        <DialogHeader>
          <DialogTitle>{triggerText}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose asChild>
            <button ref={dialogCloseRef}></button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
