// lib
import Link from "next/link";
// style
import styles from "@/styles/header.module.scss";

export default function HeaderMemberFavourite() {
    return (
        <span className={styles.favourite}>
            <Link href="/">お気に入り(0)</Link>
        </span>
    );
}
