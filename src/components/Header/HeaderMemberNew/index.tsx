// lib
import Link from "next/link";
import { Col } from "antd";
// style
import styles from "@/styles/header.module.css";

export default function HeaderLogo() {
    return (
        <Col
            span={6}
            className={styles.member_left}
        >
            <span>
                <Link href="/">新規会員登録</Link>
            </span>
        </Col>
    );
}
