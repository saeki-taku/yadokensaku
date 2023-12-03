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
				<div className={styles.name_wrap}>
					佐伯　卓哉
					<span className={styles.rear_text}>さんのマイページ</span>
				</div>
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
				<div className={styles.list_wrap}>
					<div className={styles.list_title}>
						<span>お気に入り</span>
					</div>
					<ul className={styles.list}>
						<li>
							<div className={styles.img_box}>
								<figure>{/* <ImgLinkCheck link={} /> */}</figure>
							</div>
							<div className={styles.text_box}>
								<div className={styles.title}>三井ガーデンホテル　プラナ東京ベイ</div>
								<div className={styles.info_evaluation}>
									{/* {hotelBasicInfo.reviewAverage && ( */}
									<div className={styles.kuchikomi}>
										<span className={styles.title}>総合評価</span>
										<span className={styles.average}>{5}</span>
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
							</div>
						</li>
					</ul>
				</div>
				{/* 行ったリスト　3件まで */}
				<div className={styles.list_wrap}>
					<div className={styles.list_title}>
						<span>行ったことある</span>
					</div>
					<ul className={styles.list}>
						<li>
							<a href="">
								<div className={styles.img_box}>
									<figure>{/* <ImgLinkCheck link={} /> */}</figure>
								</div>
								<div className={styles.text_box}></div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default MypageView;
