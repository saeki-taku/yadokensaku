// react
import { useEffect, useState } from "react";
// lib
import Link from "next/link";
// style
import styles from "@/styles/header.module.scss";
// utils
import { getHotelIds } from "../../../utils/myhotel";
// zustand
import { useUserStore } from "@/hooks/useUserStore";

export default function HeaderBottom() {
	// Zustandの状態を取得
	const uid = useUserStore((state) => state.user?.uid);

	console.log("uid??", uid);
	console.log("getHotelId", getHotelIds("favoriteHotels", uid));
	getHotelIds("favoriteHotels", uid);

	const [favoriteHotelLength, setFavoriteHotelLength] = useState(0);
	const [wentHotelLength, setWentHotelLength] = useState(0);

	useEffect(() => {
		if (uid === undefined) {
			setFavoriteHotelLength(0);
		} else {
			console.log("det", getHotelIds("favoriteHotels", uid));
			getHotelIds("favoriteHotels", uid)
				.then((result) => {
					setFavoriteHotelLength(result.length);
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		}
	}, [uid, setFavoriteHotelLength, favoriteHotelLength]);

	useEffect(() => {
		if (uid === undefined) {
			setWentHotelLength(0);
		} else {
			getHotelIds("wentHotels", uid)
				.then((result) => {
					setWentHotelLength(result.length);
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		}
	}, [uid, setWentHotelLength, wentHotelLength]);

	return (
		<div className={styles.bottom}>
			<span className={styles.favourite}>
				<Link href="/mypage/favorit">お気に入り({favoriteHotelLength})</Link>
			</span>
			<span className={styles.went}>
				<Link href="/mypage/favorit">行ったことある({wentHotelLength})</Link>
			</span>
		</div>
	);
}
