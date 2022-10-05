import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ar from "../lang/ar";
import en from "../lang/en";
import {useRouter} from "next/router";
import {IntlProvider} from "react-intl";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
const messages = {
  ar,
  en,

};

function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}
function MyApp({ Component, pageProps }: AppProps) {
  const {locale} = useRouter();

  return (
      <IntlProvider locale={locale} messages={messages[locale]}>
    <Component {...pageProps} />
  </IntlProvider>
  )
}

export default MyApp
