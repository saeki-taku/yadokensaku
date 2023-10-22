// react
import React from "react";
import Head from "next/head";
// views
import SearchView from "@/views/Search";
// datasources
import { requestPageData } from "@/dataSource/search/requestPageData";
// others
import { promiseAll } from "@/utils/common";
import { Noto_Sans_JP } from "next/font/google";

export const notojp = Noto_Sans_JP({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});

interface SearchProps {
    title: string;
    description: string;
    keyword: string;
    pageData: ANY_OBJECT;
}

export default function Search({ title, description, keyword, pageData }: SearchProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                />
            </Head>
            <SearchView
                pageData={pageData}
                keyword={keyword}
            />
        </>
    );
}

export const getServerSideProps = async (context: ANY_OBJECT) => {
    const keyword = context.query.keyword;
    const title: string = `宿検索 ${keyword}の検索結果`;
    const description: string = `宿検索 ${keyword}の検索結果`;

    return promiseAll([requestPageData(context)], {
        then: ([pageData]) => ({
            props: {
                title: title,
                description: description,
                keyword: keyword,
                pageData: pageData,
            },
        }),
    });
};
