// react
import React from "react";
import Head from "next/head";
// views
import SignupView from "@/views/Signup";

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
				<meta name="description" content={description} />
			</Head>
			<SignupView />
		</>
	);
}

export const getServerSideProps = () => {
	return {
		props: {
			title: "ログアウト|宿検索",
			description: "宿検索のログアウト画面です",
		},
	};
};
