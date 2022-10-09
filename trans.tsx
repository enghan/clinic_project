import { createIntl, createIntlCache, IntlCache } from "react-intl";
const cache: IntlCache = createIntlCache();
const intlProv = {};
const content = {};

function getMessages(lang: string) {
    // @ts-ignore
    if (!content[lang] && typeof window !== "undefined") {
        //@ts-ignore
        content[lang] = window.__NEXT_DATA__?.props.pageProps.content;
    }
    // @ts-ignore
    return content[lang];
}

function getIntlProvider(lang: string) {
    // @ts-ignore
    if (!intlProv[lang]) {
        // @ts-ignore
        intlProv[lang] = createIntl({
                locale: lang,
                messages: getMessages(lang),
                onError: () => {},
            },
            cache
        );
    }
    // @ts-ignore
    return intlProv[lang];
}

export const trans = (id: string, values?: any) => {
    let locale: string;
    if(typeof window !== "undefined") {
        //@ts-ignore
        locale = window.__NEXT_DATA__?.locale;
    }
    // @ts-ignore
    const intl = getIntlProvider(locale);
    return intl.formatMessage({ id }, values);
};