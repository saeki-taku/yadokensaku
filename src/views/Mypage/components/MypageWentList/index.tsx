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
import { getFavoriteHotelIds, getWentHotelInfo } from "../../../../utils/myhotel";
// firebase
import { doc, getDocs, setDoc, updateDoc, arrayUnion, arrayRemove, collection, FieldValue, deleteField } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import "firebase/firestore";
// zustand
import { useUserStore, useWentStore } from "@/hooks/useUserStore";

const MypageWentList = () => {
	// Zustandの状態を取得
	const uid = useUserStore((state) => state.user?.uid);
	const [wentHotelArr, setWentHotelArr] = useState<Array<any>>([]);

	useEffect(() => {
		getWentHotelInfo(uid)
			.then((result) => {
				console.log("setWentHotelArr", result);
				result && setWentHotelArr(result);
			})
			.catch((error) => {
				console.log("Error:", error);
			});
	}, [uid, setWentHotelArr]);

	let wentHotels = wentHotelArr ? Object.values(wentHotelArr) : [];

	return (
		<div className={`${styles.list_wrap} ${styles.went}`}>
			<div className={styles.list_title}>
				<span>最近追加した行ったことある</span>
			</div>
			<ul className={styles.list}>
				{wentHotels.length > 0 ? (
					wentHotels?.map((data: ANY_OBJECT, idnex: number) => {
						/* 5件まで表示 */
						if (idnex >= 5) {
							return null;
						}
						return (
							<li key={data.hotelNo}>
								<div className={styles.img_box}>
									<figure>
										<ImgLinkCheck link={data.imgUrl} />
										{/* <Image
													src={data.imgUrl}
													alt=""
													width={400}
													height={300}
													sizes="100vw"
													style={{
														width: "100%",
														height: "auto",
													}}
												/> */}
									</figure>
								</div>
								<div className={styles.text_box}>
									<div className={`${styles.head} ${styles._pc}`}>
										<span className={styles.pref}>{data.pref}</span>
										<div className={styles.title}>
											<a href={data.hotelNo ? `/hotel/${data.hotelNo}` : "#"}>{data.hotelName}</a>
										</div>
									</div>
									<div className={styles.info_evaluation}>
										<div className={styles.kuchikomi}>
											<span className={styles.title}>マイ評価</span>
											<span className={styles.average}>{data.myReview.toFixed(2)}</span>
											<div className={styles.box}>
												<ReactStarsRating isEdit={false} size={15} value={data.myReview} />
											</div>
										</div>
									</div>
									<a href="" className={styles.removeBtn}>
										<i className={styles.icon}></i>
										<span className={styles.text}>行ったことあるを解除</span>
									</a>
								</div>
							</li>
						);
					})
				) : (
					<li>行ったことあるのホテルはありません。</li>
				)}
			</ul>
		</div>
	);
};

export default MypageWentList;
