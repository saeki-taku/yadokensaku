// react
import { useEffect, useState } from "react";
// lib
import Link from "next/link";
// style
import styles from "@/styles/header.module.scss";
// zustand
import { useUserStore, useFavoriteStore, useWentStore } from "@/hooks/useUserStore";

export default function HeaderBottom() {
	// Zustand
	const uid = useUserStore((state) => state.user?.uid);
	const favoritHotels = useFavoriteStore((state) => state.favoriteHotels);
	const wentHotels = useWentStore((state) => state.wentHotels);

	const [favoriteHotelLength, setFavoriteHotelLength] = useState(0);
	const [wentHotelLength, setWentHotelLength] = useState(0);

	useEffect(() => {
		if (uid === undefined) {
			setFavoriteHotelLength(0);
			setWentHotelLength(0);
		} else {
			setFavoriteHotelLength(favoritHotels);
			setWentHotelLength(wentHotels);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [uid, favoritHotels, wentHotels]);

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
