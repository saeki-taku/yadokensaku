// lib
import Link from "next/link";
import { Col } from "antd";
// style
import styles from "@/styles/header.module.scss";

export default function HeaderLogo() {
    return (
        <span className={styles.member_new}>
            <Link href="/">新規会員登録</Link>
        </span>
    );
}
