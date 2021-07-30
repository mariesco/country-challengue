import { combineReducers } from "redux";
import { AppStore } from "../types/AppStore";
import configReducers from "./config.reducer";
import continentReducers from "./continent.reducer";
import countriesReducers from "./countries.reducer";
import currencyReducers from "./currency.reducer";
import languageReducers from "./language.reducer";

const rootReducer = combineReducers<AppStore>({
    countries: countriesReducers,
    continents: continentReducers,
    currency: currencyReducers,
    language: languageReducers,
    config: configReducers,
});

export default rootReducer;
