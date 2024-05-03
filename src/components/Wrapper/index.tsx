import "./styles.scss"; // Assuming you have a separate stylesheet
import { WrapperProps } from "../../types";


const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="wrapper" style={{width:'100vw', minHeight:'100vh'}}>
            {children}
    </div>
  );
};

export default Wrapper;
