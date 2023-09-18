// react / next
import Link from "next/link";
import Image from "next/image";
// styles
import styles from "@/styles/search.module.scss";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ReactStarsRating from "react-awesome-stars-rating";
// hooks
import { useRoute } from "@/hooks/useRoute";

const SearchView = ({ pageData, keyword }: ANY_OBJECT) => {
    console.log("view_pageData__", pageData);

    // const router = useRoute();
    const hotels = pageData.rankingDataAll.hotels;
    const pagingInfo = pageData.rankingDataAll.pagingInfo;
    // console.log("pagingInfo: ", pagingInfo);
    // console.log("HotelList: ", hotels);
    // console.log("keyword__: ", keyword);

    const minCharge = (val: number) => {
        return String(val).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    };

    // 現在ページから5つだけ表示させる
    const pagenation = () => {
        for (let i = 0; i <= pagingInfo.pageCount; i++) {
            console.log("i__", i);
        }
    };

    return (
        <div className="common_wrap">
            <div className={styles.search__result}>
                <p className={styles.title}>
                    「{keyword}」<span className={styles.rearTitle}>の検索結果</span>
                </p>
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
                                    <a
                                        className={styles.hotelName}
                                        href={hotelData.planListUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {hotelData.hotelName}
                                    </a>
                                    <p className={styles.hotelSpecial}>{hotelData.hotelSpecial}</p>
                                </div>
                                <div className={styles.search__body}>
                                    <div className={styles.img_box}>
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
                                    </div>
                                    <div className={styles.text_box}>
                                        <p className={styles.hotelMinCharge}>
                                            <span className={styles.title}>料金</span>
                                            {minCharge(hotelData.hotelMinCharge)}
                                            <span className={styles.rearText}>円〜</span>
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
                                        <div className={styles.btn_wrap}>
                                            <Link
                                                href={`/hotel/${hotelData.hotelNo}`}
                                                className={styles.detail_link}
                                            >
                                                <span>詳細へ</span>
                                            </Link>
                                            <a
                                                href={hotelData.planListUrl}
                                                // className={styles.common_btn_oficial}
                                                className="common_btn_oficial"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <span>楽天トラベル</span>
                                                <FontAwesomeIcon
                                                    icon={faArrowUpRightFromSquare}
                                                    size="sm"
                                                    style={{ color: "#00B901" }}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })
                ) : (
                    <li>該当のホテルはありませんでした。</li>
                )}
            </ul>
            <div className={styles.pagenation_wrap}>
                <p>ページネーション箇所</p>
                <p className={`${styles.test} ${styles.test_01}`}>ページカウント{pagingInfo.pageCount}</p>
                <p>現在ページ{pagingInfo.page}</p>
                <p>現在ページの最終カウント{pagingInfo.last}</p>
                <div className={styles.pagenation_box}>
                    <a
                        className={`${styles.pagenation_btn} ${styles._prev}`}
                        href=""
                    >
                        prev
                    </a>
                    <ul className={styles.pagenation_numList}>
                        {/* hotels.map((data: ANY_OBJECT) => {
                        console.log("data : ", data.hotel[0].hotelBasicInfo.hotelNo);

                        const hotelData = data.hotel[0].hotelBasicInfo; */}
                        return (
                        <li className={styles.active}>
                            <Link href={`/search?keyword=${keyword}&page=1`}>1</Link>
                        </li>
                        <li>
                            <Link href="{onClick}">2</Link>
                        </li>
                        <li>
                            <Link href="">3</Link>
                        </li>
                        <li>
                            <Link href="">4</Link>
                        </li>
                    </ul>
                    <a
                        className={`${styles.pagenation_btn} ${styles._next}`}
                        href=""
                    >
                        next
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SearchView;
