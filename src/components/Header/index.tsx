// components
import HeaderLogo from "./HeaderLogo";
import HeaderMemberWrap from "./HeaderMemberWrap";
import HeaderMemberFavourite from "./HeaderMemberFavourite";
import HeaderMemberWent from "./HeaderMemberWent";
// style
import styles from "@/styles/header.module.scss";
// lib
import { Row } from "antd";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.top}>
                <HeaderLogo />
                <HeaderMemberWrap />
            </div>
            <div className={styles.bottom}>
                <HeaderMemberFavourite />
                <HeaderMemberWent />
            </div>
        </header>
    );
}
