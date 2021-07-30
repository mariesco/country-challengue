import { Popover, Transition } from "@headlessui/react";
import {
    CurrencyDollarIcon,
    LocationMarkerIcon,
    TrashIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import { FC, Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Continent, Currency, Language } from "../interfaces";
import { AppStore } from "../store/types/AppStore";
import Filter from "./Filter";

type Props = {
    Icon: any;
};

type FilterProp = {
    name?: string;
    type?: string;
    Icon?: any;
    data?: Continent[] | Currency[] | Language[];
};

type Filters = {
    continents: FilterProp;
    currency: FilterProp;
    language: FilterProp;
};

const Dropdown: FC<Props> = ({ Icon }) => {
    const { config, continents, currency, language } = useSelector(
        (state: AppStore) => state
    );
    const { bg_clasic } = config;
    const [filters, setFilters] = useState<Filters>({
        continents: {},
        currency: {},
        language: {},
    });

    useEffect(() => {
        const toFilters = {
            continents: {
                name: "Continents",
                type: "continent",
                Icon: LocationMarkerIcon,
                data: continents.allContinents,
            },
            currency: {
                name: "Currency",
                type: "currency",
                Icon: CurrencyDollarIcon,
                data: currency.allCurrencys,
            },
            language: {
                name: "Language",
                type: "language",
                Icon: UserGroupIcon,
                data: language.allLanguages,
            },
        };
        setFilters(toFilters);
    }, []);

    return (
        <>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open ? "text-gray-900" : "text-gray-500",
                                    `border rounded-3xl -ml-8 p-2.5 group ${bg_clasic} rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 `
                                )}
                            >
                                <span className="sr-only">Filtros</span>
                                <Icon
                                    className={classNames(
                                        open
                                            ? "text-gray-600"
                                            : "text-gray-400",
                                        "h-5 w-5 group-hover:text-gray-500"
                                    )}
                                    aria-hidden="true"
                                />
                            </Popover.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel
                                    static
                                    className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                >
                                    <div className="rounded-lg z-50 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-3 bg-white p-3">
                                            {Object.keys(filters).map(
                                                (item: any, i: number) => (
                                                    <Filter
                                                        item={filters[item]}
                                                        key={i}
                                                    />
                                                )
                                            )}
                                        </div>
                                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 flex justify-center">
                                            <div className="flow-root">
                                                <div className="cursor-pointer -m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                                                    <TrashIcon
                                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="ml-1 text-indigo-600">
                                                        Limpiar filtros
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </Popover.Group>
        </>
    );
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default Dropdown;
