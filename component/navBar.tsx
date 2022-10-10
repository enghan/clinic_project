import {useState} from 'react';
import {FormattedMessage} from "react-intl";
import {Image} from 'primereact/image';
import {InputText} from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import {Menubar} from 'primereact/menubar';
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import {myDirectionState} from "../Atoms/directionAtoms";




export default function NavBar() {
    const [value, setValue] = useState('');
    const router=useRouter();
    const items = [
        {
            label: <FormattedMessage id={'offers'}/>,
            className: 'xl:mr-6 text-xl',
            icon: 'pi pi-fw pi-gift ',
            command: (event) => {
                router.replace("./offers");
            }
        },
        {
            label: <FormattedMessage id={'clinics'}/>,
            className: 'xl:mr-6 text-xl',
            icon: 'pi pi-fw pi-flag-fill',
            command: (event) => {
                router.replace("./clinics");
            }
        },
        {
            label: <FormattedMessage id={'favorite'}/>,
            className: 'xl:mr-6 text-xl',
            icon: 'pi pi-fw pi-heart-fill',
            command: (event) => {
                router.replace("./favorite");
            }
        },
        {label: <FormattedMessage id={'settings'}/>, className: 'xl:mr-6 text-xl', icon: 'pi pi-fw pi-cog', command: (event) => {
                router.replace("./favorite");
            }}
    ];
    const [dirState, setDirState] = useRecoilState(myDirectionState);
    return (

        <div className="card shadow-2" dir={dirState}>
            <Menubar
                className={"p-2"}
                model={items}
                start={<div className="  p-2 ">
                    <Image src="https://www.primefaces.org/primeblocks-react/assets/images/blocks/logos/bastion-700.svg"
                           alt="Image Text"/>
                </div>}
                end={<div className=" p-2 ">
                    {dirState === "ltr" ? <span className="p-float-label p-input-icon-left">
                         <i className="pi pi-search"/>
                           <InputText className={'border-round-xl '} id="search" value={value}
                                      onChange={(e) => setValue(e.target.value)}/>
                              <label htmlFor="search">{<FormattedMessage id={'search'}/>}</label>
                             </span>
                        : <span className="p-float-label p-input-icon-right xl:right-100 sm:right-50"> <i
                            className="pi pi-search"/>
                           <InputText className={'border-round-xl  '} id="search" value={value}
                                      onChange={(e) => setValue(e.target.value)}/>
                              <label htmlFor="search">{<FormattedMessage id={'search'}/>}</label>
                             </span>}
                </div>}

            />
        </div>

        //
        // <div className="grid w-full   h-7rem shadow-2 justify-content-between ">
        //     <div className="p-4 col-2 mt-4  ">
        //         <Image src="https://www.primefaces.org/primeblocks-react/assets/images/blocks/logos/bastion-700.svg"
        //                alt="Image Text"/></div>
        //     <div className="  md:hidden lg:block sm:hidden">{items.map((item) => (
        //         <Button label={item.label} icon={item.icon} onClick={()=>openTab(item.link)}
        //                 className={" border-transparent border-round-xs mt-5 mr-3  text-500 surface-0 text-xl font-medium "}/>
        //     ))}
        //     </div>
        //
        //     {/*  <div className=" mt-3 p-3 sm:col ">*/}
        //     {/*      <span className="p-float-label">*/}
        //     {/* <InputText  className={'border-round-xl w-6 sm:w-8 '} id="search" value={value}*/}
        //
        //     {/*            onChange={(e) => setValue(e.target.value)}/>*/}
        //     {/* <label htmlFor="search" >{<FormattedMessage  id={'search'}/>} </label>*/}
        //     {/*</span>*/}
        //     {/*  </div>*/}
        //     <div className=" mt-3 p-3  lg:col-3 md:col-2  sm:col">
        //                 <span className="p-float-label p-input-icon-left">
        //                     <i className="pi pi-search"/>
        //                     <InputText className={'border-round-xl  '} id="search" value={value}
        //                                onChange={(e) => setValue(e.target.value)}/>
        //                     <label htmlFor="search">{<FormattedMessage id={'search'}/>}</label>
        //                 </span>
        //     </div>
        //     <div className=" mt-4 p-3 lg:hidden xl:hidden ">
        //         <i className=" pi pi-bars mr-2" onClick={returnMenu} style={{'fontSize': '2em'}}></i>
        //
        //     </div>
        // </div>
    );
}