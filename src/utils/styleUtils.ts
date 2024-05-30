// src/utils/styleUtils.js

export const getPinSpacerStyle = (sectionId:string) => {
    const baseStyle = {
      backgroundColor: "#ceca4d", // default background color
      justifyContent: "flex-start",
      color: "black" // default text color
    };
  
    // Customize style based on section
    switch (sectionId) {
      case "home":
        return {
          ...baseStyle,
          backgroundColor: "transparent", // white background for home
          color: "blue" // blue text for home
        };
      case "about":
        return {
          ...baseStyle,
          backgroundColor: "hotpink", // specific background for about
          color: "green" // green text for about
        };
      case "projects":
        return {
          ...baseStyle,
          backgroundColor: "#C082B9", // specific background for projects
          color: "red" // red text for projects
        };
      default:
        return baseStyle; // default styling
    }
  };
  