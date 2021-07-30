import { AnyAction } from "redux";
import continentTypes from "../types/continent.type";
import { continentReducerType } from "./types/continentReducer.type";

const continentReducers = (
    state: continentReducerType | undefined = initContinents,
    action: AnyAction
) => {
    switch (action.type) {
        case continentTypes.GET_CONTINETS:
            return { ...state, allContinents: action.payload };
        default:
            return state;
    }
};

const initContinents: continentReducerType = {
    allContinents: [],
};

export default continentReducers;
