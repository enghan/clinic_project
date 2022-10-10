export  function TextIcon({text,icon}:{text:string,icon:string}){
    return(
        <div className={"flex-1 m-1"}>
            <i className={icon}></i>
            <span className={"text-700"}>{text}</span>
        </div>

    )
}
export  function TextIconStyle({text,icon,style}:{text:string,icon:string,style:any}){
    return(
        <div className={"flex-1 m-1"}>
            <i className={icon}></i>
            <span className={style}>{text}</span>
        </div>

    )
}