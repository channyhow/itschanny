import { WrapperScrollerProps } from "../../types";
import "./styles.scss";

export default function WrapperScroller({ children }: WrapperScrollerProps) {
  return (
    <div className="wrapper__scroller">
      <div className="scroll-content">{children}</div>
    </div>
  );
}
