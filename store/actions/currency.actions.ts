import { Currency } from "../../interfaces";
import currencyTypes from "../types/currency.type";

export const getCurrencys = (payload: Currency[]) => {
    return { type: currencyTypes.GET_CURRENCYS, payload: payload };
};
