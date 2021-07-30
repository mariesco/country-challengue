import { AnyAction } from "redux";
import currencyTypes from "../types/currency.type";
import { currencyReducerType } from "./types/currencyReducer.type";

const currencyReducers = (
    state: currencyReducerType | undefined = initCurrencys,
    action: AnyAction
) => {
    switch (action.type) {
        case currencyTypes.GET_CURRENCYS:
            return { ...state, allCurrencys: action.payload };
        default:
            return state;
    }
};

const initCurrencys: currencyReducerType = {
    allCurrencys: [],
};

export default currencyReducers;
