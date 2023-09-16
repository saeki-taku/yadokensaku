// react / next
import Image from "next/image";
// styles
import styles from "@/styles/search.module.scss";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ReactStarsRating from "react-awesome-stars-rating";

const SearchView = ({ pageData, keyword }: ANY_OBJECT) => {
    console.log("view_pageData__", pageData);

    const hotels = pageData.rankingDataAll.hotels;
    const pagingInfo = pageData.rankingDataAll.pagingInfo;
    console.log("pagingInfo: ", pagingInfo);
    // console.log("HotelList: ", hotels);
    // console.log("keyword__: ", keyword);

    return (
        <div className={styles.search__wrap}>
            <div className={styles.search__result}>
                <p className={styles.title}>「{keyword}」の検索結果</p>
                <p className={styles.resultCount}>
                    <span className={styles.num}>{pagingInfo.recordCount}</span>件見つかりました
                </p>
            </div>
            <ul className={styles.search__list}>
                {hotels !== 0 ? (
                    hotels.map((data: ANY_OBJECT) => {
                        console.log("data : ", data.hotel[0].hotelBasicInfo.hotelNo);

                        const hotelData = data.hotel[0].hotelBasicInfo;

                        return (
                            <li
                                key={hotelData.hotelNo}
                                className={styles.search__item}
                            >
                                <div className={styles.search__head}>
                                    <p className={styles.hotelName}>{hotelData.hotelName}</p>
                                    <p className={styles.hotelSpecial}>{hotelData.hotelSpecial}</p>
                                </div>
                                <div className={styles.search__body}>
                                    <figure>
                                        <Image
                                            src={hotelData.hotelImageUrl || "/img/top/noimage.jpg"}
                                            alt=""
                                            width={1000}
                                            height={750}
                                            sizes="100vw"
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                            }}
                                        />
                                    </figure>
                                    <div className={styles.text_box}>
                                        <p className={styles.hotelMinCharge}>
                                            <span className={styles.title}>料金</span>
                                            {hotelData.hotelMinCharge}円〜
                                        </p>
                                        {hotelData.reviewAverage && (
                                            <div className={styles.kuchikomi}>
                                                <span className={styles.title}>口コミ</span>
                                                <div className={styles.box}>
                                                    <ReactStarsRating
                                                        isEdit={false}
                                                        size={15}
                                                        value={hotelData.reviewAverage}
                                                    />
                                                    <a
                                                        className={styles.url}
                                                        href={hotelData.reviewUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        {hotelData.reviewCount}
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                        <ul className={styles.info_list}>
                                            <li className={styles.address}>
                                                <span className={styles.title}>住所</span>
                                                <div className={styles.box}>
                                                    <span className={styles.yubin}>〒{hotelData.postalCode}</span>
                                                    <span>
                                                        {hotelData.address1}
                                                        {hotelData.address2}
                                                    </span>
                                                </div>
                                            </li>
                                            <li>
                                                <span className={styles.title}>アクセス</span>
                                                {hotelData.access}
                                            </li>
                                            <li>
                                                <span className={styles.title}>駐車場</span>
                                                {hotelData.parkingInformation}
                                            </li>
                                        </ul>
                                        <a
                                            href={hotelData.planListUrl}
                                            // className={styles.common_btn_oficial}
                                            className="common_btn_oficial"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <span>楽天トラベル公式</span>
                                            <FontAwesomeIcon
                                                icon={faArrowUpRightFromSquare}
                                                size="sm"
                                                style={{ color: "#00B901" }}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </li>
                        );
                    })
                ) : (
                    <li>該当のホテルはありませんでした。</li>
                )}
            </ul>
        </div>
    );
};

export default SearchView;
