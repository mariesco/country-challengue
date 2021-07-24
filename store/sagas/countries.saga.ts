import { take } from "redux-saga/effects";
import countriesTypes from "../types/countries.type";

export function* getAllCountries() {
    yield take(countriesTypes.GET_COUNTRIES);
    console.log("countries GET");
    //const { data } = yield call(clienteAxios, "/entries");
    //console.log("esta respuesta", data);
    //yield put(populateEntries(data));
}
