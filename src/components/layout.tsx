import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
// Next.jsが推奨しているフォントの一覧に日本語対応のフォントが少なかった為、今回は使用しない
// 公式：https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#google-fonts
// 参考：https://commte.net/nextjs-google-font
// https://fonts.google.com/variablefonts

export default function Layout({ children }: any) {
	// windowサイズが360px以下の場合はスタイル崩れを防ぐためにもviewportを固定する

	return (
		<div className="root">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
