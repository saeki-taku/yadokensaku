// react
import Link from "next/link";
import Image from "next/image";
// styles
import styles from "@/styles/hotel.module.scss";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ReactStarsRating from "react-awesome-stars-rating";
// components
import ImgLinkCheck from "../../components/common/ImgLinkCheck";

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
                    {/* header */}
                    <div className={styles.hotelInfo__head}>
                        <div className={styles.hotelName_box}>
                            <h2 className={styles.hotelName}>{hotelBasicInfo.hotelName}</h2>
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
                    {/* body */}
                    <div className={styles.hotelInfo__body}>
                        <div className={styles.hotelImg_wrap}></div>
                        {/* アクセス */}
                        <div className={styles.access}>
                            <h3 className={styles.info_title}>アクセス</h3>
                            <div className={styles.access_wrap}>
                                <div className={styles.text_box}>
                                    <ul className={styles.info_list}>
                                        <li className={styles.address}>
                                            <span className={styles.title}>住所</span>
                                            <div className={styles.box}>
                                                <span className={styles.yubin}>〒{hotelBasicInfo.postalCode}</span>
                                                <span>
                                                    {hotelBasicInfo.address1}
                                                    {hotelBasicInfo.address2}
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <span className={styles.title}>アクセス</span>
                                            {hotelBasicInfo.access}
                                        </li>
                                        <li>
                                            <span className={styles.title}>最寄駅</span>
                                            {hotelBasicInfo.nearestStation}
                                        </li>
                                        <li>
                                            <span className={styles.title}>駐車場</span>
                                            {hotelBasicInfo.parkingInformation}
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    {/* <img
                                        src=""
                                        alt=""
                                    /> */}
                                    <Image
                                        src={hotelBasicInfo.hotelMapImageUrl}
                                        alt=""
                                        width={500}
                                        height={300}
                                        style={{
                                            // width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* 口コミ */}
                        <div className={styles.kuchikomi}>
                            <h3 className={styles.info_title}>口コミ</h3>
                            <div className={styles.kuchikomi_wrap}>
                                <div className={styles.kuchikomi__head}>
                                    <p className={styles.title}>総合評価</p>
                                    <span className={styles.average}>{hotelBasicInfo.reviewAverage}</span>
                                    <div className={styles.box}>
                                        <ReactStarsRating
                                            isEdit={false}
                                            size={15}
                                            value={hotelBasicInfo.reviewAverage}
                                        />
                                    </div>
                                    <a
                                        className={styles.url}
                                        href={hotelBasicInfo.reviewUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        全<span>{hotelBasicInfo.reviewCount}</span>件
                                    </a>
                                </div>
                                <div className={styles.kuchikomi__body}>
                                    <ul>
                                        <li>
                                            <span>サービス</span>
                                            <span>{hotelRatingInfo.serviceAverage}</span>
                                            <ReactStarsRating
                                                isEdit={false}
                                                size={15}
                                                value={hotelRatingInfo.serviceAverage}
                                            />
                                        </li>
                                        <li>
                                            <span>立地・場所</span>
                                            <span>{hotelRatingInfo.locationAverage}</span>
                                            <ReactStarsRating
                                                isEdit={false}
                                                size={15}
                                                value={hotelRatingInfo.locationAverage}
                                            />
                                        </li>
                                        <li>
                                            <span>部屋</span>
                                            <span>{hotelRatingInfo.roomAverage}</span>
                                            <ReactStarsRating
                                                isEdit={false}
                                                size={15}
                                                value={hotelRatingInfo.roomAverage}
                                            />
                                        </li>
                                        <li>
                                            <span>設備・アメニティ</span>
                                            <span>{hotelRatingInfo.equipmentAverage}</span>
                                            <ReactStarsRating
                                                isEdit={false}
                                                size={15}
                                                value={hotelRatingInfo.equipmentAverage}
                                            />
                                        </li>
                                        <li>
                                            <span>風呂</span>
                                            <span>{hotelRatingInfo.bathAverage}</span>
                                            <ReactStarsRating
                                                isEdit={false}
                                                size={15}
                                                value={hotelRatingInfo.bathAverage}
                                            />
                                        </li>
                                        <li>
                                            <span>食事</span>
                                            <span>{hotelRatingInfo.mealAverage}</span>
                                            <ReactStarsRating
                                                isEdit={false}
                                                size={15}
                                                value={hotelRatingInfo.mealAverage}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* 基本情報 */}
                        <div className={styles.basicInfo}>
                            <h3 className={styles.info_title}>基本情報</h3>
                            <table>
                                <tr>
                                    <th>ホテル名</th>
                                    <td>
                                        {hotelBasicInfo.hotelName}（{hotelBasicInfo.hotelKanaName}）
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                        {/* その他設備・サービス */}
                        <div className={styles.otherInfo}>
                            <h3 className={styles.info_title}>その他設備・サービス</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotelView;
