import { NextRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { filterCountries } from "../store/actions/countries.actions";

type objectProps = {
    router: NextRouter;
    add?: boolean;
    type: string;
    data: string;
};

type initCheckProps = objectProps & {
    setCheck: Dispatch<SetStateAction<boolean>>;
};

//Router para los push y agarrar querys...el 'add' determina si se saca el parametro de la URL o se agrega.
//El 'type' es para saber que tipo de query es la q tenemos que trbaajar...si currency, continent o q...
//
type Props = ({}: objectProps) => void;

const useHandleRoute = () => {
    const dispatch = useDispatch();

    const handleRoute: Props = ({ router, add, type, data }) => {
        let { query } = router;
        let filterTypes: string[] = ["continent", "currency", "language"];
        let toPath: string = "";
        if (query.pid) toPath += query.pid;
        if (query.search !== undefined) toPath += `?search=${query.search}`;
        else toPath += `?`;

        if (add) {
            filterTypes.forEach((fil: string) => {
                if (query[fil] !== undefined) {
                    if (Array.isArray(query[fil])) {
                        let thatQuery = <string[]>query[fil];
                        thatQuery.map((c) => (toPath += `&${fil}=${c}`));
                    } else {
                        toPath += `&${fil}=${query[fil]}`;
                    }
                }
            });

            dispatch(
                filterCountries({
                    ...query,
                    [type]: query[type] ? [data].concat(query[type]) : data,
                })
            );

            router.push(
                `/${toPath}&${type}=${data}`,
                `/${toPath}&${type}=${data}`,
                { shallow: true }
            );
        } else {
            filterTypes.forEach((fil: string) => {
                if (query[fil] !== undefined) {
                    if (Array.isArray(query[fil])) {
                        let thatQuery = <string[]>query[fil];
                        thatQuery
                            .filter((c) => c !== data)
                            .map((c) => (toPath += `&${fil}=${c}`));
                    } else {
                        if (fil === type) {
                            delete query[fil];
                        } else {
                            toPath += `&${fil}=${query[fil]}`;
                        }
                    }
                }
            });

            dispatch(filterCountries(query));
            router.push(`/${toPath}`, `/${toPath}`, { shallow: true });
        }
    };

    const initCheck = ({ router, type, data, setCheck }: initCheckProps) => {
        let { query } = router;
        let thatQuery = <string[]>query[type];
        if (thatQuery !== undefined) {
            if (Array.isArray(thatQuery)) {
                thatQuery.forEach((c) => {
                    if (c === data) {
                        setCheck(true);
                    }
                });
            } else {
                if (thatQuery === data) setCheck(true);
            }
        }
    };

    return { handleRoute, initCheck };
};

export default useHandleRoute;
