import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ProjectData } from "./../types";
import { useSwipeable } from "react-swipeable";
import { useEffect } from "react";

interface SliderNavProps {
  projects: ProjectData[];
  currentProject: number;
  setCurrentProject: (index: number) => void;
  color: string;
}

export const SliderNav = ({
  projects,
  currentProject,
  setCurrentProject,
  color,
}: SliderNavProps) => {
  const nextProject = () => {
    // Use modulo to wrap around if we exceed the last index
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const prevProject = () => {
    // Add projects.length to ensure positive result before applying modulo
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextProject,
    onSwipedRight: prevProject,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextProject();
      } else if (event.key === "ArrowLeft") {
        prevProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav
      style={{
        width: "auto",
        display: "flex",
        justifyContent: "flex-end",
      }}
      {...handlers}
    >
      <button
        onClick={prevProject}
        style={{ background: "transparent", border: "none", color: color }}
      >
        <ArrowBackIcon sx={{ scale: "1.5", margin: "0  1rem 1rem 0" }} />
      </button>
      <button
        onClick={nextProject}
        style={{ background: "transparent", border: "none", color: color }}
      >
        <ArrowForwardIcon sx={{ scale: "1.5", margin: "0 0 1rem 1rem   " }} />
      </button>
    </nav>
  );
};
