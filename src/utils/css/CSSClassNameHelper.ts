import { CSSClassNameType } from "../../types";

export function getClassName(
  className?: CSSClassNameType | CSSClassNameType[]
) {
  return className !== undefined
    ? typeof className === "string"
      ? className
      : className.join(" ")
    : undefined;
}
