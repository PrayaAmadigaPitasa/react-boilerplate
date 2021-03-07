import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CSSClassNameType } from "@types";

export interface ViewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: CSSClassNameType;
}

export default function View({ ...props }: ViewProps) {
  return <div {...props} />;
}
