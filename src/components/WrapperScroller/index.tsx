// import Logo from '../Logo';
import { WrapperScrollerProps } from "../../types";
// import Footer from "../Footer";
// import Header from "../Header";
// import PinSpacer from "../PinSpacer";
import "./styles.scss";

export default function WrapperScroller({ children }: WrapperScrollerProps) {
  return (
    <div className="wrapper__scroller">
      <div className="scroll-content">{children}</div>
    </div>
  );
}
