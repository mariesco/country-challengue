import { AppProps } from "next/app";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { useStore } from "../store";

const MyApp = ({ Component, pageProps }: AppProps) => {
    const store = useStore(pageProps.initialReduxState);
    return (
        <Provider store={store}>
            <Layout title="Crehana countries">
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
};

export default MyApp;
