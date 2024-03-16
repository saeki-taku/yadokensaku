// react
import React from "react";
import Link from "next/link";
import Image from "next/image";
// styles
import styles from "@/styles/hotel.module.scss";
// components
import HotelHead from "./components/HotelHead";
import InfoHeroImg from "./components/InfoHeroImg";
import InfoKuchikomi from "./components/InfoKuchikomi";
import InfoAccess from "./components/InfoAccess";
import InfoBasic from "./components/InfoBasic";
import InfoOthre from "./components/InfoOther";
import ImgLinkCheck from "@/components/common/ImgLinkCheck";
// import ImgLinkCheck from "./components/ImgLinkCheck";

const HotelView = ({ pageData }: ANY_OBJECT) => {
	const hotelBasicInfo = !pageData.hotelDetail.error && pageData.hotelDetail.hotels[0].hotel[0].hotelBasicInfo;
	const hotelRatingInfo = !pageData.hotelDetail.error && pageData.hotelDetail.hotels[0].hotel[1].hotelRatingInfo;
	const hotelDetailInfo = !pageData.hotelDetail.error && pageData.hotelDetail.hotels[0].hotel[2].hotelDetailInfo;
	const hotelFacilitiesInfo = !pageData.hotelDetail.error && pageData.hotelDetail.hotels[0].hotel[3].hotelFacilitiesInfo;
	const hotelPolicyInfo = !pageData.hotelDetail.error && pageData.hotelDetail.hotels[0].hotel[4].hotelPolicyInfo;
	const hotelOtherInfo = !pageData.hotelDetail.error && pageData.hotelDetail.hotels[0].hotel[5].hotelOtherInfo;

	const adjustPrefectureName = hotelDetailInfo.middleClassCode !== "hokkaido" ? hotelBasicInfo.address1.slice(0, -1) : hotelBasicInfo.address1;

	// console.log("hotelDetailInfo", hotelDetailInfo);

	return !pageData.hotelDetail.error ? (
		<>
			<div className="breadcrumb">
				<ul className="breadcrumb__list">
					<li>
						<Link href="/">TOP</Link>
					</li>
					<li>
						{/* <Link href="/search?keyword={hotelBasicInfo.address1}&page=1">{hotelBasicInfo.address1}</Link> */}
						<Link href={`/search?keyword=${adjustPrefectureName}&page=1`}>{hotelBasicInfo.address1}</Link>
					</li>
					<li>
						<Link href={`/search/area?prefName=${hotelDetailInfo.middleClassCode}&areaName=${hotelDetailInfo.smallClassCode}&page=1`}>{hotelDetailInfo.areaName}</Link>
					</li>
					<li>
						<Link href="" aria-disabled>
							{hotelBasicInfo.hotelName}
						</Link>
					</li>
				</ul>
			</div>
			<div className="common_wrap">
				<div className={styles.hotelInfo}>
					<HotelHead hotelBasicInfo={hotelBasicInfo} hotelDetailInfo={hotelDetailInfo} hotelPolicyInfo={hotelPolicyInfo} hotelFacilitiesInfo={hotelFacilitiesInfo} />
					<div className={styles.hotelInfo__body}>
						<div className={styles.hotelImg_wrap}>
							<ImgLinkCheck link={hotelBasicInfo.hotelImageUrl} width={1000} height={750} alt="" />
							{/* <InfoHeroImg hotelBasicInfo={hotelBasicInfo} /> */}
						</div>
						{/* アクセス */}
						<InfoAccess hotelBasicInfo={hotelBasicInfo} />
						{/* 口コミ */}
						<InfoKuchikomi hotelBasicInfo={hotelBasicInfo} hotelRatingInfo={hotelRatingInfo} />
						{/* 基本情報 */}
						<InfoBasic hotelBasicInfo={hotelBasicInfo} hotelDetailInfo={hotelDetailInfo} hotelPolicyInfo={hotelPolicyInfo} hotelFacilitiesInfo={hotelFacilitiesInfo} />
						{/* その他設備・サービス */}
						<InfoOthre hotelPolicyInfo={hotelPolicyInfo} hotelFacilitiesInfo={hotelFacilitiesInfo} hotelOtherInfo={hotelOtherInfo} />
					</div>
				</div>
			</div>
		</>
	) : (
		<>
			<div className="common_wrap">
				<div className="noPage">
					<div className="text_wrap">
						<p className="title">データの取得に失敗しました。</p>
						<p className="text">現在、お探しのホテルの情報はこちらでは取得できない可能性がございます。</p>
					</div>
					<Link href="/" className="link">
						トップページに戻る
					</Link>
				</div>
			</div>
		</>
	);
};

export default HotelView;
