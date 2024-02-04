// react / next
import React, { useEffect, useState } from "react";
import Image from "next/image";
// styles
import styles from "@/styles/mypage.module.scss";
// components
import MypageMenuList from "../Mypage/components/MypageMenuList";
import ImgLinkCheck from "../Search/components/ImgLinkCheck";
import WentMap from "./components/WentMap";
// lib
import ReactStarsRating from "react-awesome-stars-rating";
// zustand
import { useUserStore } from "@/hooks/useUserStore";

const MypageWentView = () => {
	// Zustandの状態を取得
	const uid = useUserStore((state) => state.user?.uid);

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
				{/* 行ったリスト */}
				<div className={`${styles.list_wrap} ${styles.went}`}>
					<div className={styles.list_title}>
						<span>行ったことある</span>
					</div>
					<WentMap />
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

export default MypageWentView;
