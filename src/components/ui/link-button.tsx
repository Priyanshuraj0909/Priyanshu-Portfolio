import type { ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";

type LinkButtonProps = ComponentProps<"a"> & { variant?: "primary" | "text" };

export function LinkButton({ children, className = "", variant = "primary", ...props }: LinkButtonProps) {
  return (
    <a className={`link-button link-button--${variant} ${className}`} {...props}>
      {children}<span className="link-icon" aria-hidden="true"><ArrowUpRight size={16} strokeWidth={1.5} /></span>
    </a>
  );
}
