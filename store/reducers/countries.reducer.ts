import countriesTypes from "../types/countries.type";

const countriesReducers = (state = 'holaa', action: any) => {
    switch (action.type) {
        case countriesTypes.GET_COUNTRIES:
            return action.payload;
        default:
            return state;
    }
};

export default countriesReducers;
