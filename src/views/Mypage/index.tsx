// react / next
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// styles
import styles from "@/styles/mypage.module.scss";
// hools
import { useRoute } from "@/hooks/useRoute";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faHeart, faMapLocationDot, faArrowRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import ReactStarsRating from "react-awesome-stars-rating";

const MypageView = () => {
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
				<div className={styles.menu_wrap}>
					<ul className={styles.menu_list}>
						<li className={styles.mypage_top}>
							<Link href="/signup">
								<FontAwesomeIcon
									icon={faHouse}
									// size="lg"
									size="xl"
									style={{ color: "#800000" }}
									className={styles.icon}
								/>
								<span className={styles.text}>マイページトップ</span>
							</Link>
						</li>
						<li className={styles.favorit}>
							<Link href="">
								<FontAwesomeIcon icon={faHeart} size="xl" style={{ color: "#f2abc6" }} className={styles.icon} />
								<span className={styles.text}>お気に入り</span>
							</Link>
						</li>
						<li className={styles.went}>
							<Link href="">
								<FontAwesomeIcon icon={faMapLocationDot} size="xl" style={{ color: "#cc8e23" }} className={styles.icon} />
								<span className={styles.text}>行ったことある</span>
							</Link>
						</li>
						<li className={styles.memberInfo}>
							<Link href="">
								<FontAwesomeIcon icon={faUser} style={{ color: "#248b51" }} size="xl" className={styles.icon} />
								<span className={styles.text}>会員情報</span>
							</Link>
						</li>
						<li className={styles.logout}>
							<Link href="">
								<FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: "#8a6f10" }} size="xl" className={styles.icon} />
								<span className={styles.text}>ログアウト</span>
							</Link>
						</li>
					</ul>
				</div>

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
