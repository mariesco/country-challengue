import { countriesSaga } from "./countries.saga";
import { configSaga } from "./config.saga";
import { all } from "redux-saga/effects";

export default function* initSagas() {
    yield all([...configSaga, ...countriesSaga]);
}
