// react / next
import React, { useEffect, useState } from "react";
import Image from "next/image";
// styles
import styles from "@/styles/mypage.module.scss";
// components
import MypageMenuList from "./components/MypageMenuList";
import MypageFavoriteList from "./components/MypageFavoriteList";
import MypageWentList from "./components/MypageWentList";
import ImgLinkCheck from "../Search/components/ImgLinkCheck";
// lib
import ReactStarsRating from "react-awesome-stars-rating";
// utils
import { getFavoriteHotelIds, getWentHotelInfo } from "../../utils/myhotel";
// firebase
import { doc, getDocs, setDoc, updateDoc, arrayUnion, arrayRemove, collection, FieldValue, deleteField } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import "firebase/firestore";
// zustand
import { useUserStore, useFavoriteStore, useWentStore } from "@/hooks/useUserStore";
// api
import { HotelSimple } from "@/api/hotel";

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
				<MypageFavoriteList />
				<MypageWentList />
			</div>
		</>
	);
};

export default MypageView;
