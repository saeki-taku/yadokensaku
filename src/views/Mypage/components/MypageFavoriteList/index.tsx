// react / next
import React, { useEffect, useState } from "react";
import Image from "next/image";
// styles
import styles from "@/styles/mypage.module.scss";
// components
import ImgLinkCheck from "../../../Search/components/ImgLinkCheck";
// lib
import ReactStarsRating from "react-awesome-stars-rating";
// utils
import { getFavoriteHotelIds } from "../../../../utils/myhotel";
// firebase
import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import "firebase/firestore";
// zustand
import { useUserStore, useFavoriteStore } from "@/hooks/useUserStore";
// api
import { HotelSimple } from "@/api/hotel";

const MypageFavoriteList = () => {
	// Zustandの状態を取得
	const uid = useUserStore((state) => state.user?.uid);
	const [favoriteHotelIdArr, setFavoriteHotelIdArr] = useState<Array<number>>([]);
	const [favoriteHotelInfoArr, setFavoriteHotelInfoArr] = useState<any>([]);

	const favoritHotels = useFavoriteStore((state) => state.favoriteHotels);
	const decreaseFavorite = useFavoriteStore((state) => state.decreaseFavorite);

	const [updateFlag, setUpdateFlag] = useState(false);

	const fetchData = async (idArr: any) => {
		if (idArr.length === 0) {
			console.log("No hotel IDs to fetch");
			return;
		}

		try {
			const idArrString = idArr.join(",");
			return await HotelSimple(idArrString);
		} catch (error) {
			console.error("Error:", error);
			throw error;
		}
	};

	useEffect(() => {
		getFavoriteHotelIds(uid)
			.then((result) => {
				// APIでは16個以上参照できないため15個まで末尾を削除
				// 登録自体を15までと制限する必要あり
				const maxLength = 15;
				const newArr = result.slice(0, maxLength);
				setFavoriteHotelIdArr(newArr);
			})
			.catch((error) => {
				console.log("Error:", error);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [uid, setFavoriteHotelIdArr]);

	// firebaseに保存してあるホテルIDをもとにお気に入りホテル情報を取得
	useEffect(() => {
		fetchData(favoriteHotelIdArr)
			.then((result) => {
				setFavoriteHotelInfoArr(result);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [favoriteHotelIdArr]);

	let favoriteHotels = favoriteHotelInfoArr?.hotels ? favoriteHotelInfoArr?.hotels : [];

	const removeFavorite = async (e: any, hotelNo: number) => {
		e.preventDefault();

		const favoriteCollection = doc(db, `users/${uid}/myhotel`, "favorite");

		alert("お気に入りを解除しました");
		await updateDoc(favoriteCollection, {
			id: arrayRemove(hotelNo),
		});
		decreaseFavorite(favoritHotels);
	};

	return (
		<div className={`${styles.list_wrap} ${styles.favorite}`}>
			<div className={styles.list_title}>
				<span>最近追加したお気に入り</span>
			</div>
			<ul className={styles.list}>
				{favoriteHotels.length > 0 ? (
					favoriteHotels?.map((data: ANY_OBJECT, idnex: number) => {
						const hotelBasicData = data.hotel[0].hotelBasicInfo;
						/* 5件まで表示 */
						if (idnex >= 5) {
							return null;
						}

						return (
							<li key={hotelBasicData.hotelNo}>
								<div className={`${styles.head} ${styles._sp}`}>
									<span className={styles.pref}>{hotelBasicData.address1}</span>
									<div className={styles.title}>
										<a href={`/hotel/${hotelBasicData.hotelNo}`}>{hotelBasicData.hotelName}</a>
									</div>
								</div>
								<div className={styles.img_box}>
									<figure>
										<ImgLinkCheck link={hotelBasicData.hotelImageUrl} />
										{/* <Image
													src={"https://img.travel.rakuten.co.jp/share/HOTEL/806/806.jpg"}
													alt=""
													width={400}
													height={300}
													sizes="100vw"
													style={{
														width: "100%",
														height: "auto",
													}}
												/> */}
										{/* <ImgLinkCheck link={} /> */}
									</figure>
								</div>
								<div className={styles.text_box}>
									<div className={`${styles.head} ${styles._pc}`}>
										<span className={styles.pref}>{hotelBasicData.address1}</span>
										<div className={styles.title}>
											<a href={`/hotel/${hotelBasicData.hotelNo}`}>{hotelBasicData.hotelName}</a>
										</div>
									</div>
									<div className={styles.info_evaluation}>
										<div className={styles.kuchikomi}>
											<span className={styles.title}>総合評価</span>
											<span className={styles.average}>{hotelBasicData.reviewAverage.toFixed(2)}</span>
											<div className={styles.box}>
												<ReactStarsRating isEdit={false} size={15} value={hotelBasicData.reviewAverage} />
												<a className={styles.url} href={hotelBasicData.reviewUrl} target="_blank" rel="noreferrer">
													{hotelBasicData.reviewCount}
												</a>
											</div>
										</div>
										<div className={styles.minCharge}>
											<span className={styles.title}>
												最安値<span>（税込）</span>
											</span>
											<span className={styles.num}>{hotelBasicData.hotelMinCharge}円〜</span>
										</div>
									</div>
									<a href="" className={styles.removeBtn} onClick={(e) => removeFavorite(e, hotelBasicData.hotelNo)}>
										<i className={styles.icon}></i>
										<span className={styles.text}>お気に入り解除</span>
									</a>
								</div>
							</li>
						);
					})
				) : (
					<li>お気に入りのホテルはありません。</li>
				)}
			</ul>
		</div>
	);
};

export default MypageFavoriteList;
