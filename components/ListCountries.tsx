import { FC } from "react";
import { Country } from "../interfaces";
import List from "./List";

type Props = {
    arr: Country[];
    title?: string | undefined;
};

const ListCountries: FC<Props> = ({ arr, title }) => {
    return <List arr={arr} title={title} />;
};

export default ListCountries;
