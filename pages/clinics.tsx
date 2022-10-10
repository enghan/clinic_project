import { Card } from 'primereact/card'
import {offers} from "../constatnt/data";
import {Tag} from 'primereact/tag';
import {FormattedMessage} from "react-intl";
import {Button} from 'primereact/button';
import React, {useState} from "react";
import {Dialog} from 'primereact/dialog';
import {Accordion,AccordionTab} from 'primereact/accordion';
import  {TextIconStyle} from "../component/taextIcon";
import {Divider} from 'primereact/divider';
import {Carousel} from 'primereact/carousel';
import {useRecoilState} from "recoil";
import {myDirectionState} from "../Atoms/directionAtoms";
import {GMap} from 'primereact/gmap';
import {imageClinic, responsiveOptions, serviceClinic} from '../component/clinicData';
import {DataScroller} from 'primereact/datascroller';
import {DataView} from 'primereact/DataView';
import {Rating} from 'primereact/rating';
import {Dropdown} from "primereact";


export default function Clinics() {
    const [dirState, setDirState] = useRecoilState(myDirectionState);



    return(
    <div dir={dirState} className={"m-4 justify-content-center align-items-center  text-center"}>
        <section>
            <span className="block text-5xl font-bold mb-4 ">Clinic Name</span>
            <span className="block text-3xl  mb-4 ">Clinic service brief</span>
        </section>
        <Carousel value={offers}  itemTemplate={imageClinic} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions}></Carousel>


<div dir={dirState} className={"w-full  mt-8"}>
    <span className={"block text-5xl font-bold mb-6 "}>Contact us</span>

    <div className={"flex-1  px-5 py-2"}>
        <TextIconStyle text={"sparkle page"} style={"text-blue-700 font-medium p-3 text-xl"} icon={"pi pi-facebook m-2 text-blue-700 text-2xl"}/>
        <TextIconStyle text={"mazzeh vilat"} style={"text-900 font-medium p-3 text-xl"} icon={"pi pi-map-marker m-2 text-blue-700 text-2xl"}/>
        <TextIconStyle text={"0988888888"} style={"text-900 font-medium p-3 text-xl"} icon={"pi pi-phone m-2 text-blue-700 text-2xl"}/>
        <TextIconStyle text={"0988888888"} style={"text-blue-800 font-medium p-3 text-xl"} icon={"pi pi-telegram m-2 text-blue-800 text-2xl"}/>
        <TextIconStyle text={"0988888888"} style={"text-green-500 font-medium p-3 text-xl"} icon={"pi pi-whatsapp m-2 text-green-500  text-2xl"}/>

    </div>
   <div dir={dirState} className={"grid mt-8"}>

       <div className={"col-12 lg:col-2 text-center lg:text-left"}>
           <span className={"tblock text-5xl font-bold mb-6"}>Our Service</span>
           <p className={"text-600 font-normal mt-3"}>thi is most of our service</p>
       </div>

       <div className={"col-12 lg:col w-full lg:w-9 lg:ml-7 lg:-mt-4"}>
           <Carousel dir={dirState} value={offers}  itemTemplate={serviceClinic} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} ></Carousel>

       </div>
   </div>
</div>




          </div>

)

}