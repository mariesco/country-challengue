import { AnyAction } from "redux";
import { Config } from "../../interfaces";
import configTypes from "../types/config.type";

const configReducers = (
    state: Config | undefined = initConfig,
    action: AnyAction
) => {
    switch (action.type) {
        case configTypes.SET_LOAD:
            return { ...state, load: action.payload };
        case configTypes.SET_LOADSEARCH:
            return { ...state, loadSearch: action.payload };
        case configTypes.SET_THEME:
            return { ...state, theme: action.payload };
        case configTypes.CHANGE_THEME:
            return { ...state, theme: action.payload };
        default:
            return state;
    }
};

const initConfig: Config = {
    load: true,
    loadSearch: false,
    theme: "",
    bg_clasic: "transition duration-500 ease-in-out bg-white dark:bg-gray-900",
    bg_grey: "transition duration-500 ease-in-out bg-gray-50 dark: bg-gray-500",
    text_clasic:
        "transition duration-500 ease-in-out text-black dark:text-white",
    text_grey:
        "transition duration-500 ease-in-out text-gray-500 dark:text-gray-400",
};

export default configReducers;
