import { useMemo } from "react";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import initSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

let store;

const initialState = {}; //lo dejo vacio o cargo todo lo inicial????

const initStore = (preloadedState = initialState) => {
    const store: any = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(...middlewares))
    );

    store.sagaTask = sagaMiddleware.run(initSagas);

    return store;
};

export const initializeStore = (preloadedState?: any) => {
    let _store = store ?? initStore(preloadedState);

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });
        // Reset the current store
        store = undefined;
    }

    // For SSG and SSR always create a new store
    if (typeof window === "undefined") return _store;
    // Create the store once in the client
    if (!store) store = _store;

    return _store;
};

export const useStore = (initialState?: any) => {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
};
