// react
import { useEffect, useState } from "react";
// lib
import Link from "next/link";
// style
import styles from "@/styles/header.module.scss";
// utils
import { getHotelIds } from "../../../utils/myhotel";
// zustand
import { useUserStore, usefavoriteStore } from "@/hooks/useUserStore";

export default function HeaderBottom() {
	// Zustand（UserStore）
	const uid = useUserStore((state) => state.user?.uid);
	// Zustand（favoriteHotelsStore）
	const favoritHotels = usefavoriteStore((state) => state.favoriteHotels);
	const [favoriteHotelLength, setFavoriteHotelLength] = useState(0);
	const [wentHotelLength, setWentHotelLength] = useState(0);

	useEffect(() => {
		if (uid === undefined) {
			setFavoriteHotelLength(0);
		} else {
			console.log("det", getHotelIds("favoriteHotels", uid));
			getHotelIds("favoriteHotels", uid)
				.then((result) => {
					// 2024/01/24 Zustandの記述があればここではfirebaseからの取得はいらない？
					setFavoriteHotelLength(favoritHotels);
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [favoritHotels]);
	// }, [uid, setFavoriteHotelLength, favoriteHotelLength]);

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
