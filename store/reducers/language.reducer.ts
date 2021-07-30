import { AnyAction } from "redux";
import languageTypes from "../types/language.type";
import { languageReducerType } from "./types/languageReducer.type";

const languageReducers = (
    state: languageReducerType | undefined = initLanguage,
    action: AnyAction
) => {
    switch (action.type) {
        case languageTypes.GET_LANGUAGES:
            return { ...state, allLanguages: action.payload };
        default:
            return state;
    }
};

const initLanguage: languageReducerType = {
    allLanguages: [],
};

export default languageReducers;
