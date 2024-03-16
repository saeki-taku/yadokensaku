// react
import React from "react";
import Head from "next/head";
// views
import SearchAreaView from "@/views/SearchArea";
// datasources
import { requestPageData } from "@/dataSource/search/area/requestPageData";
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

export default function Search({ title, description, prefName, areaName, pageData }: SearchProps) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<SearchAreaView pageData={pageData} prefName={prefName} areaName={areaName} />
		</>
	);
}

export const getServerSideProps = async (context: ANY_OBJECT) => {
	const prefName = context.query.prefName;
	const areaName = context.query.areaName;
	// const title: string = `宿検索 ${}の検索結果`;
	// const description: string = `宿検索 ${}の検索結果`;
	const title: string = `宿検索 の検索結果`;
	const description: string = `宿検索 の検索結果`;

	return promiseAll([requestPageData(context)], {
		then: ([pageData]) => ({
			props: {
				title: title,
				description: description,
				prefName: prefName,
				areaName: areaName,
				pageData: pageData,
			},
		}),
	});
};
