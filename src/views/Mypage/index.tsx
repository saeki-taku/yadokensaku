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

				<div className={styles.list_wrap}>
					<ul className={styles.list}>
						<li>
							<a href=""></a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default MypageView;
