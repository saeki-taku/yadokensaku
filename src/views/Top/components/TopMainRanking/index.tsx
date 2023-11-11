// react / next
import Image from "next/image";
// styles
import styles from "@/styles/home.module.scss";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ReactStarsRating from "react-awesome-stars-rating";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

type Props = {
    title: string;
    ranikingData: ANY_OBJECT;
};

const TopMainRanking = ({ title, ranikingData }: Props) => {
    const hotels: any = ranikingData || 0;

    return (
        <div className={styles.ranking}>
            <h2 className={styles.ranking__title}>{title}</h2>
            {hotels !== 0 ? (
                <Splide
                    options={{
                        // autoplay: true,
                        rewind: true,
                        interval: 25000,
                        speed: 2000,
                        autoWidth: true,
                        destroy: true,
                        perPage: 1,
                        gap: "10px",
                        padding: "20px",
                        width: "100%",
                        arrows: false,
                        paginationDirection: "ltr",
                        classes: {
                            pagination: "splide__pagination ranking__pagenation", // container
                            page: "splide__pagination__page ranking__pagenation__page", // each button
                        },
                        breakpoints: {
                            575: {
                                destroy: false,
                            },
                        },
                    }}
                    aria-label="お気に入りの写真"
                    tag="section"
                >
                    {hotels.slice(0, 4).map((value: ANY_OBJECT) => (
                        // <li key={value.hotel.hotelNo}>
                        <SplideSlide
                            key={value.hotel.hotelNo}
                            className={styles.ranking__item}
                        >
                            <span className={styles.pref}>{value.hotel.middleClassName}</span>
                            <p className={styles.name}>{value.hotel.hotelName}</p>
                            <div className={styles.ranking__itemBox}>
                                <figure>
                                    <Image
                                        alt=""
                                        src={value.hotel.hotelImageUrl || "/img/noimage.jpg"}
                                        fill
                                        style={{
                                            objectFit: "cover",
                                        }}
                                    />
                                </figure>
                                <div className={styles.box}>
                                    <div className={styles.kuchikomi}>
                                        <span className={styles.kuchikomiTitle}>口コミ</span>
                                        <ReactStarsRating
                                            isEdit={false}
                                            size={15}
                                            value={value.hotel.reviewAverage}
                                        />
                                        <a
                                            href={value.hotel.reviewUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {value.hotel.reviewCount}
                                        </a>
                                    </div>
                                    <a
                                        href={value.hotel.planListUrl}
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
                        </SplideSlide>
                    ))}
                </Splide>
            ) : (
                <p>ランキングデータがありません</p>
            )}
        </div>
    );
};

export default TopMainRanking;
