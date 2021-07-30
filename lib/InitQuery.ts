import { gql } from "@apollo/client";
import { END } from "redux-saga";
import client from "../config/apollo";
import { Country, Language } from "../interfaces";
import { initializeStore } from "../store";
import { getContinents } from "../store/actions/continent.actions";
import {
    getAllCountries,
    searchCountries,
    setOneCountry,
} from "../store/actions/countries.actions";
import { getCurrencys } from "../store/actions/currency.actions";
import { getLanguages } from "../store/actions/language.actions";
import {
    allContinents,
    allCountries,
    allCountriesWithSearch,
    allCurrencys,
    allLanguages,
    oneCountry,
} from "./querys";

export default async (context) => {
    const { pid } = context.query;
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    const { data } = await client.query({
        query: gql`
                {
                    ${allCountries()}
                    ${allContinents()}
                    ${allLanguages()}
                    ${allCurrencys()}
                    ${pid && pid[0].length === 2 ? oneCountry(pid[0]) : ""}
                }
            `,
    });
    if (data.country !== null) {
        if (pid && pid[0].length === 2) dispatch(setOneCountry(data.country));
    }

    dispatch(getAllCountries(data.countries));
    dispatch(getContinents(data.continents));
    dispatch(getLanguages(data.languages));
    let coins = [];
    [...data.currencys].map((c: any) => {
        c.currency?.split(",").forEach((co: string) => {
            //if (!coins.includes(co)) coins.push(co);
            coins.push(co);
        });
    });
    coins.sort((a, b) => (a > b ? 1 : -1));
    let lastCoins: any = new Set(coins);
    let sendCoins = [...lastCoins].map((c) => {
        return { code: c, name: c };
    });
    dispatch(getCurrencys(sendCoins));

    dispatch(END);
    await reduxStore.sagaTask.toPromise();
    return { props: { initialReduxState: reduxStore.getState() } };
};

export const InitQueryWithSearch = async (context) => {
    const { pid } = context.query;
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;
    console.log("y este ctx", context.query);
    let { currency, continent, language } = context.query;
    let toSearch = {
        currency: currency ? currency : "",
        continent: continent ? continent : "",
    };

    const { data } = await client.query({
        query: gql`
                {
                    ${allCountriesWithSearch(toSearch)}
                    ${language && language.length > 0 ? allCountries() : ""}
                    ${allContinents()}
                    ${allLanguages()}
                    ${allCurrencys()}
                    ${pid && pid[0].length === 2 ? oneCountry(pid[0]) : ""}
                }
            `,
    });
    if (data.country !== null) {
        if (pid && pid[0].length === 2) dispatch(setOneCountry(data.country));
    }
    if (data.countries) {
        let toFilt: Country[] = [...data.countries];
        let toSend: Country[] = toFilt.filter((f: Country) => {
            if (f.languages && f.languages.length > 0) {
                if (Array.isArray(language)) {
                    let toReturn = false;
                    f.languages.forEach((l: Language) => {
                        let exist = language.filter(
                            (le: string) => le === l.code
                        );
                        if (exist && exist.length > 0) {
                            toReturn = true;
                        }
                    });
                    return toReturn;
                } else {
                    let toReturn = false;
                    f.languages.forEach((l: Language) => {
                        if (l.code === language) {
                            toReturn = true;
                        }
                    });
                    return toReturn;
                }
            } else {
                return false;
            }
        });

        if (currency?.length > 0 || continent?.length > 0) {
            let finalArr: Country[] = [
                ...data.forCode,
                ...toSend,
            ].sort((a: Country, b: Country) => (a.code > b.code ? 1 : -1));
            const filteredArr: Country[] = finalArr.reduce((acc, current) => {
                const x = acc.find((item) => item.code === current.code);
                if (!x) {
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, []);
            dispatch(getAllCountries(filteredArr));
        } else {
            dispatch(getAllCountries(toSend));
        }
    } else {
        dispatch(getAllCountries(data.forCode));
    }

    dispatch(getContinents(data.continents));
    dispatch(getLanguages(data.languages));
    let coins = [];
    [...data.currencys].map((c: any) => {
        c.currency?.split(",").forEach((co: string) => {
            //if (!coins.includes(co)) coins.push(co);
            coins.push(co);
        });
    });
    coins.sort((a, b) => (a > b ? 1 : -1));
    let lastCoins: any = new Set(coins);
    let sendCoins = [...lastCoins].map((c) => {
        return { code: c, name: c };
    });
    dispatch(getCurrencys(sendCoins));

    dispatch(END);
    await reduxStore.sagaTask.toPromise();
    return { props: { initialReduxState: reduxStore.getState() } };
};
