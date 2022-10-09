import '../styles/globals.css';

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import Head from "next/head";
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import ar from "../lang/ar";
import en from "../lang/en";
import theme from "../styles/theme";
import {ChakraProvider} from "@chakra-ui/provider";
import NavBar from "../component/navBar";
import {useRecoilState} from "recoil";
import {myDirectionState} from "../component/Atoms/directionAtoms";

const messages = {
  ar,
  en,
};



function MyApp({Component, pageProps}:{Component:any,pageProps:any}) {
  const {locale} = useRouter();
  const [dirState, setDirState] = useRecoilState(myDirectionState);

  function getDirection({locale}:{locale:string}) {
    // if (locale === "ar") {
    //   return "rtl";
    // }
    //
    // return "ltr";
    setDirState({...dirState, dir: locale  === "ar"?"rtl":"ltr"})
  }
  return (

        < ChakraProvider
            theme={theme}>
          <IntlProvider locale={locale} messages={messages[locale]}>
            <Head>
              <link rel="icon" href="/favicon.ico" />
              <title>React App</title>
              <meta charSet="utf-8" />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <meta name="description" content="Web site created using create-next-app" />
              <meta name="theme-color" content="#000000" />
            </Head>
            <NavBar />
            <Component {...pageProps} dir={getDirection(locale)} />
          </IntlProvider>


        </ChakraProvider>
  );
}

export default MyApp
