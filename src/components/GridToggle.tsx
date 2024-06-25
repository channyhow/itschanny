import React, { useState } from 'react';
import { CSSProperties } from 'react';
import ContrastSharpIcon from "@mui/icons-material/ContrastSharp";

interface GridToggleProps {
    sectionColor: string;
    toggleGrid: (value: boolean) => void;
}

const GridToggle: React.FC<GridToggleProps> = ({ sectionColor, toggleGrid }) => {
    const [gridOn, setGridOn] = useState(false);

    const handleGridToggle = () => {
        setGridOn(!gridOn);
        toggleGrid(!gridOn);
    };

    const buttonStyle: CSSProperties = {
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        cursor: "pointer",
        backgroundColor: "transparent",
        color: gridOn ? "rgb(214 243 55)" : sectionColor,
        transition: "all 0.5s ease",
        border: "none",
        whiteSpace: "nowrap",
    };

    const buttonText: CSSProperties = {
        transition: "color 0.5s ease",
    };

    return (
        <button onClick={handleGridToggle} style={buttonStyle}>
            <h5 style={buttonText}>
                <ContrastSharpIcon />
            </h5>
        </button>
    );
};

export default GridToggle;
