// react / next
import Link from "next/link";
// styles
import styles from "@/styles/search.module.scss";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ReactStarsRating from "react-awesome-stars-rating";
// components
import Pagenation from "../../components/common/Pagenation";
import ImgLinkCheck from "../Search/components/ImgLinkCheck";
import { log } from "console";

const SearchAreaView = ({ pageData, prefName, areaName }: ANY_OBJECT) => {
	// const hotels = pageData.keywordHotelSearch.hotels;
	// const pagingInfo = pageData.keywordHotelSearch.pagingInfo;
	// const minCharge = (val: number) => {
	// 	return String(val).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	// };

	console.log("prefName", prefName);
	console.log("areaName", areaName);

	return (
		<>test</>
		// <div className="common_wrap">
		// 	<div className={styles.search__result}>
		// 		<p className={styles.title}>
		// 			「{prefName}」<span className={styles.rearTitle}>の検索結果</span>
		// 		</p>
		// 		{pagingInfo && (
		// 			<p className={styles.resultCount}>
		// 				<span className={styles.num}>{pagingInfo.recordCount}</span>件見つかりました
		// 			</p>
		// 		)}
		// 	</div>
		// 	<ul className={styles.search__list}>
		// 		{hotels ? (
		// 			hotels?.map((data: ANY_OBJECT) => {
		// 				const hotelData = data.hotel[0].hotelBasicInfo;

		// 				return (
		// 					<li key={hotelData.hotelNo} className={styles.search__item}>
		// 						<div className={styles.search__head}>
		// 							<a className={styles.hotelName} href={`/hotel/${hotelData.hotelNo}`} rel="noreferrer">
		// 								{hotelData.hotelName}
		// 							</a>
		// 							<p className={styles.hotelSpecial}>{hotelData.hotelSpecial}</p>
		// 						</div>
		// 						<div className={styles.search__body}>
		// 							<div className={styles.img_box}>
		// 								<figure>
		// 									<ImgLinkCheck link={hotelData.hotelImageUrl} />
		// 								</figure>
		// 							</div>
		// 							<div className={styles.text_box}>
		// 								{hotelData.hotelMinCharge && (
		// 									<p className={styles.hotelMinCharge}>
		// 										<span className={styles.title}>料金</span>
		// 										{minCharge(hotelData.hotelMinCharge)}
		// 										<span className={styles.rearText}>円〜</span>
		// 									</p>
		// 								)}
		// 								{hotelData.reviewAverage && (
		// 									<div className={styles.kuchikomi}>
		// 										<span className={styles.title}>口コミ</span>
		// 										<div className={styles.box}>
		// 											<ReactStarsRating isEdit={false} size={15} value={hotelData.reviewAverage} />
		// 											<a className={styles.url} href={hotelData.reviewUrl} target="_blank" rel="noreferrer">
		// 												{hotelData.reviewCount}
		// 											</a>
		// 										</div>
		// 									</div>
		// 								)}
		// 								<ul className={styles.info_list}>
		// 									<li className={styles.address}>
		// 										<span className={styles.title}>住所</span>
		// 										<div className={styles.box}>
		// 											<span className={styles.yubin}>〒{hotelData.postalCode}</span>
		// 											<span>
		// 												{hotelData.address1}
		// 												{hotelData.address2}
		// 											</span>
		// 										</div>
		// 									</li>
		// 									<li>
		// 										<span className={styles.title}>アクセス</span>
		// 										{hotelData.access}
		// 									</li>
		// 									<li>
		// 										<span className={styles.title}>駐車場</span>
		// 										{hotelData.parkingInformation}
		// 									</li>
		// 								</ul>
		// 								<div className={styles.btn_wrap}>
		// 									<Link href={`/hotel/${hotelData.hotelNo}`} className={styles.detail_link}>
		// 										<span>詳細へ</span>
		// 									</Link>
		// 									<Link href={hotelData.planListUrl} className="common_btn_oficial" target="_blank" rel="noreferrer">
		// 										<span>楽天トラベル</span>
		// 										<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" style={{ color: "#00B901" }} />
		// 									</Link>
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</li>
		// 				);
		// 			})
		// 		) : (
		// 			<li>該当のホテルはありませんでした。</li>
		// 		)}
		// 	</ul>
		// 	<Pagenation pageData={pageData} keyword={keyword} />
		// </div>
	);
};

export default SearchAreaView;
