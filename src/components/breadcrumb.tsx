import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

export function BreadcrumbComponent({
  items,
  title,
}: {
  items: string[];
  title?: string;
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem> */}
        {/* <BreadcrumbSeparator />

        <BreadcrumbItem>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </BreadcrumbItem> */}

        {/* <BreadcrumbSeparator /> */}
        <div className="flex gap-2">
          <div>{title} : </div>
          {items.map((item, index) => {
            const isLastItem = items[items.length - 1] === item;
            return (
              <>
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink>
                    {item}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {!isLastItem ? <BreadcrumbSeparator /> : null}
              </>
            );
          })}
        </div>
        {/* <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
