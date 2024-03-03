// react
import React, { useEffect } from "react";
import Head from "next/head";
// views
import MemberPassModefyView from "@/views/MypageMemberInfoModefy";
// datasources
import { requestPageData } from "@/dataSource/hotel/requestPageData";
// others
import { promiseAll } from "@/utils/common";
// hools
import { useRoute } from "@/hooks/useRoute";
import { useUserStore } from "@/hooks/useUserStore";

interface mypageProps {
	title: string;
	description: string;
	pageData: ANY_OBJECT;
}

export default function MemberPassModefy({ title, description, pageData }: mypageProps) {
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
			<MemberPassModefyView />
		</>
	);
}

export const getServerSideProps = async (context: ANY_OBJECT) => {
	return promiseAll([requestPageData(context)], {
		then: ([pageData]) => ({
			props: {
				title: "マイページのパスワードの修正|宿検索",
				description: "マイページのパスワードの修正です",
				// pageData: pageData,
			},
		}),
	});
};
