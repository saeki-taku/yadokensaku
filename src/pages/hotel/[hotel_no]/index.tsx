// react
import React from "react";
import Head from "next/head";
// views
import HotelView from "@/views/Hotel";
// datasources
import { requestPageData } from "@/dataSource/hotel/requestPageData";
// others
import { promiseAll } from "@/utils/common";

interface Hotel {
    title: string;
    description: string;
    pageData: ANY_OBJECT;
    hotel_no: number;
}

export default function Seach({ title, description, pageData, hotel_no }: Hotel) {
    console.log("pageData___: ", pageData);
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                />
            </Head>
            <HotelView pageData={pageData} />
        </>
    );
}

export const getServerSideProps = async (context: ANY_OBJECT) => {
    console.log("context____:", context.query);
    const title: string = `宿検索 の検索結果`;
    const description: string = `宿検索 の検索結果`;
    const hotel_no = context.query.hotel_no;

    return promiseAll([requestPageData(context)], {
        then: ([pageData]) => ({
            props: {
                title: title,
                description: description,
                pageData: pageData,
                hotel_no: hotel_no,
            },
        }),
    });
};
