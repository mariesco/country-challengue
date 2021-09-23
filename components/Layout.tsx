import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import { useSelector } from "react-redux";
import { AppStore } from "../store/types/AppStore";
import Loader from "./Loader";

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = "Crehana countries" }: Props) => {
    const { bg_clasic } = useSelector((state: AppStore) => state.config);
    return (
        <div className={`${bg_clasic}`}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="sticky top-0">
                <Loader />
                <Header />
            </div>
            <div className="container mx-auto">{children}</div>
        </div>
    );
};

export default Layout;
