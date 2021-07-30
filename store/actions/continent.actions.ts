import { Continent } from "../../interfaces";
import continentTypes from "../types/continent.type";

export const getContinents = (payload: Continent[]) => {
    return { type: continentTypes.GET_CONTINETS, payload: payload };
};
