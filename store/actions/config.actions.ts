import configTypes from "../types/config.type";

export const setLoad = (payload: boolean) => {
    return { type: configTypes.SET_LOAD, payload: payload };
};

export const setLoadSearch = (payload: boolean) => {
    return { type: configTypes.SET_LOADSEARCH, payload: payload };
};

export const setTheme = (payload: string) => {
    return { type: configTypes.SET_THEME, payload: payload };
};

export const getTheme = () => {
    return { type: configTypes.GET_THEME };
};

export const changeTheme = (payload: string) => {
    return { type: configTypes.CHANGE_THEME, payload: payload };
};
