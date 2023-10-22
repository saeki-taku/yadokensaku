// components
import HeaderLogo from "./HeaderLogo";
import HeaderMemberWrap from "./HeaderMemberWrap";
// style
import styles from "@/styles/header.module.scss";
// lib
import { Row } from "antd";

export default function Header() {
    return (
        <header className={styles.header}>
            <Row
                align="middle"
                justify="space-between"
            >
                <HeaderLogo />
                <HeaderMemberWrap />
            </Row>
        </header>
    );
}
