import { cn } from "@/lib/utils";
import {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  LegacyRef,
  ReactNode,
} from "react";

export const ContainerWithHeading = ({
  className,
  children,
  heading,
}: {
  children: ReactNode;
  heading: string;
  className?: string;
}) => {
  return (
    <div className={cn(`rounded-md m-4 p-2 shadow-standard`,className)}>
      <p className="text-xl md:text-2xl pl-2 mt-2 ml-2 mb-4 border-l-4  font-sans font-medium border-teal-400  dark:text-gray-200">
        {heading}
      </p>
      {children}
    </div>
  );
};

export const Field = ({
  children,
  className,
  error,
}: {
  children: ReactNode;
  className?: string;
  error?: string[];
}) => {
  return (
    <div className={cn(className, "flex items-center")}>
      {children}
      {error ? <div className="text-destructive text-sm">{error}</div> : null}
    </div>
  );
};

interface FieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  labelText: string;
}
export const FieldLabel: React.FC<FieldLabelProps> = ({
  children,
  labelText,
  className,
  ...props
}) => {
  return (
    <label className={cn(className, "text-sm min-w-36")} {...props}>
      {labelText}
    </label>
  );
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  myRef?: LegacyRef<HTMLInputElement>;
}

export const FieldInput: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "outline-none min-w-72 m-2 px-2 py-1 border-solid border-[1px] border-teal-400 rounded-md",
        className
      )}
      {...props}
      ref={props.myRef}
    />
  );
};
