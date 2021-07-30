import countriesTypes from "../types/countries.type";
import { AnyAction } from "redux";
import { countryReducerType } from "./types/countriesReducer.type";

const countriesReducers = (
    state: countryReducerType | undefined = initCountries,
    action: AnyAction
) => {
    switch (action.type) {
        case countriesTypes.GET_COUNTRIES:
            return { ...state, allCountries: action.payload };
        case countriesTypes.GET_COUNTRIES_FORCODE:
            return { ...state, allCountriesCode: action.payload };
        case countriesTypes.GET_COUNTRY:
            return { ...state, country: action.payload };
        case countriesTypes.SET_COUNTRY:
            return { ...state, country: action.payload };
        default:
            return state;
    }
};

export default countriesReducers;

const initCountries: countryReducerType = {
    allCountries: [],
    allCountriesCode: [],
    country: { code: "00", name: "init" },
};
