import { AdjustmentsIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { ChangeEventHandler, FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    searchCountries,
    setOneCountry,
} from "../../store/actions/countries.actions";
import { AppStore } from "../../store/types/AppStore";
import Dropdown from "../Dropdown";

const Search: FC = () => {
    const { config } = useSelector((state: AppStore) => state);
    const { bg_clasic, text_clasic, text_grey } = config;
    const dispatch = useDispatch();
    const router = useRouter();

    const [search, setSearch] = useState<string>("");
    const [init, setInit] = useState<boolean>(true);

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            if (init) {
                let { query } = router;
                if (query.search !== undefined && query.search.length > 0) {
                    setSearch(query.search as string);
                    dispatch(searchCountries(search));
                    setInit(false);
                } else {
                    setInit(false);
                }
            } else {
                const { pid } = router.query;
                if (pid) {
                    router.push(
                        `/${pid[0]}?search=${search}`,
                        `/${pid[0]}?search=${search}`,
                        {
                            shallow: true,
                        }
                    );
                    dispatch(setOneCountry({ code: "00" }));
                } else {
                    router.push(`/?search=${search}`, `/?search=${search}`, {
                        shallow: true,
                    });
                }
                dispatch(searchCountries(search));
            }
        }, 750);
        return () => clearTimeout(timeOutId);
    }, [search]);

    return (
        <>
            <div className="hidden md:flex font-sans text-black flex items-center justify-center">
                <div className="border rounded-3xl overflow-hidden flex">
                    <input
                        type="text"
                        className={`focus:outline-none px-4 py-2 ${bg_clasic} ${text_clasic}`}
                        placeholder="Search..."
                        value={search}
                        onChange={onChange}
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
            <Dropdown Icon={AdjustmentsIcon} />
        </>
    );
};

export default Search;
