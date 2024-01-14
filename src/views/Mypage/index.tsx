// react / next
import React, { useEffect, useState } from "react";
import Image from "next/image";
// styles
import styles from "@/styles/mypage.module.scss";
// components
import MypageMenuList from "./components/MypageMenuList";
// lib
import ReactStarsRating from "react-awesome-stars-rating";
// utils
import { getHotelIds } from "../../utils/myhotel";
// zustand
import { useUserStore } from "@/hooks/useUserStore";
// api
import { HotelSimple } from "@/api/hotel";

const MypageView = () => {
	// Zustandの状態を取得
	const uid = useUserStore((state) => state.user?.uid);
	const [favoriteHotelIdArr, setFavoriteHotelIdArr] = useState<Array<number>>([]);
	const [favoriteHotelInfoArr, setFavoriteHotelInfoArr] = useState<any>([]);

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
		getHotelIds("favoriteHotels", uid)
			.then((result) => {
				setFavoriteHotelIdArr(result);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [uid, setFavoriteHotelIdArr]);

	// firebaseに保存してあるホテルIDをもとにホテル情報を取得
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

	console.log("favoriteHotelInfoArr___::", favoriteHotelInfoArr);

	return (
		<>
			<div className={styles.hero}>
				<figure style={{ position: "relative", width: "100%", height: "300px" }}>
					<Image
						alt=""
						src="/img/top/hero.jpg"
						fill
						style={{
							objectFit: "cover",
						}}
					/>
				</figure>
				<div className={styles.hero_title}>マイページ</div>
			</div>
			<div className={styles.mypage_wrap}>
				<MypageMenuList />
				{/* お気に入りリスト　3件まで */}
				{/* <div className={styles.list_wrap}> */}
				<div className={`${styles.list_wrap} ${styles.favorit}`}>
					<div className={styles.list_title}>
						<span>お気に入り</span>
					</div>
					<ul className={styles.list}>
						<li>
							<div className={`${styles.head} ${styles._sp}`}>
								<span className={styles.pref}>東京都</span>
								<div className={styles.title}>
									<a href="">三井ガーデンホテル　プラナ東京ベイ</a>
								</div>
							</div>
							<div className={styles.img_box}>
								<figure>
									<Image
										src={"https://img.travel.rakuten.co.jp/share/HOTEL/806/806.jpg"}
										alt=""
										width={400}
										height={300}
										sizes="100vw"
										style={{
											width: "100%",
											height: "auto",
										}}
									/>
									{/* <ImgLinkCheck link={} /> */}
								</figure>
							</div>
							<div className={styles.text_box}>
								<div className={`${styles.head} ${styles._pc}`}>
									<span className={styles.pref}>東京都</span>
									<div className={styles.title}>
										<a href="">三井ガーデンホテル　プラナ東京ベイ</a>
									</div>
								</div>
								{/* </div> */}
								<div className={styles.info_evaluation}>
									{/* {hotelBasicInfo.reviewAverage && ( */}
									<div className={styles.kuchikomi}>
										<span className={styles.title}>総合評価</span>
										<span className={styles.average}>{4.84}</span>
										<div className={styles.box}>
											<ReactStarsRating isEdit={false} size={15} value={4} />
											<a className={styles.url} href={"/"} target="_blank" rel="noreferrer">
												{100}
											</a>
										</div>
									</div>
									{/* )} */}
									<div className={styles.minCharge}>
										<span className={styles.title}>
											最安値<span>（税込）</span>
										</span>
										<span className={styles.num}>{1000}円〜</span>
									</div>
								</div>
								<a href="" className={styles.favoriteBtn}>
									<i className={styles.icon}></i>
									<span className={styles.text}>お気に入り解除</span>
								</a>
							</div>
						</li>
						<li>
							<div className={styles.img_box}>
								<figure>
									<Image
										src={"https://img.travel.rakuten.co.jp/share/HOTEL/806/806.jpg"}
										alt=""
										width={400}
										height={300}
										sizes="100vw"
										style={{
											width: "100%",
											height: "auto",
										}}
									/>
									{/* <ImgLinkCheck link={} /> */}
								</figure>
							</div>
							<div className={styles.text_box}>
								<span className={styles.pref}>東京都</span>
								<div className={styles.title}>
									<a href="">三井ガーデンホテル　プラナ東京ベイ</a>
								</div>
								<div className={styles.info_evaluation}>
									{/* {hotelBasicInfo.reviewAverage && ( */}
									<div className={styles.kuchikomi}>
										<span className={styles.title}>総合評価</span>
										<span className={styles.average}>{4.84}</span>
										<div className={styles.box}>
											<ReactStarsRating isEdit={false} size={15} value={4} />
											<a className={styles.url} href={"/"} target="_blank" rel="noreferrer">
												{100}
											</a>
										</div>
									</div>
									{/* )} */}
									<div className={styles.minCharge}>
										<span className={styles.title}>
											最安値<span>（税込）</span>
										</span>
										<span className={styles.num}>{1000}円〜</span>
									</div>
								</div>
								<a href="" className={styles.favoriteBtn}>
									<i className={styles.icon}></i>
									<span className={styles.text}>お気に入り解除</span>
								</a>
							</div>
						</li>
						<li>
							<div className={styles.img_box}>
								<figure>
									<Image
										src={"https://img.travel.rakuten.co.jp/share/HOTEL/806/806.jpg"}
										alt=""
										width={400}
										height={300}
										sizes="100vw"
										style={{
											width: "100%",
											height: "auto",
										}}
									/>
									{/* <ImgLinkCheck link={} /> */}
								</figure>
							</div>
							<div className={styles.text_box}>
								<span className={styles.pref}>東京都</span>
								<div className={styles.title}>
									<a href="">三井ガーデンホテル　プラナ東京ベイ</a>
								</div>
								<div className={styles.info_evaluation}>
									{/* {hotelBasicInfo.reviewAverage && ( */}
									<div className={styles.kuchikomi}>
										<span className={styles.title}>総合評価</span>
										<span className={styles.average}>{4.84}</span>
										<div className={styles.box}>
											<ReactStarsRating isEdit={false} size={15} value={4} />
											<a className={styles.url} href={"/"} target="_blank" rel="noreferrer">
												{100}
											</a>
										</div>
									</div>
									{/* )} */}
									<div className={styles.minCharge}>
										<span className={styles.title}>
											最安値<span>（税込）</span>
										</span>
										<span className={styles.num}>{1000}円〜</span>
									</div>
								</div>
								<a href="" className={styles.favoriteBtn}>
									<i className={styles.icon}></i>
									<span className={styles.text}>お気に入り解除</span>
								</a>
							</div>
						</li>
					</ul>
				</div>
				{/* 行ったリスト　3件まで */}
				<div className={`${styles.list_wrap} ${styles.went}`}>
					<div className={styles.list_title}>
						<span>行ったことある</span>
					</div>
					<ul className={styles.list}>
						<li>
							<div className={styles.img_box}>
								<figure>
									<Image
										src={"https://img.travel.rakuten.co.jp/share/HOTEL/806/806.jpg"}
										alt=""
										width={400}
										height={300}
										sizes="100vw"
										style={{
											width: "100%",
											height: "auto",
										}}
									/>
									{/* <ImgLinkCheck link={} /> */}
								</figure>
							</div>
							<div className={styles.text_box}>
								<span className={styles.pref}>東京都</span>
								<div className={styles.title}>
									<a href="">三井ガーデンホテル　プラナ東京ベイ</a>
								</div>
								<div className={styles.info_evaluation}>
									{/* {hotelBasicInfo.reviewAverage && ( */}
									<div className={styles.kuchikomi}>
										<span className={styles.title}>総合評価</span>
										<span className={styles.average}>{4.84}</span>
										<div className={styles.box}>
											<ReactStarsRating isEdit={false} size={15} value={4} />
											<a className={styles.url} href={"/"} target="_blank" rel="noreferrer">
												{100}
											</a>
										</div>
									</div>
									{/* )} */}
									<div className={styles.minCharge}>
										<span className={styles.title}>
											最安値<span>（税込）</span>
										</span>
										<span className={styles.num}>{1000}円〜</span>
									</div>
								</div>
								<a href="" className={styles.favoriteBtn}>
									<i className={styles.icon}></i>
									<span className={styles.text}>行ったことあるを解除</span>
								</a>
							</div>
						</li>
						<li>
							<div className={styles.img_box}>
								<figure>
									<Image
										src={"https://img.travel.rakuten.co.jp/share/HOTEL/806/806.jpg"}
										alt=""
										width={400}
										height={300}
										sizes="100vw"
										style={{
											width: "100%",
											height: "auto",
										}}
									/>
									{/* <ImgLinkCheck link={} /> */}
								</figure>
							</div>
							<div className={styles.text_box}>
								<span className={styles.pref}>東京都</span>
								<div className={styles.title}>
									<a href="">三井ガーデンホテル　プラナ東京ベイ</a>
								</div>
								<div className={styles.info_evaluation}>
									{/* {hotelBasicInfo.reviewAverage && ( */}
									<div className={styles.kuchikomi}>
										<span className={styles.title}>総合評価</span>
										<span className={styles.average}>{4.84}</span>
										<div className={styles.box}>
											<ReactStarsRating isEdit={false} size={15} value={4} />
											<a className={styles.url} href={"/"} target="_blank" rel="noreferrer">
												{100}
											</a>
										</div>
									</div>
									{/* )} */}
									<div className={styles.minCharge}>
										<span className={styles.title}>
											最安値<span>（税込）</span>
										</span>
										<span className={styles.num}>{1000}円〜</span>
									</div>
								</div>
								<a href="" className={styles.favoriteBtn}>
									<i className={styles.icon}></i>
									<span className={styles.text}>行ったことあるを解除</span>
								</a>
							</div>
						</li>
						<li>
							<div className={styles.img_box}>
								<figure>
									<Image
										src={"https://img.travel.rakuten.co.jp/share/HOTEL/806/806.jpg"}
										alt=""
										width={400}
										height={300}
										sizes="100vw"
										style={{
											width: "100%",
											height: "auto",
										}}
									/>
									{/* <ImgLinkCheck link={} /> */}
								</figure>
							</div>
							<div className={styles.text_box}>
								<span className={styles.pref}>東京都</span>
								<div className={styles.title}>
									<a href="">三井ガーデンホテル　プラナ東京ベイ</a>
								</div>
								<div className={styles.info_evaluation}>
									{/* {hotelBasicInfo.reviewAverage && ( */}
									<div className={styles.kuchikomi}>
										<span className={styles.title}>総合評価</span>
										<span className={styles.average}>{4.84}</span>
										<div className={styles.box}>
											<ReactStarsRating isEdit={false} size={15} value={4} />
											<a className={styles.url} href={"/"} target="_blank" rel="noreferrer">
												{100}
											</a>
										</div>
									</div>
									{/* )} */}
									<div className={styles.minCharge}>
										<span className={styles.title}>
											最安値<span>（税込）</span>
										</span>
										<span className={styles.num}>{1000}円〜</span>
									</div>
								</div>
								<a href="" className={styles.favoriteBtn}>
									<i className={styles.icon}></i>
									<span className={styles.text}>行ったことあるを解除</span>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default MypageView;
