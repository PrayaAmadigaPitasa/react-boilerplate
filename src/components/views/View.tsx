import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ViewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function View({ ...props }: ViewProps) {
  return <div {...props} />;
}
