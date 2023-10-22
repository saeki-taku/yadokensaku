// react
import Link from "next/link";
import Image from "next/image";
// styles
import styles from "@/styles/hotel.module.scss";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faArrowUpRightFromSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ReactStarsRating from "react-awesome-stars-rating";
// components
import ImgLinkCheck from "../../components/common/ImgLinkCheck";
import InfoKuchikomi from "../../views/Hotel/components/infoKuchikomi";
import InfoAccess from "./components/infoAccess";

const HotelView = ({ pageData }: ANY_OBJECT) => {
    console.log("hotels__??", pageData);

    const hotelBasicInfo = pageData.hotelDetail.hotels[0].hotel[0].hotelBasicInfo;
    const hotelRatingInfo = pageData.hotelDetail.hotels[0].hotel[1].hotelRatingInfo;
    const hotelDetailInfo = pageData.hotelDetail.hotels[0].hotel[2].hotelDetailInfo;
    const hotelFacilitiesInfo = pageData.hotelDetail.hotels[0].hotel[3].hotelFacilitiesInfo;
    const hotelPolicyInfo = pageData.hotelDetail.hotels[0].hotel[4].hotelPolicyInfo;
    const hotelOtherInfo = pageData.hotelDetail.hotels[0].hotel[5].hotelOtherInfo;

    hotelFacilitiesInfo.aboutMealPlace.map((item: any) => console.log(item.dinnerPlace));

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
                    {/* header */}
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
                                    <img
                                        src=""
                                        alt=""
                                    />
                                    お気に入りに追加
                                </a>
                                <a
                                    href=""
                                    className={styles.wentBtn}
                                    // className={`${styles.wentBtn} ${styles._add}`}
                                >
                                    <i className={styles.icon}></i>
                                    <img
                                        src=""
                                        alt=""
                                    />
                                    行ったことがある
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
                    {/* body */}
                    <div className={styles.hotelInfo__body}>
                        <div className={styles.hotelImg_wrap}></div>
                        {/* アクセス */}
                        <InfoAccess hotelBasicInfo={hotelBasicInfo} />
                        {/* 口コミ */}
                        <InfoKuchikomi
                            hotelBasicInfo={hotelBasicInfo}
                            hotelRatingInfo={hotelRatingInfo}
                        />
                        {/* 基本情報 */}
                        <div className={styles.basicInfo}>
                            <h3 className={styles.info_title}>基本情報</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>ホテル名</th>
                                        <td>
                                            {hotelBasicInfo.hotelName}
                                            <span className={styles.rearText}>（{hotelBasicInfo.hotelKanaName}）</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>住所</th>
                                        <td>
                                            〒{hotelBasicInfo.postalCode} {hotelBasicInfo.address1}
                                            {hotelBasicInfo.address2}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>TEL</th>
                                        <td>{hotelBasicInfo.telephoneNo}</td>
                                    </tr>
                                    <tr>
                                        <th>FAX</th>
                                        <td>{hotelBasicInfo.faxNo}</td>
                                    </tr>
                                    <tr>
                                        <th>アクセス</th>
                                        <td>{hotelBasicInfo.access}</td>
                                    </tr>
                                    <tr>
                                        <th>駐車場</th>
                                        <td>{hotelBasicInfo.parkingInformation}</td>
                                    </tr>
                                    <tr>
                                        <th>チェックイン</th>
                                        <td>
                                            {hotelDetailInfo.checkinTime}
                                            <span className={styles.rearText}>最終チェックイン（{hotelDetailInfo.lastCheckinTime}）</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>チェックアウト</th>
                                        <td>{hotelDetailInfo.checkoutTime}</td>
                                    </tr>
                                    <tr>
                                        <th>部屋数</th>
                                        <td>{hotelFacilitiesInfo.hotelRoomNum}室</td>
                                    </tr>
                                    <tr>
                                        <th>館内設備</th>
                                        <td>
                                            <ul className={styles.list}>
                                                {hotelFacilitiesInfo.hotelFacilities.map((value: ANY_OBJECT) => (
                                                    <li
                                                        className={styles.item}
                                                        key={value.item}
                                                    >
                                                        {value.item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>部屋設備・備品</th>
                                        <td>
                                            <ul className={styles.listFlex}>
                                                {hotelFacilitiesInfo.roomFacilities.map((value: ANY_OBJECT) => (
                                                    <li
                                                        className={styles.item}
                                                        key={value.item}
                                                    >
                                                        {value.item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* その他設備・サービス */}
                        <div className={styles.otherInfo}>
                            <h3 className={styles.info_title}>その他設備・サービス</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>食事場所</th>
                                        <td>
                                            {hotelFacilitiesInfo.aboutMealPlace.map((item: any) => {
                                                return (
                                                    <>
                                                        <div>
                                                            朝食：<span>{item.breakfastPlace && <div>{item.breakfastPlace}</div>}</span>
                                                        </div>
                                                        {item.dinnerPlace && <div>夕食{item.dinnerPlace}</div>}
                                                    </>
                                                );
                                            })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>バリアフリー対応</th>
                                        <td>
                                            <ul className={styles.listFlex}>
                                                {hotelFacilitiesInfo.handicappedFacilities.map((value: ANY_OBJECT) => (
                                                    <li
                                                        className={styles.item}
                                                        key={value.item}
                                                    >
                                                        {value.item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotelView;
