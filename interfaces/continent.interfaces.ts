import { Country } from "./country.interfaces";

export interface Continent {
    code?: string;
    name: string;
    countries?: Country[];
}
