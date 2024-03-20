// styles
import styles from "@/styles/hotel.module.scss";
// lib
import ReactStarsRating from "react-awesome-stars-rating";

const InfoKuchikomi = ({ hotelBasicInfo, hotelRatingInfo }: ANY_OBJECT) => {
	return (
		<div className={styles.kuchikomi}>
			<h3 className={styles.info_title}>口コミ</h3>
			<div className={styles.kuchikomi__wrap}>
				<div className={styles.head}>
					<p className={styles.title}>総合評価</p>
					<span className={styles.average}>{hotelBasicInfo.reviewAverage}</span>
					<div className={styles.box}>
						<ReactStarsRating isEdit={false} size={18} value={hotelBasicInfo.reviewAverage ?? 0} />
					</div>
					<a className={styles.url} href={hotelBasicInfo.reviewUrl} target="_blank" rel="noreferrer">
						全<span>{hotelBasicInfo.reviewCount}</span>件
					</a>
				</div>
				<div className={styles.body}>
					<ul className={styles.kuchikomi_list}>
						<li>
							<span className={styles.title}>サービス</span>
							<span className={styles.average}>{hotelRatingInfo.serviceAverage}</span>
							<ReactStarsRating isEdit={false} size={15} value={hotelRatingInfo.serviceAverage ?? 0} />
						</li>
						<li>
							<span className={styles.title}>場　所</span>
							<span className={styles.average}>{hotelRatingInfo.locationAverage}</span>
							<ReactStarsRating isEdit={false} size={15} value={hotelRatingInfo.locationAverage ?? 0} />
						</li>
						<li>
							<span className={styles.title}>部　屋</span>
							<span className={styles.average}>{hotelRatingInfo.roomAverage}</span>
							<ReactStarsRating isEdit={false} size={15} value={hotelRatingInfo.roomAverage ?? 0} />
						</li>
						<li>
							<span className={styles.title}>設　備</span>
							<span className={styles.average}>{hotelRatingInfo.equipmentAverage}</span>
							<ReactStarsRating isEdit={false} size={15} value={hotelRatingInfo.equipmentAverage ?? 0} />
						</li>
						<li>
							<span className={styles.title}>風　呂</span>
							<span className={styles.average}>{hotelRatingInfo.bathAverage}</span>
							<ReactStarsRating isEdit={false} size={15} value={hotelRatingInfo.bathAverage ?? 0} />
						</li>
						<li>
							<span className={styles.title}>食　事</span>
							<span className={styles.average}>{hotelRatingInfo.mealAverage}</span>
							<ReactStarsRating isEdit={false} size={15} value={hotelRatingInfo.mealAverage ?? 0} />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default InfoKuchikomi;
