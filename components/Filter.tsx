import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import { FC } from "react";
import { Continent, Currency, Language } from "../interfaces";
import FilterItem from "./FilterItem";

type FilterProp = {
    name?: string;
    type?: string;
    Icon?: any;
    data?: Continent[] | Currency[] | Language[];
};

type Props = {
    item: FilterProp;
};

const Filter: FC<Props> = ({ item }) => {
    return (
        <>
            <div className="w-full">
                <div className="w-full max-w-md mx-auto bg-white rounded-2xl">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <div className="-m-3 p-3 flex items-start rounded-lg ">
                                        <item.Icon
                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                            aria-hidden="true"
                                        />
                                        <div className="ml-4">
                                            <p className="text-base font-medium text-gray-900">
                                                {item.name}
                                            </p>
                                        </div>
                                    </div>
                                    <ChevronUpIcon
                                        className={`${
                                            open ? "transform rotate-180" : ""
                                        } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2">
                                    <div className="overflow-scroll h-48">
                                        <p className="mt-1 text-sm text-gray-500 grid grid-cols-3">
                                            {item.data.map((d: any) => (
                                                <FilterItem
                                                    dato={d}
                                                    type={item.type}
                                                />
                                            ))}
                                        </p>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </>
    );
};

export default Filter;
