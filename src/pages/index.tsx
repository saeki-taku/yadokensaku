// react
import { createContext } from "react";
import Head from "next/head";
// views
import TopView from "@/views/Top";
// datasources
import { requestPageData } from "@/dataSource/top/requestPageData";
// api
import { Ranking } from "@/pages/api/ranking";
// others
import { promiseAll } from "@/utils/common";

interface HomeProps {
    title: string;
    description: string;
    pageData: ANY_OBJECT;
}

// export default function Home({ ranking }: { ranking: any }) {
export default function Home({ title, description, pageData }: HomeProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                />
            </Head>
            <TopView pageData={pageData} />
        </>
    );
}

export const getServerSideProps = async (context: ANY_OBJECT) => {
    const title: string = "宿検索";
    const description: string = "宿検索";
    // return promiseAll([requestPageData(context)], {
    // 現在はAPIをただ取得してくるだけなのでrequestPageData(context)は不要

    return promiseAll([requestPageData(context)], {
        // return promiseAll([requestPageData(context)], {
        // contextについての参考: https://www.sukerou.com/2022/02/nextjs-getserversideprops.html

        then: ([pageData]) =>
            //requestPageDataしたデータのそのまま返している
            ({
                props: {
                    title: title,
                    description: description,
                    pageData,
                },
            }),
    });

    // promiseAllを記述しない場合
    // return {
    //     props: {
    //         title: title,
    //         description: description,
    //     },
    // };
};
