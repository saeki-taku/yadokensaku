// react
import React from "react";
import Head from "next/head";
// views
import MypageView from "@/views/Mypage";
// datasources
import { requestPageData } from "@/dataSource/hotel/requestPageData";
// others
import { promiseAll } from "@/utils/common";

interface mypageProps {
    title: string;
    description: string;
    pageData: ANY_OBJECT;
}

export default function Mypage({ title, description, pageData }: mypageProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                />
            </Head>
            <MypageView />
        </>
    );
}

export const getServerSideProps = async (context: ANY_OBJECT) => {
    return promiseAll([requestPageData(context)], {
        then: ([pageData]) => ({
            props: {
                title: "マイページ|宿検索",
                description: "マイページのログインです",
                // pageData: pageData,
            },
        }),
    });
};
