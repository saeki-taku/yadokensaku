// styles
import styles from "@/styles/hotel.module.scss";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ReactStarsRating from "react-awesome-stars-rating";
// components
import ImgLinkCheck from "../../components/common/ImgLinkCheck";
import Link from "next/link";

const HotelView = ({ pageData }: ANY_OBJECT) => {
    console.log("hotels__??", pageData);

    const hotelBasicInfo = pageData.hotelDetail.hotels[0].hotel[0].hotelBasicInfo;
    const hotelRatingInfo = pageData.hotelDetail.hotels[0].hotel[1].hotelRatingInfo;
    const hotelDetailInfo = pageData.hotelDetail.hotels[0].hotel[2].hotelDetailInfo;
    const hotelFacilitiesInfo = pageData.hotelDetail.hotels[0].hotel[3].hotelFacilitiesInfo;
    const hotelPolicyInfo = pageData.hotelDetail.hotels[0].hotel[4].hotelPolicyInfo;
    const hotelOtherInfo = pageData.hotelDetail.hotels[0].hotel[5].hotelOtherInfo;
    return (
        <>
            <div className={styles.breadcrumb}>
                <ul className={styles.breadcrumb__list}>
                    <li>
                        <Link href="/">TOP</Link>
                    </li>
                    <li>
                        <Link href="/">{hotelBasicInfo.address1}</Link>
                    </li>
                    <li>
                        <Link href="/">{hotelDetailInfo.areaName}</Link>
                    </li>
                </ul>
            </div>
            <div className="common_wrap">
                <div className={styles.hotelInfo}>
                    <div className={styles.hotelInfo__head}>
                        <div className={styles.hotelName_box}>
                            <div className={styles.hotelName}>{hotelBasicInfo.hotelName}</div>
                            <div className={styles.favoriteBtnWrap}>
                                <a href="">
                                    <img
                                        src=""
                                        alt=""
                                    />
                                    お気に入りに追加する
                                </a>
                                <a href="">
                                    <img
                                        src=""
                                        alt=""
                                    />
                                    行ったことがある
                                </a>
                            </div>
                            <div className={styles.hotelSpecial}>{hotelBasicInfo.hotelSpecial}</div>
                            <div className={styles.info__basic}>
                                <span>{hotelBasicInfo.address1}</span>
                                <span>{`全${hotelFacilitiesInfo.hotelRoomNum}室`}</span>
                                <span>
                                    {hotelDetailInfo.checkinTime}〜{hotelDetailInfo.lastCheckinTime}
                                </span>
                                <span>{hotelDetailInfo.checkoutTime}</span>
                            </div>
                            <div className={styles.info__evaluation}>
                                {hotelBasicInfo.reviewAverage && (
                                    <div className={styles.kuchikomi}>
                                        <span className={styles.title}>総合評価</span>
                                        <span className={styles.average}>{hotelBasicInfo.reviewAverage}</span>
                                        <div className={styles.box}>
                                            <ReactStarsRating
                                                isEdit={false}
                                                size={15}
                                                value={hotelBasicInfo.reviewAverage}
                                            />
                                            <a
                                                className={styles.url}
                                                href={hotelBasicInfo.reviewUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {hotelBasicInfo.reviewCount}
                                            </a>
                                        </div>
                                    </div>
                                )}
                                <div>
                                    <span className={styles.title}>
                                        最安値<span>（税込）</span>
                                    </span>
                                    <span className={styles.minCharge}>{hotelBasicInfo.hotelMinCharge}円〜</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotelView;
