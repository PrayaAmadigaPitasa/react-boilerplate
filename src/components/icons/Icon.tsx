import { CSSClassNameType, IconType } from "../../types";
import { getClassName } from "../../utils";

// @ts-ignore
// override classname type and add array value.
export interface IconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  prefix?: string;
  type: IconType;
  className?: CSSClassNameType | CSSClassNameType[];
}

export default function Icon({
  prefix = "icon-",
  type,
  className,
  ...props
}: IconProps) {
  return (
    <i {...props} className={`${getClassName(className)} ${prefix}${type}`} />
  );
}
