import countriesTypes from "../types/countries.type";

export const getAllCountries = (payload: any) => {
    return { type: countriesTypes.GET_COUNTRIES, payload: payload };
};
