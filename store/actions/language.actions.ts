import { Language } from "../../interfaces";
import languageTypes from "../types/language.type";

export const getLanguages = (payload: Language[]) => {
    return { type: languageTypes.GET_LANGUAGES, payload: payload };
};
