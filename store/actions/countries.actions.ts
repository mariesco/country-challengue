import { Country } from "../../interfaces";
import countriesTypes from "../types/countries.type";

export const getInitData = () => {
    return { type: countriesTypes.INIT_COUNTRIES };
};

export const getAllCountries = (payload: Country[]) => {
    return { type: countriesTypes.GET_COUNTRIES, payload: payload };
};

export const getAllCountriesCode = (payload: Country[]) => {
    return { type: countriesTypes.GET_COUNTRIES_FORCODE, payload: payload };
};

export const filterCountries = (payload: any) => {
    return { type: countriesTypes.FILTER_COUNTRIES, payload: payload };
};

export const searchCountries = (payload: string) => {
    return { type: countriesTypes.SEARCH_COUNTRIES, payload: payload };
};

export const getOneCountry = (payload: Country) => {
    return { type: countriesTypes.GET_COUNTRY, payload: payload };
};

export const setOneCountry = (payload: Country) => {
    return { type: countriesTypes.SET_COUNTRY, payload: payload };
};
