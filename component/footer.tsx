export  default function Footer(){
    return (
        <div className={"surface-900 py-6 lg:py-4 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center"}>
            <li>
                <img src={"https://www.primefaces.org/primeblocks-react/assets/images/blocks/logos/peak-700.svg"}/>
            </li>
           <ul className={"flex flex-column  flex-order-1 lg:flex-order-0 mt-4 lg:mt-0"}>
               <li className={"mr-4 mt-3 lg:mt-0 text-0 text-xl font-semibold "}>
                   <span>Contact us</span>
               </li>
               <li className={"mr-4 mt-3 lg:mt-0"}>
                   <i className=" text-0 text-l  pi pi-whatsapp"> 0955555555555</i>
               </li>
               <li className={"mr-4 mt-3 lg:mt-0"}>
                   <i className=" text-0 text-l  pi pi-google"> hhhhhh@gmail.com</i>
               </li>
           </ul>
            <li className={"mr-4 mt-3 lg:mt-0 text-0 text-xl font-semibold "}>
                <span>About us</span>
            </li>
            <li className={"mr-4 mt-3 lg:mt-0 text-300 text-xl font-semibold "}>
                <span>© 2022, Peak. Powered by PrimeBlocks.</span>
            </li>
        </div>
    )
}