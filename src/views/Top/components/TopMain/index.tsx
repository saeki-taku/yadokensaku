// react / next
import { useState } from "react";
import Image from "next/image";
// styles
import styles from "@/styles/home.module.scss";
// components
import TopMainRanking from "../TopMainRanking";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ReactStarsRating from "react-awesome-stars-rating";

export default function TopMain() {
    return (
        <div className={styles.main_wrap}>
            <TopMainRanking title="人気宿【総合】" />
            <TopMainRanking title="人気宿【贅沢】" />
            <TopMainRanking title="人気宿【温泉】" />
        </div>
    );
}
