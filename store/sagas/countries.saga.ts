import { gql } from "@apollo/client";
import { call, delay, fork, put, take, takeLatest } from "redux-saga/effects";
import client from "../../config/apollo";
import { Country, Language } from "../../interfaces";
import {
    allCountries,
    allCountriesWithSearch,
    oneCountry,
    searchAll,
} from "../../lib/querys";
import { setLoad, setLoadSearch } from "../actions/config.actions";
import {
    getAllCountries,
    getAllCountriesCode,
    setOneCountry,
} from "../actions/countries.actions";
import countriesTypes from "../types/countries.type";

export function* getOneCountryInfo() {
    yield takeLatest(countriesTypes.GET_COUNTRY as any, getInfo);
}

export function* searchCountries() {
    yield takeLatest(countriesTypes.SEARCH_COUNTRIES as any, searchFn);
}

export function* filterCountries() {
    yield takeLatest(countriesTypes.FILTER_COUNTRIES as any, filterFn);
}

function* filterFn({ payload }) {
    const { data } = yield call(getFilterInfo, payload);
    const { language, currency, continent } = payload;
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
            yield put(getAllCountries(filteredArr));
        } else {
            yield put(getAllCountries(toSend));
        }
    } else {
        yield put(getAllCountries(data.forCode));
    }
}

async function getFilterInfo(payload) {
    let { currency, continent, language } = payload;
    let toSearch = {
        currency: currency ? currency : "",
        continent: continent ? continent : "",
    };

    const { data } = await client.query({
        query: gql`
                {
                    ${allCountriesWithSearch(toSearch)}
                    ${language && language.length > 0 ? allCountries() : ""}
                }
            `,
    });
    return { data };
}

function* searchFn({ payload }) {
    yield put(setLoadSearch(true));
    yield delay(100);
    const { forCode, all } = yield call(getSearchInfo, payload);
    if (payload.length < 3 && payload.length > 0) {
        let allToState = all.filter((country: Country) =>
            country.name.toLowerCase().includes(payload.toLowerCase())
        );
        yield put(getAllCountriesCode(forCode));
        yield put(getAllCountries(allToState));
    } else {
        let allToState = all.filter((country: Country) =>
            country.name.toLowerCase().includes(payload.toLowerCase())
        );
        yield put(getAllCountriesCode([]));
        yield put(getAllCountries(allToState));
    }
    yield put(setLoadSearch(false));
}

async function getSearchInfo(payload) {
    const { data } = await client.query({
        query: gql`
            ${searchAll(payload.toUpperCase())}
        `,
    });
    return data;
}

function* getInfo({ payload }) {
    const { country } = yield call(getInfoReal, payload);
    yield put(setLoad(false));
    yield put(setOneCountry(country));
}

async function getInfoReal({ code }) {
    const { data } = await client.query({
        query: gql`
                query getXcode {
                    ${oneCountry(code)}
                }
            `,
    });
    return data;
}

export const countriesSaga = [
    fork(getOneCountryInfo),
    fork(searchCountries),
    fork(filterCountries),
];
