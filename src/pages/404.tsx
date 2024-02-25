// react
import React from "react";
import Head from "next/head";
// lib
import Link from "next/link";
// styles
import styles from "@/styles/404.module.scss";
// components
import NoPageView from "@/views/404";

interface noPageProps {
	title: string;
	description: string;
	// pageData: ANY_OBJECT;
}

export default function Login({ title, description }: noPageProps) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<NoPageView />
		</>
	);
}

export const getStaticProps = () => {
	return {
		props: {
			title: "404|宿検索",
			description: "404ページです",
		},
	};
};
