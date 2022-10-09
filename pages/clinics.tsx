import { Card } from 'primereact/card'
import {offers} from "../constatnt/data";
import {Tag} from 'primereact/tag';
import {FormattedMessage} from "react-intl";
import {Button} from 'primereact/button';
import React, {useState} from "react";
import {Dialog} from 'primereact/dialog';
import {Accordion,AccordionTab} from 'primereact/accordion';
import textIcon from "../component/taextIcon";
import TextIcon from "../component/taextIcon";
import {Divider} from 'primereact/divider';
import {Carousel} from 'primereact/carousel';
import {useRecoilState} from "recoil";
import {myDirectionState} from "../component/Atoms/directionAtoms";


export default function Clinics() {
    const [dirState, setDirState] = useRecoilState(myDirectionState);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const itemTemplate = () => {
         return <img alt="Card" src='https://www.primefaces.org/primereact/images/usercard.png'/>
             ;
    }

    return(
    <div dir={dirState} className={"m-4  text-center"}>
        <section> <span className="block text-5xl font-bold mb-4 ">Clinic Name</span></section>


        <Carousel value={offers}  itemTemplate={itemTemplate} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions}></Carousel>
    </div>
)

}