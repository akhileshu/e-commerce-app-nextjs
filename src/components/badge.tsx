import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CircleX } from "lucide-react";

export function BadgeComponent({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return <Badge className={cn(className)}>{content}</Badge>;
}
export function BadgeComponentWithDelete({
  badgeContent,
  onDelete,
  className,
}: {
  badgeContent: String;
  onDelete: () => void;
  className?: String;
}) {
  return (
    <Badge className={cn(className)}>
      {badgeContent}
      <CircleX onClick={onDelete} className="ml-2" size={"20px"} />
    </Badge>
  );
}
