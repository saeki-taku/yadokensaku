// react / next
import React, { useEffect, useState } from "react";
import Image from "next/image";
// styles
import styles from "@/styles/mypage.module.scss";
// components
import MypageMenuList from "@/components/Mypage/MypageMenuList";
import MypageWentList from "@/components/Mypage/MypageWentList";
import WentMap from "./components/WentMap";
// lib
import ReactStarsRating from "react-awesome-stars-rating";
// zustand
import { useUserStore } from "@/hooks/useUserStore";

const MypageWentView = () => {
	// Zustandの状態を取得
	const uid = useUserStore((state) => state.user?.uid);

	return (
		<>
			<div className={styles.hero}>
				<figure style={{ position: "relative", width: "100%", height: "300px" }}>
					<Image
						alt=""
						src="/img/top/hero.jpg"
						fill
						style={{
							objectFit: "cover",
						}}
					/>
				</figure>
				<div className={styles.hero_title}>マイページ</div>
			</div>
			<div className={styles.mypage_wrap}>
				<MypageMenuList />
				<WentMap />
				<MypageWentList isLimit={false} />
			</div>
		</>
	);
};

export default MypageWentView;
