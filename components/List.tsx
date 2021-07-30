import { FC } from "react";
import { useSelector } from "react-redux";
import { Country } from "../interfaces";
import { AppStore } from "../store/types/AppStore";
import ListContainer from "./ListContainer";
import ListHeader from "./ListHeader";

type Props = {
    arr: Country[];
    title?: string | undefined;
};

const List: FC<Props> = ({ arr, title = "Listado de países" }) => {
    const { loadSearch } = useSelector((state: AppStore) => state.config);

    return (
        <>
            {/*Header of List*/}
            <div className="flex-auto px-6 pb-2 md:pb-0 pt-2">
                <div className="flex flex-wrap align-center">
                    <h1 className="flex-auto text-xl font-semibold text-center sm:text-left mb-0 sm:-mb-2">
                        {title}
                        <span className="text-sm font-medium text-gray-500 mt-1 ml-4">
                            <strong className="mr-2 text-xl">
                                {arr?.length}
                            </strong>
                            totales
                        </span>
                    </h1>
                </div>
            </div>
            {/*List*/}
            <div className="flex flex-col md:p-6">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table
                                id="containerToSize"
                                className={`min-w-full divide-y divide-gray-200 ${
                                    loadSearch ? "opacity-50" : ""
                                }`}
                            >
                                <ListHeader />
                                <ListContainer arr={arr} />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default List;
