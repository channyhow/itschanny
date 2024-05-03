import { NavLink } from "react-router-dom";
import { ButtonGroup } from "./ButtonGroup/ButtonGroup";

// interface NavigationProps {
// label:string;
// url:string
// }

export const Navigation = () => {
  const navigationInfos = [
    { label: "hello", url: "/" },
    { label: "how", url: "/" },
    { label: "are", url: "/" },
    { label: "you", url: "/" },
  ];

  return (
    <nav
      className="navigation"
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      {navigationInfos.map((item) => (
        <NavLink to={item.url} key={item.label}>
          <ButtonGroup>
            <h4>{item.label}</h4>
          </ButtonGroup>
        </NavLink>
      ))}
    </nav>
  );
};
