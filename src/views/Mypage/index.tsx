// react / next
import React, { useEffect, useState } from "react";
import Image from "next/image";
// styles
import styles from "@/styles/mypage.module.scss";
// components
import MypageMenuList from "@/components/Mypage/MypageMenuList";
import MypageFavoriteList from "@/components/Mypage/MypageFavoriteList";
import MypageWentList from "@/components/Mypage/MypageWentList";
// firebase
import "firebase/firestore";

const MypageView = () => {
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
				<MypageFavoriteList isLimit={true} />
				<MypageWentList isLimit={true} />
			</div>
		</>
	);
};

export default MypageView;
