// react
import React, { useEffect, useState } from "react";
import Head from "next/head";
// views
import LoginView from "@/views/Login";
// hools
import { useRoute } from "@/hooks/useRoute";
// zustand
import { useUserStore } from "@/hooks/useUserStore";

interface LoginProps {
	title: string;
	description: string;
	pageData: ANY_OBJECT;
}

export default function Login({ title, description, pageData }: LoginProps) {
	const router = useRoute();

	// Zustandの状態を取得
	const uid = useUserStore((state) => state.user?.uid);
	useEffect(() => {
		if (uid && uid.length > 0) {
			router.replace("/mypage");
		}
	}, [uid, router]);

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<LoginView />
		</>
	);
}

export const getServerSideProps = async (context: ANY_OBJECT) => {
	return {
		props: {
			title: "ログイン|宿検索",
			description: "宿検索のログインです",
			// pageData: pageData,
		},
	};
};
