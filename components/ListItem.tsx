import { FC, MouseEventHandler } from "react";
import { useRouter } from "next/router";
import { Country } from "../interfaces";
import { useDispatch } from "react-redux";
import { getOneCountry } from "../store/actions/countries.actions";
import { setLoad } from "../store/actions/config.actions";

type Props = {
    country: Country;
};

const ListItem: FC<Props> = ({ country }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const infoCountry: MouseEventHandler<HTMLTableRowElement> = () => {
        router.push(`/${country.code}`, `/${country.code}`, { shallow: true });
        dispatch(setLoad(true));
        dispatch(getOneCountry({ code: country.code }));
    };

    return (
        <tr className="cursor-pointer hover:bg-gray-50" onClick={infoCountry}>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        {/*
                        <img
                            className="h-10 w-10 rounded-full"
                            src={country.emoji}
                            alt=""
                        />
                        */}
                        {country.emoji}
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {country.name}
                        </div>
                        <div className="text-sm text-gray-500">
                            {country.code}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                    {country.continent?.name}
                </div>
                {country.languages?.length > 0 ? (
                    <div className="text-sm text-gray-500">
                        Lenguajes:{" "}
                        {country.languages.map((l, i) => {
                            if (i === 0) {
                                return `${l.name}`;
                            } else {
                                return `, ${l.name}`;
                            }
                        })}
                    </div>
                ) : (
                    ""
                )}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {country.currency
                        ?.split(",")
                        .reduce((acc, curr) => (acc += ` ${curr} -`), "-")}
                </span>
            </td>
        </tr>
    );
};

export default ListItem;
