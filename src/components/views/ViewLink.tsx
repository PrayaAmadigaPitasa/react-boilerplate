import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export interface ViewLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export default function ViewLink({ children, ...props }: ViewLinkProps) {
  return <a {...props}>{children}</a>;
}
