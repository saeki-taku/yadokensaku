// components
import HeaderMemberNew from "../HeaderMemberNew/";
import HeaderMemberName from "../HeaderMemberName";
import HeaderMemberFavourite from "../HeaderMemberFavourite";
import HeaderMemberLogin from "../HeaderMemberLogin";
// lib
import { Col } from "antd";
// style
import styles from "@/styles/header.module.scss";

export default function HeaderMemberWarp() {
    return (
        <Col
            span={16}
            className={styles.member_wrap}
        >
            <div className={styles.member_right}>
                <HeaderMemberName />
                <div className={styles.member_box}>
                    <HeaderMemberNew />
                    <HeaderMemberLogin />
                </div>
            </div>
        </Col>
    );
}
