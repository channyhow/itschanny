import "./styles.scss";

interface ButtonProps {
children:React.ReactNode;
}

export const Button= ({children}:ButtonProps) => {

    return(
        <button className="button">
          {children}
        </button>
    )
}