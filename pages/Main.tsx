
import NavBar from "../component/navBar";

export default function Main({dir,child}:{dir:string,child:any}){
    return(

        <div>
            <NavBar dir={dir}/>
            <div>{child}</div>
        </div>
    )}