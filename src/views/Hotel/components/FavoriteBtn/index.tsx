// react
import { useEffect, useState } from "react";
// style
import styles from "@/styles/hotel.module.scss";
// utils
import { getHotelIds } from "../../../../utils/myhotel";
// firebase
import { doc, getDocs, updateDoc, arrayUnion, arrayRemove, collection } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import "firebase/firestore";
// zustand
import { useUserStore, useFavoriteStore, useWentStore } from "@/hooks/useUserStore";

const FavoriteBtn = (hotelNo: ANY_OBJECT) => {
	// Zustandの状態を取得
	const uid = useUserStore((state) => {
		return state.user?.uid;
	});
	const favoritHotels = useFavoriteStore((state) => state.favoriteHotels);
	const increaseFavorite = useFavoriteStore((state) => state.increaseFavorite);
	const decreaseFavorite = useFavoriteStore((state) => state.decreaseFavorite);

	const wentHotels = useWentStore((state) => state.wentHotels);
	const increaseWent = useWentStore((state) => state.increasewent);
	const decreaseWent = useWentStore((state) => state.decreasewent);

	const [favoriteHotelIdLength, setFavoriteHotelIdLength] = useState(0);
	const [isFavoriteHotelId, setIsFavoriteHotelId] = useState(false);
	const [isWentHotelId, setIsWentHotelId] = useState(false);

	// お気に入り・行ったことホテルの登録の有無
	useEffect(() => {
		getHotelIds("favoriteHotels", uid)
			.then((result) => {
				setFavoriteHotelIdLength(result.length);
				result.forEach((id: number) => {
					if (hotelNo.hotelNo === id) {
						setIsFavoriteHotelId(true);
					}
				});
			})
			.catch((error) => {
				console.error("Error:", error);
			});

		getHotelIds("wentHotels", uid)
			.then((result) => {
				result.forEach((id: number) => {
					if (hotelNo.hotelNo === id) {
						setIsWentHotelId(true);
					}
				});
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, [uid, hotelNo, favoriteHotelIdLength, isFavoriteHotelId, isWentHotelId]);

	// 「お気に入り」を追加した時の処理を記述（サブコレクショへの登録・削除）
	const toggleFavorite = async (e: any) => {
		e.preventDefault();

		const favoriteCollection = doc(db, `users/${uid}/favoriteHotels`, "hotel");

		if (!isFavoriteHotelId) {
			if (15 <= favoriteHotelIdLength) {
				alert("お気に入り登録は15件までしかできません");
			} else {
				await updateDoc(favoriteCollection, {
					id: arrayUnion(hotelNo.hotelNo),
				});
				increaseFavorite(favoritHotels);
				setIsFavoriteHotelId(true);
			}
		} else {
			alert("お気に入りを解除しました");
			await updateDoc(favoriteCollection, {
				id: arrayRemove(hotelNo.hotelNo),
			});
			decreaseFavorite(favoritHotels);
			setIsFavoriteHotelId(false);
		}
	};

	// 「行ったことある」を追加した時の処理を記述（サブコレクショへの登録・削除）
	const toggleWent = async (e: any) => {
		e.preventDefault();

		const wentCollection = doc(db, `users/${uid}/wentHotels`, "hotel");

		if (!isWentHotelId) {
			await updateDoc(wentCollection, {
				id: arrayUnion(hotelNo.hotelNo),
				// todo: ここにidの直下にホテル名/ ホテルの画像URL / 緯度経度 / 自分評価を追加
				// 行ったことある追加時にポップアップ（モーダル）みたいな感じで星評価できるようにする
			});
			increaseWent(wentHotels);
			setIsWentHotelId(true);
		} else {
			alert("行ったことあるを解除しました");
			await updateDoc(wentCollection, {
				id: arrayRemove(hotelNo.hotelNo),
			});
			decreaseWent(wentHotels);
			setIsWentHotelId(false);
		}
	};

	return (
		<div className={styles.favoriteBtnWrap}>
			<a href="#" onClick={toggleFavorite} className={isFavoriteHotelId ? `${styles.favoriteBtn} ${styles._add}` : styles.favoriteBtn}>
				<i className={styles.icon}></i>
				お気に入り
			</a>
			<a href="#" onClick={toggleWent} className={isWentHotelId ? `${styles.wentBtn} ${styles._add}` : styles.wentBtn}>
				<i className={styles.icon}></i>
				行った<span className="">ことがある</span>
			</a>
		</div>
	);
};

export default FavoriteBtn;
