import { TabView, TabPanel } from 'primereact/tabview';
import {Button} from 'primereact/button';
import Link from "next/link";
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import {myDirectionState} from "../component/Atoms/directionAtoms";
import NavBar from "../component/navBar";
import React from "react";


export default function Welcome(){
    const {locale} = useRouter();
    const [dirState, setDirState] = useRecoilState(myDirectionState);
    const divRef = React.useRef<NavBar>(null);
    function setDirection() {
        debugger
        setDirState({...dirState, dir: (locale  === "ar"?"rtl":"ltr")})

    }
    return(

        <div  className="grid grid-nogutter surface-0 text-800">
            <div ref={divRef} style={{ display: "none" }} />;
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                <section>
                    <span className="block text-6xl font-bold mb-1">Create the screens your</span>
                    <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
                    <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link href="./Main" locale={'en'}>
                        <Button type="button" onClick={setDirection} className="p-button-outlined w-3 m-2" label="English" />

                    </Link>
                    <Link href="./Main" locale={'ar'}>
                        <Button type="button" onClick={setDirection} className="mr-3 p-button-raised w-3 m-2" label="عربي"/>
                    </Link>

                </section>
            </div>
            <div className="col-12 md:col-6 h-full overflow-hidden">
                <img src="https://www.primefaces.org/primeblocks-react/assets/images/blocks/hero/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
            </div>
        </div>

)}