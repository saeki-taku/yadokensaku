// lib
import ReactStarsRating from "react-awesome-stars-rating";
// style
import styles from "@/styles/hotel.module.scss";

const HotelHead = ({ hotelBasicInfo, hotelDetailInfo, hotelFacilitiesInfo }: ANY_OBJECT) => {
	return (
		<div className={styles.hotelInfo__head}>
			<div className={styles.head_top}>
				<h2 className={styles.hotelName}>{hotelBasicInfo.hotelName}</h2>
				<div className={styles.favoriteBtnWrap}>
					<a
						href=""
						className={styles.favoriteBtn}
						// className={`${styles.favoriteBtn} ${styles._add}`}
					>
						<i className={styles.icon}></i>
						お気に入り<span className="xs_none">に追加</span>
					</a>
					<a
						href=""
						className={styles.wentBtn}
						// className={`${styles.wentBtn} ${styles._add}`}
					>
						<i className={styles.icon}></i>
						行った<span className="">ことがある</span>
					</a>
				</div>
			</div>
			<div className={styles.head_bottom}>
				<div className={styles.info_basic}>
					<span>{hotelBasicInfo.address1}</span>
					<span>{`全${hotelFacilitiesInfo.hotelRoomNum}室`}</span>
					<span>
						チェックイン : {hotelDetailInfo.checkinTime}〜{hotelDetailInfo.lastCheckinTime}
					</span>
					<span>チェックアウト : 〜{hotelDetailInfo.checkoutTime}</span>
				</div>
				<div className={styles.info_evaluation}>
					{hotelBasicInfo.reviewAverage && (
						<div className={styles.kuchikomi}>
							<span className={styles.title}>総合評価</span>
							<span className={styles.average}>{hotelBasicInfo.reviewAverage}</span>
							<div className={styles.box}>
								<ReactStarsRating isEdit={false} size={15} value={hotelBasicInfo.reviewAverage} />
								<a className={styles.url} href={hotelBasicInfo.reviewUrl} target="_blank" rel="noreferrer">
									{hotelBasicInfo.reviewCount}
								</a>
							</div>
						</div>
					)}
					<div className={styles.minCharge}>
						<span className={styles.title}>
							最安値<span>（税込）</span>
						</span>
						<span className={styles.num}>{hotelBasicInfo.hotelMinCharge}円〜</span>
					</div>
				</div>
				<div className={styles.hotelSpecial}>{hotelBasicInfo.hotelSpecial}</div>
			</div>
		</div>
	);
};

export default HotelHead;
