import { call, fork, put, take, takeEvery } from "redux-saga/effects";
import { setTheme } from "../actions/config.actions";
import configTypes from "../types/config.type";

export function* watchTheme() {
    yield take(configTypes.GET_THEME);
    const { theme } = yield call(checkTheme);
    yield put(setTheme(theme));
}

export function* changeTheme() {
    yield takeEvery(configTypes.CHANGE_THEME as any, changeThemeHandler);
}

function* changeThemeHandler({ payload }: { payload: string }): any {
    localStorage.setItem("theme", payload);
    yield call(handleDOM, payload);
    yield put(setTheme(payload));
}

const checkTheme: () => { theme: string } = () => {
    let theme: string | null = localStorage.getItem("theme");
    if (theme === null) {
        theme = "light";
        localStorage.setItem("theme", theme);
    } else {
        handleDOM(theme);
    }
    return { theme };
};

const handleDOM: (t: string) => void = (theme) => {
    if (
        theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
};

export const configSaga = [fork(changeTheme), fork(watchTheme)];
