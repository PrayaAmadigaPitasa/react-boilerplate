import { CSSClassNameType } from "../../types";

export function getClassName(className: CSSClassNameType | CSSClassNameType[]) {
  return typeof className === "string" ? className : className.join(" ");
}
