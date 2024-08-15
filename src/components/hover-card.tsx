import { CalendarDays } from "lucide-react";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function HoverCardComponent({
  triggerComponent,
  triggerText,
  children: content,
  className,
}: {
  triggerComponent?: ReactNode;
  triggerText?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <HoverCard>
        <HoverCardTrigger asChild>
          {triggerComponent ?? <Button variant="link">{triggerText}</Button>}
        </HoverCardTrigger>
        <HoverCardContent className="w-80">{content}</HoverCardContent>
      </HoverCard>
    </div>
  );
}
