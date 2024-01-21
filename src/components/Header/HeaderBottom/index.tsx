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
	const setUser = useUserStore((state) => state.setUser);

	const [favoriteHotelLength, setFavoriteHotelLength] = useState(0);
	const [wentHotelLength, setWentHotelLength] = useState(0);

	// Zustandのuser情報を更新
	// setUser({
	// 	name: user.displayName ? user.displayName : "",
	// 	email: user.email ? user.email : "",
	// 	uid: user.uid ? user.uid : "",
	// });

	const { favoriteHotels } = usefavoriteStore();
	console.log("favoriteHotels", favoriteHotels);

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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
