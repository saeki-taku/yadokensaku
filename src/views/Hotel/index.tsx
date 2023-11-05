// react
import React from "react";
import Link from "next/link";
// styles
import styles from "@/styles/hotel.module.scss";
// components
import HotelHead from "./components/HotelHead";
import InfoHeroImg from "./components/InfoHeroImg";
import InfoKuchikomi from "./components/InfoKuchikomi";
import InfoAccess from "./components/InfoAccess";
import InfoBasic from "./components/InfoBasic";
import InfoOthre from "./components/InfoOther";

const HotelView = ({ pageData }: ANY_OBJECT) => {
    const hotelBasicInfo = pageData.hotelDetail.hotels[0].hotel[0].hotelBasicInfo;
    const hotelRatingInfo = pageData.hotelDetail.hotels[0].hotel[1].hotelRatingInfo;
    const hotelDetailInfo = pageData.hotelDetail.hotels[0].hotel[2].hotelDetailInfo;
    const hotelFacilitiesInfo = pageData.hotelDetail.hotels[0].hotel[3].hotelFacilitiesInfo;
    const hotelPolicyInfo = pageData.hotelDetail.hotels[0].hotel[4].hotelPolicyInfo;
    const hotelOtherInfo = pageData.hotelDetail.hotels[0].hotel[5].hotelOtherInfo;

    return (
        <>
            <div className="breadcrumb">
                <ul className="breadcrumb__list">
                    <li>
                        <Link href="/">TOP</Link>
                    </li>
                    <li>
                        <Link href="/">{hotelBasicInfo.address1}</Link>
                    </li>
                    <li>
                        <Link href="/">{hotelDetailInfo.areaName}</Link>
                    </li>
                    <li>
                        <Link href="/">{hotelBasicInfo.hotelName}</Link>
                    </li>
                </ul>
            </div>
            <div className="common_wrap">
                <div className={styles.hotelInfo}>
                    <HotelHead
                        hotelBasicInfo={hotelBasicInfo}
                        hotelDetailInfo={hotelDetailInfo}
                        hotelPolicyInfo={hotelPolicyInfo}
                        hotelFacilitiesInfo={hotelFacilitiesInfo}
                    />
                    <div className={styles.hotelInfo__body}>
                        <InfoHeroImg hotelBasicInfo={hotelBasicInfo} />
                        {/* アクセス */}
                        <InfoAccess hotelBasicInfo={hotelBasicInfo} />
                        {/* 口コミ */}
                        <InfoKuchikomi
                            hotelBasicInfo={hotelBasicInfo}
                            hotelRatingInfo={hotelRatingInfo}
                        />
                        {/* 基本情報 */}
                        <InfoBasic
                            hotelBasicInfo={hotelBasicInfo}
                            hotelDetailInfo={hotelDetailInfo}
                            hotelPolicyInfo={hotelPolicyInfo}
                            hotelFacilitiesInfo={hotelFacilitiesInfo}
                        />
                        {/* その他設備・サービス */}
                        <InfoOthre
                            hotelPolicyInfo={hotelPolicyInfo}
                            hotelFacilitiesInfo={hotelFacilitiesInfo}
                            hotelOtherInfo={hotelOtherInfo}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotelView;
