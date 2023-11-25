// react
import React from "react";
import Head from "next/head";
// views
import SignupView from "@/views/Signup";
// datasources
import { requestPageData } from "@/dataSource/hotel/requestPageData";
// others
import { promiseAll } from "@/utils/common";

interface SignupProps {
    title: string;
    description: string;
    pageData: ANY_OBJECT;
}

export default function Login({ title, description, pageData }: SignupProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                />
            </Head>
            <SignupView />
        </>
    );
}

export const getServerSideProps = async (context: ANY_OBJECT) => {
    return promiseAll([requestPageData(context)], {
        then: ([pageData]) => ({
            props: {
                title: "ログアウト|宿検索",
                description: "宿検索のログアウト画面です",
                // pageData: pageData,
            },
        }),
    });
};
