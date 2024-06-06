import { ShellProps } from "../types";

export const Shell = ({
  className,
  children,
  display,
  flexDirection,
  justifyContent,
  padding,
  alignItems,
  width,
  height,
  maxWidth
}: ShellProps) => {
  const shellStyle = {
    display,
    justifyContent,
    flexDirection,
    padding,
    alignItems,
    width,
    height,
    maxWidth

  };
  return (
    <div style={shellStyle} className={className}>
      {" "}
      {children}
    </div>
  );
};
