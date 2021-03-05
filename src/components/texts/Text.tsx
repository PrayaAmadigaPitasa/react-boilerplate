import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FONT_FAMILY_MAP } from "../../consts";
import { FontWeightType } from "../../types";

export interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  fontWeight?: FontWeightType;
}

export default function Text({
  fontWeight = "regular",
  style,
  ...props
}: TextProps) {
  return (
    <p
      {...props}
      style={{ fontFamily: FONT_FAMILY_MAP[fontWeight], ...style }}
    />
  );
}
