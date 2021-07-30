import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, getTheme } from "../store/actions/config.actions";
import { AppStore } from "../store/types/AppStore";

const DarkSwitch = () => {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);

    const { theme } = useSelector((state: AppStore) => state.config);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTheme());
    }, []);

    useEffect(() => {
        if (theme !== "") {
            if (theme === "light") setIsEnabled(false);
            else if (theme === "dark") setIsEnabled(true);
        }
    }, [theme]);

    const handleChange: (value: boolean) => void = (value) => {
        dispatch(changeTheme(value ? "dark" : "light"));
    };

    return (
        <div>
            <Switch
                checked={isEnabled}
                onChange={handleChange}
                className={` 
                   transition duration-500 ease-in-out ${
                       isEnabled
                           ? " outline-none ring-1 ring-offset-1 ring-white"
                           : " outline-none ring-2 ring-offset-1 ring-indigo-500"
                   }
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span
                    className={`block ${
                        isEnabled ? "bg-gray-800" : "bg-white"
                    } rounded-full shadow p-2 h-9 w-14 flex`}
                >
                    <span
                        className={`block h-full w-1/2 rounded-full transition duration-300 ease-in-out transform ${
                            isEnabled ? "translate-x-full" : ""
                        }`}
                    >
                        {isEnabled ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="#6366F1"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </span>
                </span>
            </Switch>
        </div>
    );
};

export default DarkSwitch;
