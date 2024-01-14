// react
import React, { useEffect } from "react";
import Head from "next/head";
// views
import MypageView from "@/views/Mypage";
// datasources
import { requestPageData } from "@/dataSource/hotel/requestPageData";
// others
import { promiseAll } from "@/utils/common";
// hools
import { useRoute } from "@/hooks/useRoute";
import useUserStore from "@/hooks/useUserStore";

interface mypageProps {
	title: string;
	description: string;
	pageData: ANY_OBJECT;
}

export default function Mypage({ title, description, pageData }: mypageProps) {
	const router = useRoute();

	// Zustandの状態を取得
	const uid = useUserStore((state) => state.user?.uid);
	useEffect(() => {
		if (!uid ?? uid === null) {
			router.replace("/login");
		}
	}, [uid, router]);

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<MypageView />
		</>
	);
}

export const getServerSideProps = async (context: ANY_OBJECT) => {
	return promiseAll([requestPageData(context)], {
		then: ([pageData]) => ({
			props: {
				title: "マイページのお気に入り|宿検索",
				description: "マイページのお気に入りです",
				// pageData: pageData,
			},
		}),
	});
};
