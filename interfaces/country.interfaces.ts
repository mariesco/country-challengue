import { Continent } from "./continent.interfaces";
import { Language } from "./language.interfaces";
import {States} from "./states.interfaces";

export interface Country {
    __typename?: string;
    code: string;
    name?: string;
    emoji?: string;
    emojiU?: string;
    phone?: string;
    capital?: string;
    currency?: string;
    native?: string;
    continent?: Continent;
    languages?: Language[];
    states?: States[];
}

