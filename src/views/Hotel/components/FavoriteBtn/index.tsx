// react
import { useEffect, useState } from "react";
// style
import styles from "@/styles/hotel.module.scss";
// utils
import { getFavoriteHotelIds, getWentHotelIds } from "../../../../utils/myhotel";
// firebase
import { doc, getDocs, setDoc, updateDoc, arrayUnion, arrayRemove, collection, FieldValue, deleteField } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import "firebase/firestore";
// zustand
import { useUserStore, useFavoriteStore, useWentStore } from "@/hooks/useUserStore";
// component
import Modal from "@/components/common/Modal";

interface FavoriteBtnProps {
	hotelNo: number; // 仮に数値型としていますが、実際の型に合わせて変更してください
	hotelName: string;
	imgUrl: string;
	pref: string;
	lat: number;
	lng: number;
}

const FavoriteBtn = ({ hotelNo, hotelName, imgUrl, pref, lat, lng }: FavoriteBtnProps) => {
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
		getFavoriteHotelIds(uid)
			.then((result) => {
				setFavoriteHotelIdLength(result.length);
				result.forEach((id: number) => {
					if (hotelNo === id) {
						setIsFavoriteHotelId(true);
					}
				});
			})
			.catch((error) => {
				console.error("Error:", error);
			});

		// todo: 行ったことあるのIDを取得して関数を作成する
		getWentHotelIds(uid)
			.then((result) => {
				result.forEach((id: number) => {
					if (hotelNo === id) {
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

		const favoriteCollection = doc(db, `users/${uid}/myhotel`, "favorite");

		if (!isFavoriteHotelId) {
			if (15 <= favoriteHotelIdLength) {
				alert("お気に入り登録は15件までしかできません");
			} else {
				console.log("favoriteCollection", favoriteCollection);
				await updateDoc(favoriteCollection, {
					// users/uid/favorite/hotel/id 保存される場所
					id: arrayUnion(hotelNo),
				});
				increaseFavorite(favoritHotels);
				setIsFavoriteHotelId(true);
			}
		} else {
			alert("お気に入りを解除しました");
			await updateDoc(favoriteCollection, {
				id: arrayRemove(hotelNo),
			});
			decreaseFavorite(favoritHotels);
			setIsFavoriteHotelId(false);
		}
	};

	// 「行ったことある」を追加した時の処理を記述（サブコレクショへの登録・削除）
	// 登録内容 :
	// Id hotelName imgUrl pref lat lng myReview
	// ホテルID/ホテル名/画像URL/都道府県/緯度/経度/自分で評価できる星
	const toggleWent = async (e: any) => {
		e.preventDefault();

		const wentCollection = doc(db, `users/${uid}/myhotel`, "went");
		// todo: 行ったことある追加時にポップアップ（モーダル）みたいな感じで自分の星の評価できるようにする
		const hotelData = {
			hotelName: hotelName,
			imgUrl: imgUrl ? imgUrl : "",
			pref: pref ? pref : "",
			lat: lat ? lat : undefined,
			lng: lng ? lng : undefined,
			myReview: 0,
		};

		if (!isWentHotelId) {
			await setDoc(
				wentCollection,
				{
					[hotelNo]: hotelData,
				},
				{ merge: true }
			);
			increaseWent(wentHotels);
			setIsWentHotelId(true);
		} else {
			alert("行ったことあるを解除しました");
			await updateDoc(wentCollection, {
				[hotelNo]: deleteField(),
			});
			decreaseWent(wentHotels);
			setIsWentHotelId(false);
		}
	};

	return (
		<>
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
			<Modal />
		</>
	);
};

export default FavoriteBtn;
