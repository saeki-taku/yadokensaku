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
import useUserStore from "@/hooks/useUserStore";

const FavoriteBtn = (hotelNo: ANY_OBJECT) => {
	// Zustandの状態を取得
	const uid = useUserStore((state) => state.user?.uid);
	// console.log("uid::", uid);

	const [isFavoriteHotelId, setIsFavoriteHotelId] = useState(false);
	const [isWentHotelId, setIsWentHotelId] = useState(false);

	// お気に入りホテル
	useEffect(() => {
		// const getHotelIds = async (type: string) => {
		// 	const userDocRef = doc(db, "users", `${uid}`);
		// 	const favoritesCollectionRef = collection(userDocRef, type);
		// 	let favoriteData: Array<number> = [];

		// 	try {
		// 		const querySnapshot = await getDocs(favoritesCollectionRef);
		// 		querySnapshot.forEach((docs) => {
		// 			const hotelIdsArray = docs.data().id;
		// 			hotelIdsArray.forEach((id: number) => {
		// 				favoriteData.push(id);
		// 			});
		// 		});
		// 	} catch (error) {
		// 		console.error("Error getting documents: ", error);
		// 	}
		// 	return favoriteData;
		// };

		getHotelIds("favoriteHotels", uid)
			.then((result) => {
				result.forEach((id: number) => {
					if (hotelNo.hotelNo === id) {
						setIsFavoriteHotelId(true);
					}
				});
				console.log("Result:", result);
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
				console.log("Result:", result);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, []);

	// 「お気に入り・行ったことある」を追加した時の処理を記述（サブコレクショへの登録・削除）
	const toggleFavorite = async (e: any) => {
		e.preventDefault();

		const favoriteCollection = doc(db, `users/${uid}/favoriteHotels`, "hotel");
		console.log("favoriteCollection", favoriteCollection.id);
		if (!isFavoriteHotelId) {
			await updateDoc(favoriteCollection, {
				id: arrayUnion(hotelNo.hotelNo),
			});
			setIsFavoriteHotelId(true);
		} else {
			alert("お気に入りを解除しました");
			await updateDoc(favoriteCollection, {
				id: arrayRemove(hotelNo.hotelNo),
			});
			setIsFavoriteHotelId(false);
		}
	};

	const toggleWent = async (e: any) => {
		e.preventDefault();

		const wentCollection = doc(db, `users/${uid}/wentHotels`, "hotel");
		console.log("wentCollection", wentCollection.id);
		if (!isWentHotelId) {
			await updateDoc(wentCollection, {
				id: arrayUnion(hotelNo.hotelNo),
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
				お気に入り<span className="xs_none">に追加</span>
			</a>
			<a href="#" onClick={toggleWent} className={isWentHotelId ? `${styles.wentBtn} ${styles._add}` : styles.wentBtn}>
				<i className={styles.icon}></i>
				行った<span className="">ことがある</span>
			</a>
		</div>
	);
};

export default FavoriteBtn;
