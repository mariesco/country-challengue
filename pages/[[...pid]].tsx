import { GetServerSideProps, NextPage } from "next";
import Detail from "../components/Detail";
import ListCountries from "../components/ListCountries";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppStore } from "../store/types/AppStore";
import InitQuery, { InitQueryWithSearch } from "../lib/InitQuery";

const CountriesPage: NextPage = () => {
    const [show, setShow] = useState<boolean>(false);
    const { country, allCountries, allCountriesCode } = useSelector(
        (state: AppStore) => state.countries
    );

    useEffect(() => {
        if (country.code !== "00") setShow(true);
        else setShow(false);
    }, [country]);

    return (
        <>
            {allCountriesCode.length > 0 ? (
                <ListCountries
                    arr={allCountriesCode}
                    title={"Resultado de la búsqueda por código:"}
                />
            ) : (
                ""
            )}
            <ListCountries
                arr={allCountries}
                title={
                    allCountriesCode.length > 0
                        ? "Resultado de la búsqueda por nombre:"
                        : undefined
                }
            />
            <div className="fixed right-0 top-0 h-full">
                <Detail show={show} country={country} />
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    let querys: string[] = Object.keys(context.query).filter(
        (f: string) => f !== "pid"
    );
    if (querys.length > 0) {
        return await InitQueryWithSearch(context);
    } else {
        return await InitQuery(context);
    }
};

export default CountriesPage;
