
import {Button} from 'primereact/button';
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import {myDirectionState} from "../Atoms/directionAtoms";
import NavBar from "../component/navBar";
import React from "react";
import Router from "next/router";


export default function Welcome(){
    const {locale} = useRouter();
    const [dirState, setDirState] = useRecoilState(myDirectionState);
    function setDirection(lang:string) {
        debugger
        setDirState(lang  === "ar"?"rtl":"ltr")
        Router.push( `${lang}/main` );
    }
    return(

        <div className="grid grid-nogutter surface-section text-800">
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                <section>
                    <span className="block text-6xl font-bold mb-1">Create the screens your</span>
                    <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
                    <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <Button type="button" onClick={()=>setDirection("en")} className="p-button-outlined w-3 m-2" label="English" />

                    <Button type="button" onClick={()=>setDirection("ar")} className="mr-3 p-button-raised w-3 m-2" label="عربي"/>


                </section>
            </div>
            <div className="col-12 md:col-6 overflow-hidden">
                <img src="https://www.primefaces.org/primeblocks-react/assets/images/blocks/hero/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
            </div>
        </div>

)}