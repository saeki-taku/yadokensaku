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

export default function Hotel({ title, description, pageData }: Hotel) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<HotelView pageData={pageData} />
		</>
	);
}

export const getServerSideProps = async (context: ANY_OBJECT) => {
	return promiseAll([requestPageData(context)], {
		then: ([pageData]) => ({
			props: {
				title: `${pageData.hotelDetail?.hotels[0].hotel[0].hotelBasicInfo.hotelName}|宿検索`,
				description: pageData.hotelDetail?.hotels[0].hotel[0].hotelBasicInfo.hotelSpecial,
				pageData: pageData,
			},
		}),
	});
};
