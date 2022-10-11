import {offers} from "../constatnt/data";
import React from "react";
import {TextIconStyle} from "../component/taextIcon";
import {Carousel} from 'primereact/carousel';
import {useRecoilState} from "recoil";
import {myDirectionState} from "../Atoms/directionAtoms";
import {imageClinic, responsiveOptions, serviceClinic} from '../component/clinicData';


export default function Clinics() {
    const [dirState, setDirState] = useRecoilState(myDirectionState);


    return (
        <div dir={dirState} className={"m-4 justify-content-center align-items-center  text-center"}>
            <section>
                <span className="block text-5xl font-bold mb-3 ">Clinic Name</span>
                <span className="block text-3xl text-700 mb-4 ">Clinic service brief</span>
            </section>
            <Carousel value={offers} itemTemplate={imageClinic} numVisible={3} numScroll={1}
                      responsiveOptions={responsiveOptions}></Carousel>


            <div dir={dirState} className={"h-23rem flex  mt-8 "}>
                <img alt="Card" className={"w-full"}
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9xM2-4vhzph9mWgCcFNam1fSwP5L8-fYOJqdpP-k8Wq9orsShugs_MEyzPGlizs1nmHQ&usqp=CAU'/>
                <div className={"flex-1"}>

                    <span className={"  text-5xl font-bold "}>Contact us</span>

                    <div className={"w-23rem py-1"}>
                        <TextIconStyle text={"sparkle page"} style={"text-blue-700 font-medium p-3 text-xl"}
                                       icon={"pi pi-facebook m-2 text-blue-700 text-2xl"}/>
                        <TextIconStyle text={"mazzeh vilat"} style={"text-900 font-medium p-3 text-xl"}
                                       icon={"pi pi-map-marker m-2 text-blue-700 text-2xl"}/>
                        <TextIconStyle text={"0988888888"} style={"text-900 font-medium p-3 text-xl"}
                                       icon={"pi pi-phone m-2 text-blue-700 text-2xl"}/>
                        <TextIconStyle text={"0988888888"} style={"text-blue-800 font-medium p-3 text-xl"}
                                       icon={"pi pi-telegram m-2 text-blue-800 text-2xl"}/>
                        <TextIconStyle text={"0988888888"} style={"text-green-500 font-medium p-3 text-xl"}
                                       icon={"pi pi-whatsapp m-2 text-green-500  text-2xl"}/>


                    </div>
                </div>

            </div>
            <div dir={dirState} className={"grid mt-8"}>

                <div className={"col-12 lg:col-2 text-center lg:text-left"}>
                    <span className={"tblock text-5xl font-bold mb-6"}>Our Service</span>
                    <p className={"text-700 font-normal mt-3"}>thi is most of our service</p>
                </div>

                <div className={"col-12 lg:col w-full lg:w-9 lg:ml-7 lg:-mt-4"}>
                    <Carousel dir={dirState} value={offers} itemTemplate={serviceClinic} numVisible={3} numScroll={1}
                             responsiveOptions={responsiveOptions}></Carousel>

                </div>
            </div>
        </div>


    )

}