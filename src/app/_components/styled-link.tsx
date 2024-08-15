import { cn } from "@/lib/utils";
import Link from "next/link";

export const StyledLink = ({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) => {
  return (
      <Link
        className={cn('hover:bg-teal-500 w-fit bg-teal-400 px-2 text-white py-1 rounded-md ',className)}
        href={href}
      >
        {text}
      </Link>
  );
};
