// react
import Head from "next/head";
// views
import SearchView from "@/views/Search";
// datasources
import { requestPageData } from "@/dataSource/search/requestPageData";
// others
import { promiseAll } from "@/utils/common";
import React from "react";

interface SearchProps {
    title: string;
    description: string;
    pageData: ANY_OBJECT;
}

export default function Seach({ title, description, pageData }: SearchProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                />
            </Head>
            <SearchView pageData={pageData} />
        </>
    );
}

export const getServerSideProps = async (context: ANY_OBJECT) => {
    const title: string = `宿検索｜${context?.query?.keyword} の検索結果`;
    const description: string = "宿検索の検索結果";

    return promiseAll([requestPageData(context)], {
        then: ([pageData]) => ({
            props: {
                title: title,
                description: description,
                pageData,
            },
        }),
    });
};
