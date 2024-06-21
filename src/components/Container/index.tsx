import { CSSProperties } from "react";
import { ContainerProps } from "../../types";
import { useMediaQuery } from "@mui/material";
// import { useTranslation } from "react-i18next";


const Container: React.FC<ContainerProps> = ({

  children
}) => {
  // const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:425px)");

  const containerStyle: CSSProperties = {
    width: isMobile?"100%":"80%",
    minWidth: "300px",
    maxWidth: "1000px",    
    display: "flex",
    flexDirection: "column",
    justifyContent:'center',
    alignItems:'center'
  };
  return (
    <div style={containerStyle}>
            {/* <h1
        style={{
          // transform: isMobile ? "" : "rotate(270deg)",
          // transformOrigin: isMobile ? "" : "center center",
          zIndex: "50",
          textAlign: 'left',
          width: '100%',
          marginBottom: '20px'
        }}
      >
        {t(`${title}`)}
      </h1> */}
      {children}
    </div>
  );
};

export default Container;
