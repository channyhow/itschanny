import Wrapper from "./components/Wrapper";
import WrapperScroller from "./components/WrapperScroller";
import Body from "./components/Body";
import pagesContent from "./data/pagesContent.json";
// import { getSectionClassNames } from "./utils/classNameGenerator";
// import { getPinSpacerStyle } from "./utils/styleUtils";
import { CurrentSectionProvider } from "./components/CurrentSectionProvider";

function App() {
  return (
    <CurrentSectionProvider>
    <Wrapper>
      <WrapperScroller>
          <Body sections={pagesContent.sections} />
      </WrapperScroller>
    </Wrapper>
    </CurrentSectionProvider>
  );
}

export default App;
