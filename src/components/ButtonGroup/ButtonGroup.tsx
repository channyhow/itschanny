import "./styles.scss";

interface ButtonGroupProps {
children:React.ReactNode;
}

export  const ButtonGroup = ({children}:ButtonGroupProps) => {

    // const navigationInfos =[
    //     {label:"hello",url:"/"},
    //     {label:"how",url:"/"},
    //     {label:"are",url:"/"},
    //     {label:"you",url:"/"}
    // ]

    return(
        <button className="button-group">
          {children}
        </button>
    )
}