import * as countriesSaga from "./countries.saga";

const initSagas = (sagaMiddleware: any) => {
    Object.values(countriesSaga).forEach(
        sagaMiddleware.run.bind(sagaMiddleware)
    );
};

export default initSagas;
