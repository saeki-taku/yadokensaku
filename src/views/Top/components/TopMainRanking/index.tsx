// react / next
import { useState } from "react";
import Image from "next/image";
// styles
import styles from "@/styles/home.module.scss";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ReactStarsRating from "react-awesome-stars-rating";
// hooks
import { useRoute } from "@/hooks/useRoute";
// api
import { getRanking } from "@/pages/api/ranking";

import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
    const res = await fetch(
        "https://app.rakuten.co.jp/services/api/Gora/GoraGolfCourseSearch/20170623?format=json&applicationId=1064065473399477324"
    );
    return res.json();
};

console.log("fetchUsers", fetchUsers);

type Props = {
    title: string;
};

// export default function TopMainRanking({ title }: Props) {
const TopMainRanking = ({ title }: Props) => {
    const { data, isLoading, isError, error }: any = useQuery(["rankingList"], fetchUsers);

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>Error: {error.message}</span>;
    }

    console.log("data__", data);

    const router = useRoute();
    // console.log("router__", router);
    console.log("getRanking__02", getRanking);

    return (
        <div className={styles.ranking}>
            <h2 className={styles.ranking__title}>{title}</h2>
            <ul className={styles.ranking__list}>
                <li className={styles.ranking__item}>
                    <span className={styles.pref}>山梨県</span>
                    <p className={styles.name}>八ヶ岳高原　ペンション　乙女座宮</p>
                    <div className={styles.ranking__itemBox}>
                        <figure>
                            <Image
                                alt=""
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/19756/19756.jpg"
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
                                    size={15}
                                    value={5}
                                />
                                <a href="">77</a>
                            </div>
                            <a
                                href=""
                                className={styles.link}
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
                <li className={styles.ranking__item}>
                    <span className={styles.pref}>山梨県</span>
                    <p className={styles.name}>八ヶ岳高原　ペンション　乙女座宮</p>
                    <div className={styles.ranking__itemBox}>
                        <figure>
                            <Image
                                alt=""
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/66511/66511.jpg"
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
                                    size={15}
                                    value={5}
                                />
                                <a href="">77</a>
                            </div>
                            <a
                                href=""
                                className={styles.link}
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
                <li className={styles.ranking__item}>
                    <span className={styles.pref}>山梨県</span>
                    <p className={styles.name}>八ヶ岳高原　ペンション　乙女座宮</p>
                    <div className={styles.ranking__itemBox}>
                        <figure>
                            <Image
                                alt=""
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/129997/129997.jpg"
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
                                    size={15}
                                    value={5}
                                />
                                <a href="">77</a>
                            </div>
                            <a
                                href=""
                                className={styles.link}
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
                <li className={styles.ranking__item}>
                    <span className={styles.pref}>山梨県</span>
                    <p className={styles.name}>八ヶ岳高原　ペンション　乙女座宮</p>
                    <div className={styles.ranking__itemBox}>
                        <figure>
                            <Image
                                alt=""
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/76787/76787.jpg"
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
                                    size={15}
                                    value={5}
                                />
                                <a href="">77</a>
                            </div>
                            <a
                                href=""
                                className={styles.link}
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
            </ul>
        </div>
    );
};

export default TopMainRanking;
