
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import {FormattedMessage} from 'react-intl';
import {Tag} from 'primereact/tag';

export  default function CardService (service:any){
    return(

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
                                   <span className={"text-sm line-height-3 mb-0 mt-5"}>{service.description}</span></div>
                           }
                    >
                        <div className={"flex flex-row justify-content-between mb-5 align-items-center"}>
                            <span className={" text-900 text-xl font-medium"}>{service.category}</span>

                        </div>
                        <div className={"flex align-items-center mb-5"}>
                            <span className={"text-900 font-bold text-5xl"}>{service.price}</span>
                            <span className={"font-medium text-500 ml-2"}>{<FormattedMessage id={'S_P'}/>}</span>

                        </div>
                    </Card></div>



    )
}