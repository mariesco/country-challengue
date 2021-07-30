import { Popover, Transition } from "@headlessui/react";
import { LocationMarkerIcon, TrashIcon, XIcon } from "@heroicons/react/outline";
import { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/types/AppStore";
import DarkSwitch from "../DarkSwitch";
import Filter from "../Filter";

type Props = {
    items?: any[];
    open?: boolean;
};

const DropMobile: FC<Props> = ({ items, open }) => {
    const { bg_clasic, text_grey, text_clasic } = useSelector(
        (state: AppStore) => state.config
    );
    return (
        <>
            <Transition
                show={open}
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="font-sans text-black flex items-center justify-center">
                                    <div className="border rounded-3xl overflow-hidden flex">
                                        <input
                                            type="text"
                                            className={`focus:outline-none px-4 py-2 ${bg_clasic} ${text_clasic}`}
                                            placeholder="Search..."
                                        />
                                        <button
                                            className={`flex items-center justify-center px-4 ${bg_clasic}`}
                                        >
                                            <svg
                                                className={`h-4 w-4 ${text_grey}`}
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="relative grid gap-3 bg-white p-3">
                                        <Filter
                                            item={{
                                                name: "Continents",
                                                Icon: LocationMarkerIcon,
                                                data: [],
                                            }}
                                        />
                                        <Filter
                                            item={{
                                                name: "Continents",
                                                Icon: LocationMarkerIcon,
                                                data: [],
                                            }}
                                        />
                                        <Filter
                                            item={{
                                                name: "Continents",
                                                Icon: LocationMarkerIcon,
                                                data: [],
                                            }}
                                        />
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
                            </div>
                        </div>
                        <div className="py-4 px-5 text-center ">
                            <DarkSwitch/>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </>
    );
};

export default DropMobile;
