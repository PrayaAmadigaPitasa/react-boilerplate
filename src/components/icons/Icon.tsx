export interface IconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export default function Icon({ ...props }: IconProps) {
  return <i {...props} />;
}
