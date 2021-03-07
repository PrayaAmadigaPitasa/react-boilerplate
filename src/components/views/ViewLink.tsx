import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { CSSClassNameType } from "@types";

export interface ViewLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  className?: CSSClassNameType;
}

export default function ViewLink({ children, ...props }: ViewLinkProps) {
  return <a {...props}>{children}</a>;
}
