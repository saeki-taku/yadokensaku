// react
import React from "react";
import Head from "next/head";
// views
import LoginView from "@/views/Login";
// datasources
import { requestPageData } from "@/dataSource/hotel/requestPageData";
// others
import { promiseAll } from "@/utils/common";

interface LoginProps {
    title: string;
    description: string;
    pageData: ANY_OBJECT;
}

export default function Login({ title, description, pageData }: LoginProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                />
            </Head>
            <LoginView />
        </>
    );
}

export const getServerSideProps = async (context: ANY_OBJECT) => {
    return promiseAll([requestPageData(context)], {
        then: ([pageData]) => ({
            props: {
                title: "ログイン|宿検索",
                description: "宿検索のログインです",
                // pageData: pageData,
            },
        }),
    });
};
