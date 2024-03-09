// components
import FavoriteBtn from "../FavoriteBtn";
// lib
import ReactStarsRating from "react-awesome-stars-rating";
// style
import styles from "@/styles/hotel.module.scss";

const HotelHead = ({ hotelBasicInfo, hotelDetailInfo, hotelFacilitiesInfo }: ANY_OBJECT) => {
	// console.log("hotelInfo", hotelBasicInfo);
	// console.log("hotelInfo", hotelDetailInfo);

	return (
		<div className={styles.hotelInfo__head}>
			<div className={styles.head_top}>
				<h2 className={styles.hotelName}>{hotelBasicInfo.hotelName}</h2>
				{/* Id hotelName imgUrl pref lat lng myReview */}
				<FavoriteBtn
					hotelNo={hotelBasicInfo.hotelNo}
					hotelName={hotelBasicInfo.hotelName}
					imgUrl={hotelBasicInfo.hotelImageUrl}
					pref={hotelBasicInfo.address1}
					lat={hotelBasicInfo.latitude}
					lng={hotelBasicInfo.longitude}
				/>
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
					{hotelBasicInfo.hotelMinCharge && (
						<div className={styles.minCharge}>
							<span className={styles.title}>
								最安値<span>（税込）</span>
							</span>
							<span className={styles.num}>{hotelBasicInfo.hotelMinCharge}円〜</span>
						</div>
					)}
				</div>
				<div className={styles.hotelSpecial}>{hotelBasicInfo.hotelSpecial}</div>
			</div>
		</div>
	);
};

export default HotelHead;
