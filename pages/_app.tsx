import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import configureStore from "../store";

const store = configureStore();

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />;
        </Provider>
    );
};

export default MyApp;
