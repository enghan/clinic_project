import {Button} from 'primereact/button';
import {useState} from "react";
import {offers} from "../constatnt/data";
import {Card} from "primereact/card";
import {Tag} from "primereact/tag";
import {FormattedMessage} from "react-intl";
import {Dialog} from "primereact/dialog";
import {Accordion, AccordionTab} from "primereact/accordion";
import {TextIcon} from "../component/taextIcon";
import {Divider} from "primereact/divider";
import {useRecoilState} from "recoil";
import {myDirectionState} from "../Atoms/directionAtoms";
import { Dropdown } from 'primereact/Dropdown';
import Filter from "../component/filter";

export default function Offers() {
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [position, setPosition] = useState('center');
    const [activeIndex, setActiveIndex] = useState(null);
    const [dirState, setDirState] = useRecoilState(myDirectionState);
    const [selectedItem, setSelectedItem] = useState(null);
    const [Cities, setCities] = useState(null);
    const dialogFuncMap = {
        'displayResponsive': setDisplayResponsive
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }
    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }
    const citySelectItems = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
    const cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
    return (
         <div>
             <div className={"col-10 md:col-8 lg:col-4 "} >
                 <h5 className={"text-3xl"}>price</h5>
                 <Dropdown className={"w-20rem"}  value={Cities} options={citySelectItems} onChange={(e) => setCities(e.value)} />
              <Filter optionsselect={citySelectItems} />
             </div>
              <div className="grid m-8" dir={dirState}>

            {offers.map(offer => (
            <div className="col-10 md:col-8 lg:col-4   ">
                <Card  className={"shadow-2 p-3 h-full flex flex-column surface-card"}
                      header={
                          <img alt="Card" src='https://www.primefaces.org/primereact/images/usercard.png'/>
                         }
                      footer={
                          <div>
                              <Button className={"p-button p-component border-round-md  w-full font-medium  m-2"}
                                      label={<FormattedMessage id={'detail'}/>}
                                      onClick={() => onClick('displayResponsive')}>
                                  <i className="pi pi-external-link mr-2"></i>

                              </Button>
                              <span className={"text-sm line-height-3 mb-0 mt-5"}>{offer.description}</span></div>
                      }
                >
                    <div className={"flex flex-row justify-content-between mb-5 align-items-center"}>
                        <span className={" text-900 text-xl font-medium"}>{offer.category}</span>
                        <Tag className={"p-tag-rounded bg-red-300 text-red-600  xl:w-2 text-lg "}
                             value={offer.rating.rate} icon="pi pi-percentage"></Tag>
                    </div>
                    <div className={"flex align-items-center mb-5"}>
                        <span className={"text-900 font-bold text-5xl"}>{offer.price}</span>
                        <span className={"font-medium text-500 ml-2"}>{<FormattedMessage id={'S_P'}/>}</span>

                    </div>
                </Card></div>


        ))}
        <Dialog  header={<FormattedMessage id={'detail'}/>} visible={displayResponsive} style={{width: '50vw'}}
                onHide={() => onHide('displayResponsive')}>
            <div className={"flex flex-column shadow-2 h-full border-round-lg overflow-hidden"}>
                <div className={"bg-primary p-5"}>
                    <div className={"flex justify-content-between flex-wrap gap-3 mb-4 align-items-center"}>

                        <span className={"text-4xl font-bold"}>{"skin care"}</span>
                        <div
                            className={"surface-0 py-1 border-round-lg flex justify-content-center align-items-center w-11rem bg-primary-reverse"}>
                            <span className={"font-bold text-xl"}>{"2000"}{<FormattedMessage id={'S_P'}/>}</span>
                            <span className={"font-medium ml-2 pt-4 line-through"}>{"6000"}</span>
                        </div>

                    </div>
                </div>
                <div dir={dirState} className={"flex-1 border-round-lg border-noround-top surface-card p-5 flex flex-column"}>
                    <Accordion dir={dirState} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                        <AccordionTab header={<FormattedMessage id={'_clinic'}/>}>
                            <TextIcon text={"sparkel"} icon={"pi pi-circle-fill m-3 "}/>
                            <TextIcon text={"address"} icon={"pi pi-map-marker m-3"}/>
                            <TextIcon text={"099965558555"} icon={"pi pi-phone m-3"}/>
                            <TextIcon text={"sparkl"} icon={"pi pi-facebook m-3"}/>
                        </AccordionTab>
                    </Accordion>


                    <TextIcon text={"ending Date"} icon={"pi pi-times m-2 text-red-300"}/>
                    <TextIcon text={"starting Date"} icon={"pi pi-check m-2 text-green-300"}/>
                    <TextIcon text={"includes all the features of sketchers PrimeReact components internally"}
                              icon={"pi pi-circle-fill m-2 "}/>


                </div>
                <div dir={dirState} className={"flex justify-content-center align-items-center  m-5 border-1 col-10 lg:col-6 "}>
                    <Button className="p-button-raised p-button-rounded" tooltip={'Love'} icon="pi pi-heart"/>
                    <Divider layout="vertical xl:mr-6 "/>
                    <Button className="p-button-raised p-button-rounded" tooltip={'Like'} icon="pi pi-thumbs-up"/>
                    <Divider layout="vertical xl:ml-6 "/>
                    <Button className="p-button-raised p-button-rounded" tooltip={'DisLike'} icon="pi pi-thumbs-down"/>

                </div>
            </div>
        </Dialog>
        </div>
    </div>);


}