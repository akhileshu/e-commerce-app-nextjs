
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ReactNode } from "react";

export function DropdownMenuComponent({trigger,children:content}:{trigger:ReactNode,children:ReactNode}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button variant="outline">{trigger}</Button> */}
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">{content}</DropdownMenuContent>
    </DropdownMenu>
  );
}
