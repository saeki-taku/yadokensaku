// lib
import Link from "next/link";
import { Col } from "antd";
// style
import styles from "@/styles/header.module.scss";

export default function HeaderMemberFavourite() {
    return (
        <span className={styles.favourite}>
            <Link href="/">お気に入り(0)</Link>
        </span>
    );
}
