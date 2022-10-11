import React from "react";
import {Rating} from 'primereact/rating';
import {Card} from 'primereact/card'
import {Button} from 'primereact/button';
import {FormattedMessage} from "react-intl";
import ServiceDetails from "../pages/service_details";
import {useRouter} from "next/router";

export const responsiveOptions = [
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

export function imageClinic() {
    return <img alt="Card" className={"m-3 border-2"} src='https://www.primefaces.org/primereact/images/usercard.png'/>
        ;
}

export function serviceClinic(ratingValue: number, serviceName: string, serviceImage: string) {
    const router=useRouter();
    serviceImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8S-PRQ8_TOZ9pffqCKs8Lq8fuDtA3zk_t8Jgt9yUKi1Hvl5uBCpuWJ2sQSnaYvhb4sRk&usqp=CAU"
    return (
        <Card className={"m-3"}>
            <div className={"p-2"}>
                <div className={"shadow-2 p-4 surface-card border-round"}>
                    <img className={"w-full"} src={serviceImage}/>
                    <div className={"flex justify-content-between align-items-center mb-3"}>
                        <Rating className={"mt-3"} value={ratingValue} cancel={false}/>
                        <span className={"text-900 font-medium mt-3"}>Dui id ornare</span>

                    </div>
                    <Button onClick={()=> router.replace("./service_details")} label={<FormattedMessage id={'detail'}/>}
                            className="p-button-raised p-button-text text-700 "/>
                </div>
            </div>
        </Card>

    )

}