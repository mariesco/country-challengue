import { Config } from "../../interfaces";
import {
    ContinentR,
    CountriesR,
    CurrencyR,
    LanguageR,
} from "../reducers/types";

export interface AppStore {
    countries: CountriesR;
    continents: ContinentR;
    currency: CurrencyR;
    language: LanguageR;
    config?: Config;
}
