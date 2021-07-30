import { useRouter } from "next/router";
import { ChangeEventHandler, FC, useEffect, useState } from "react";
import useHandleRoute from "../lib/useHandleRoute";

type Props = {
    dato: any;
    type?: string;
};

const FilterItem: FC<Props> = ({ dato, type }) => {
    const router = useRouter();
    const [check, setCheck] = useState<boolean>(false);

    const { handleRoute, initCheck } = useHandleRoute();

    useEffect(() => {
        initCheck({
            router: router,
            type: type,
            data: dato.code,
            setCheck: setCheck,
        });
    }, [dato]);

    const onChange: ChangeEventHandler<HTMLInputElement> = () => {
        handleRoute({
            router: router,
            add: check === false ? true : false,
            type: type,
            data: dato.code,
        });

        setCheck(!check);
    };

    return (
        <>
            <label className="cursor-pointer block text-gray-700 pb-4 px-2">
                <input type="checkbox" checked={check} onChange={onChange} />
                <span className="ml-1">{dato.name}</span>
            </label>
        </>
    );
};

export default FilterItem;
