import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// Font Awesomeの設定
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
// zustand
import { useUserStore } from "@/hooks/useUserStore";

config.autoAddCss = false;

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const handleViewport = () => {
			if (window.innerWidth <= 360) {
				console.log("111");
				document.querySelector('meta[name="viewport"]')?.setAttribute("content", "width=360, maximum-scale=1.0, user-scalable=no");
			} else {
				console.log("222");
				document.querySelector('meta[name="viewport"]')?.setAttribute("content", "device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
			}
		};

		handleViewport();

		return () => {
			window.removeEventListener("resize", handleViewport);
		};
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	);
}
