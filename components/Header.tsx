import { useRef } from "react";
import { Popover } from "@headlessui/react";
import DarkSwitch from "./DarkSwitch";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../store/types/AppStore";
import Search from "./header/Search";
import DropMobile from "./header/DropMobile";
import { setOneCountry } from "../store/actions/countries.actions";

export default function Header() {
    const { bg_clasic, text_grey } = useSelector(
        (state: AppStore) => state.config
    );
    const dispatch = useDispatch();
    let searchRef = useRef(null);

    const openDropMobile = () => {
        console.log("esto funka?");
        setTimeout(() => {
            console.log("reff", searchRef.current);
            searchRef.current.focus();
        }, 500);
    };

    return (
        <Popover className={`relative ${bg_clasic}`}>
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                            <div
                                className="flex justify-start lg:w-0 lg:flex-1"
                                onClick={() => {
                                    dispatch(setOneCountry({ code: "00" }));
                                }}
                            >
                                <Link href={"/"} shallow={true}>
                                    <a>
                                        <span className="sr-only">Crehana</span>
                                        <img
                                            className="h-8 w-auto sm:h-10"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div
                                className="-mr-2 -my-2 md:hidden"
                                onClick={openDropMobile}
                            >
                                <Popover.Button className="bg-white border rounded-md p-2 mr-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    {/*
                                    <MenuIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                    */}

                                    <svg
                                        className={`h-6 w-6 ${text_grey}`}
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                    </svg>
                                </Popover.Button>
                            </div>
                            <Search ref={searchRef} />
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <DarkSwitch />
                            </div>
                        </div>
                    </div>
                    <DropMobile open={open} />
                </>
            )}
        </Popover>
    );
}
