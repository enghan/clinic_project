export default function TextIcon({text,icon}:{text:string,icon:string}){
    return(
        <div className={"flex-1 m-1"}>
            <i className={icon}></i>
            <span className={"text-700"}>{text}</span>
        </div>

    )
}