// lib
import Link from "next/link";
import { Col } from "antd";
// style
import styles from "@/styles/header.module.scss";

export default function HeaderLogo() {
    return (
        <span>
            <Link href="/">ログイン</Link>
        </span>
    );
}
