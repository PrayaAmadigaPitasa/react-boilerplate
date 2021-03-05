export interface ViewProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export default function View({ ...props }: ViewProps) {
  return <div {...props} />;
}
