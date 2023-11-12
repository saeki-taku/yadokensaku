// lib
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// style
import styles from "@/styles/header.module.scss";

export default function HeaderMypage() {
    return (
        <span className={styles.mypage}>
            <Link href="/">
                <span className={styles.text}>マイページ</span>
                <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "#ffffff" }}
                    className={styles.icon}
                />
            </Link>
        </span>
    );
}
