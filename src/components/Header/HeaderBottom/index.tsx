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

	const [favoriteHotelLength, setFavoriteHotelLength] = useState(0);
	const [wentHotelLength, setWentHotelLength] = useState(0);

	useEffect(() => {
		getHotelIds("favoriteHotels", uid)
			.then((result) => {
				setFavoriteHotelLength(result.length);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, [uid, setFavoriteHotelLength]);

	useEffect(() => {
		getHotelIds("wentHotels", uid)
			.then((result) => {
				setWentHotelLength(result.length);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, [uid, setWentHotelLength]);

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
