import "./styles.scss";

interface HomeMenuProps {
children:React.ReactNode;
}

export const HomeMenu= ({children}:HomeMenuProps) => {

    return(
        <button className="home-menu">
          {children}
        </button>
    )
}