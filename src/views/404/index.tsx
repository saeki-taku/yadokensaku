// react / next
import React from "react";
// lib
import Image from "next/image";
import Link from "next/link";
// styles
import styles from "@/styles/404.module.scss";

const NoPageView = () => {
	return (
		<>
			<div className={styles.hero}>
				<figure style={{ position: "relative", width: "100%", height: "200px" }}>
					<Image
						alt=""
						src="/img/top/hero.jpg"
						fill
						style={{
							objectFit: "cover",
						}}
					/>
				</figure>
				<div className={styles.hero_title}>404ページ</div>
			</div>

			<div className="common_wrap">
				<div className="noPage">
					<div className="text_wrap">
						<p className="title">お探しのページは見つかりませんでした。</p>
					</div>
					<Link href="/" className="link">
						トップページに戻る
					</Link>
				</div>
			</div>
		</>
	);
};

export default NoPageView;
