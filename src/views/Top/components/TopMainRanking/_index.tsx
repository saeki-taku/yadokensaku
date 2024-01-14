// react / next
import { useEffect, useState, useContext } from "react";
import Image from "next/image";
// styles
import styles from "@/styles/home.module.scss";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ReactStarsRating from "react-awesome-stars-rating";
// hooks
import { useRoute } from "@/hooks/useRoute";
// api
// import { getRanking } from "@/pages/api/ranking";
import { Ranking } from "@/api/ranking";

import { useQuery } from "@tanstack/react-query";

// const fetchUsers = async () => {
//     const res = await fetch(
//         "https://app.rakuten.co.jp/services/api/Travel/HotelRanking/20170426?format=json&genre=all&applicationId=1003642797751323945"
//     );
//     return res.json();
// };

type Props = {
	title: string;
};

// console.log("fetchUsers", fetchUsers);

// export default function TopMainRanking({ title }: Props) {
const TopMainRanking = ({ title }: Props) => {
	// const { data, isLoading, isError, error }: any = useQuery(["rankingList"], getRanking);
	const { data, isLoading, isError, error }: any = useQuery(["rankingList"], Ranking);
	// useQuery("ユニークキー（任意の名前）", Promiseを返す関数);

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	// const hotels = data.Rankings[0].Ranking.hotels;
	const hotels = data.Rankings?.[0].Ranking.hotels || "0";

	return (
		<div className={styles.ranking}>
			<h2 className={styles.ranking__title}>{title}</h2>
			<ul className={styles.ranking__list}>
				{/* todo: 配列から4つまでを取得 スライド取り入れるかも */}
				{hotels !== "0" &&
					hotels.slice(0, 4).map((value: ANY_OBJECT) => (
						<li key={value.hotel.hotelNo}>
							<span className={styles.pref}>{value.hotel.middleClassName}</span>
							<p className={styles.name}>{value.hotel.hotelname}</p>
							<div className={styles.ranking__itemBox}>
								<figure>
									<Image
										alt=""
										src={value.hotel.hotelImageUrl || "/img/noimage.jpg"}
										fill
										style={{
											objectFit: "cover",
										}}
									/>
								</figure>
								<div className={styles.box}>
									<div className={styles.kuchikomi}>
										<span className={styles.kuchikomiTitle}>口コミ</span>
										<ReactStarsRating isEdit={false} size={15} value={value.hotel.reviewAverage} />
										<a href={value.hotel.reviewUrl} target="_blank" rel="noreferrer">
											{value.hotel.reviewCount}
										</a>
									</div>
									<a href={value.hotel.planListUrl} className={styles.link} target="_blank" rel="noreferrer">
										<span>楽天トラベル公式</span>
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" style={{ color: "#00B901" }} />
									</a>
								</div>
							</div>
						</li>
					))}
			</ul>
		</div>
	);
};

export default TopMainRanking;
