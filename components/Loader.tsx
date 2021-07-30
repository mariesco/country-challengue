import { NextRouter, withRouter } from "next/router";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoad } from "../store/actions/config.actions";
import { AppStore } from "../store/types/AppStore";

interface WithRouterProps {
    router: NextRouter;
}
interface LoaderProps extends WithRouterProps {}

const Loader: FC<LoaderProps> = ({ router }) => {
    const { load } = useSelector((state: AppStore) => state.config);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoad(false));
    }, []);

    return (
        <>
            <div className="h-2 relative w-full overflow-hidden">
                <div
                    className={`w-full h-full ${
                        load === null ? "bg-white" : "bg-gray-200"
                    } absolute`}
                ></div>
                <div
                    className={`h-full bg-indigo-500 transition duration-500 ease-in-out relative w-${
                        load === true ? "full" : "0"
                    }`}
                ></div>
            </div>
        </>
    );
};

export default withRouter(Loader);
