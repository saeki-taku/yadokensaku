// react
import { useEffect, useState } from "react";
// style
import styles from "@/styles/hotel.module.scss";
// hooks
import { useRoute } from "@/hooks/useRoute";
// utils
import { getHotelIds } from "../../../../utils/myhotel";
// firebase
import { doc, getDocs, updateDoc, arrayUnion, arrayRemove, collection } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import "firebase/firestore";
// zustand
import { useUserStore, usefavoriteStore } from "@/hooks/useUserStore";

const FavoriteBtn = (hotelNo: ANY_OBJECT) => {
	// Zustandの状態を取得
	const uid = useUserStore((state) => {
		console.log("state", state.user);
		return state.user?.uid;
	});
	const setFavoriteHotels = usefavoriteStore((state) => state.setFavoriteHotels);
	const favoritHotelLength = usefavoriteStore((state) => state.favoriteHotels);

	const [favoriteHotelIdLength, setFavoriteHotelIdLength] = useState(0);
	const [isFavoriteHotelId, setIsFavoriteHotelId] = useState(false);
	const [isWentHotelId, setIsWentHotelId] = useState(false);

	// お気に入りホテル
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
	}, [favoriteHotelIdLength, isFavoriteHotelId, isWentHotelId]);

	// 「お気に入り」を追加した時の処理を記述（サブコレクショへの登録・削除）
	const toggleFavorite = async (e: any) => {
		e.preventDefault();

		const favoriteCollection = doc(db, `users/${uid}/favoriteHotels`, "hotel");
		// console.log("favoriteCollection", favoriteCollection.id);
		if (!isFavoriteHotelId) {
			if (15 <= favoriteHotelIdLength) {
				alert("お気に入り登録は15件までしかできません");
			} else {
				await updateDoc(favoriteCollection, {
					id: arrayUnion(hotelNo.hotelNo),
				});
				setFavoriteHotels(favoritHotelLength + 1);
				setIsFavoriteHotelId(true);
			}
		} else {
			alert("お気に入りを解除しました");
			await updateDoc(favoriteCollection, {
				id: arrayRemove(hotelNo.hotelNo),
			});
			setFavoriteHotels(favoritHotelLength - 1);
			setIsFavoriteHotelId(false);
		}
	};

	// 「行ったことある」を追加した時の処理を記述（サブコレクショへの登録・削除）
	const toggleWent = async (e: any) => {
		e.preventDefault();

		const wentCollection = doc(db, `users/${uid}/wentHotels`, "hotel");
		console.log("wentCollection", wentCollection.id);
		if (!isWentHotelId) {
			await updateDoc(wentCollection, {
				id: arrayUnion(hotelNo.hotelNo),
				// ここにidの直下にホテル名/ ホテルの画像URL / 緯度経度 / 自分評価を追加
				// 行ったことある追加時にポップアップ（モーダル）みたいな感じで星評価できるようにする
			});
			setIsWentHotelId(true);
		} else {
			alert("行ったことあるを解除しました");
			await updateDoc(wentCollection, {
				id: arrayRemove(hotelNo.hotelNo),
			});
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
