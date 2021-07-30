import { FC } from "react";
import { Country } from "../interfaces";
import ListItem from "./ListItem";

type Props = {
    arr: Country[];
};

const ListContainer: FC<Props> = ({ arr }) => {
    if (arr?.length > 0) {
        return (
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200">
                {arr.map((country: Country) => (
                    <ListItem key={country.code} country={country} />
                ))}
            </tbody>
        );
    } else {
        return (
            <tbody className="relative h-10 bg-white bg:gray-800 divide-y divide-gray-200">
                <div className="absolute text-center mt-2 right-0 left-0">
                    No hay ningún país disponible
                </div>
            </tbody>
        );
    }
};

export default ListContainer;
