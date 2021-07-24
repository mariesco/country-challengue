import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../store/actions/countries.actions";

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
    const { countries } = useSelector((state: any) => state);
    const dispatch = useDispatch();
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <header>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>{" "}
                    |{" "}
                    <Link href="/about">
                        <a>About</a>
                    </Link>{" "}
                    |{" "}
                    <Link href="/users">
                        <a>Users List</a>
                    </Link>{" "}
                    | <a href="/api/users">Users API</a>
                </nav>
            </header>
            {children}
            <footer>
                <hr />
                {countries}
                <div
                    style={{ color: "red" }}
                    onClick={() => {
                        dispatch(getAllCountries("jajaja"));
                    }}
                >
                    cambia
                </div>
                <br />
                <span>I'm here to stay (Footer)</span>
            </footer>
        </div>
    );
};

export default Layout;
