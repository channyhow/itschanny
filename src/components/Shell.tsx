import { ShellProps } from "../types";

export const Shell = ({
  className,
  children,
  display,
  flexDirection,
  padding,
  alignItems,
  width,
  height,
}: ShellProps) => {
  const shellStyle = {
    display,
    flexDirection,
    padding,
    alignItems,
    width,
    height,
  };
  return (
    <div style={shellStyle} className={className}>
      {" "}
      {children}
    </div>
  );
};
