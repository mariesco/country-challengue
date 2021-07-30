import { Transition } from "@headlessui/react";
import { ArrowLeftIcon, CurrencyDollarIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { FC, MouseEventHandler, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Country, Language, States } from "../interfaces";
import { setOneCountry } from "../store/actions/countries.actions";
import { AppStore } from "../store/types/AppStore";

type Props = {
    show: boolean;
    country?: Country;
};

const Detail: FC<Props> = ({ show, country }) => {
    const { bg_clasic } = useSelector((state: AppStore) => state.config);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("que countryyy", country);
    }, [country]);

    const goBack: MouseEventHandler<HTMLElement> = () => {
        router.push(`/`, `/`, { shallow: true });
        dispatch(setOneCountry({ code: "00" }));
    };

    return (
        <Transition
            show={show}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="-translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="-translate-x-0"
            leaveTo="translate-x-full"
        >
            <div className={`w-screen sm:w-96 shadow-lg h-screen ${bg_clasic}`}>
                <div
                    className=" divide-gray-100 divide-y text-sm pt-8 ml-6"
                    onClick={goBack}
                >
                    <button className="bg-gray-50 hover:bg-gray-400 text-gray-800 font-bold py-2 pr-4 rounded-full inline-flex items-center">
                        <ArrowLeftIcon className="w-4 h-4 inline-block ml-4 mr-3" />
                        Volver al listado
                    </button>
                </div>
                <article className="p-6 flex space-x-6">
                    <div className="min-w-0 relative flex-auto">
                        <h2 className="text-lg font-semibold text-black mb-0.5">
                            {country.name}
                            <span className="ml-3">{country.emoji}</span>
                        </h2>
                        <dl className="flex flex-wrap text-sm font-medium whitespace-pre ml-4">
                            <div className="mb-2 flex-none w-full mt-1.5 font-normal">
                                <dt className="inline underline">Capital:</dt>{" "}
                                <dd className="inline text-black">
                                    {country.capital}
                                </dd>
                            </div>
                            <div className="mb-2 flex-none w-full mt-0.5 font-normal">
                                <dt className="inline underline">Continent:</dt>{" "}
                                <dd className="inline text-black">
                                    {country.continent?.name}
                                </dd>
                            </div>
                        </dl>
                        <div className="block">
                            <h2 className="text-md font-semibold text-black mt-1.5 mb-2.5">
                                More information
                            </h2>
                        </div>
                        <dl className="flex flex-wrap text-sm w-full font-medium whitespace-pre ml-4">
                            <div className="mb-2 flex-none w-full mt-1.5 font-normal">
                                <dt className="inline underline">
                                    Native name:
                                </dt>{" "}
                                <dd className="inline text-black ml-2">
                                    {country.native}
                                </dd>
                            </div>
                            <div className="mb-2 flex-none w-full mt-1.5 font-normal">
                                <dt className="inline underline">
                                    Phone prefix:
                                </dt>{" "}
                                <dd className="inline text-black ml-2">
                                    {country.phone}
                                </dd>
                            </div>
                            <div className="mb-2 flex-none w-full mt-1.5 font-normal">
                                <dt className="inline underline">Languages:</dt>{" "}
                                <dd className="inline text-black">
                                    <ul className="list-disc ml-8 mt-0.5">
                                        {country.languages?.map(
                                            (l: Language) => (
                                                <li>{l.name}</li>
                                            )
                                        )}
                                    </ul>
                                </dd>
                            </div>
                            {country.states?.length > 0 ? (
                                <div className="mb-2 flex-none w-full mt-1.5 font-normal h-64 overflow-scroll">
                                    <dt className="inline underline">
                                        States:
                                    </dt>{" "}
                                    <dd className="inline text-black">
                                        <ul className="list-disc ml-8 mt-0.5">
                                            {country.states?.map(
                                                (s: States) => (
                                                    <li>{s.name}</li>
                                                )
                                            )}
                                        </ul>
                                    </dd>
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="absolute top-0 right-0 rounded-full bg-indigo-200 text-amber-900 px-2 py-0.5 flex items-center space-x-1">
                                <CurrencyDollarIcon className="w-4 h-4" />
                                <dd>{country.currency}</dd>
                            </div>
                        </dl>
                    </div>
                </article>
            </div>
        </Transition>
    );
};

export default Detail;
