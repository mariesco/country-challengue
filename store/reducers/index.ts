import { combineReducers } from "redux";
import { AppStore } from "../types/AppStore";
import countriesReducers from "./countries.reducer";

const rootReducer = combineReducers<AppStore>({
    countries: countriesReducers,
});

export default rootReducer;
