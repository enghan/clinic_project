import { Dropdown } from 'primereact/Dropdown';
import {useState} from "react";

export default function Filter(optionsselect:any){
    const [Values, setValues] = useState(null);

    return (
        <div>
            <h5 className={"text-3xl"}>price</h5>
            <Dropdown className={"w-20rem"}  value={Values} options={optionsselect} onChange={(e) => setValues(e.value)} />

        </div>

)
}