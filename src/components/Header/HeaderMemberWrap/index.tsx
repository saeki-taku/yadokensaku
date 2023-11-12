// components
import HeaderMemberNew from "../HeaderMemberNew/";
import HeaderMemberName from "../HeaderMemberName";
import HeaderMemberFavourite from "../HeaderMemberFavourite";
import HeaderMemberLogin from "../HeaderMemberLogin";
import HeaderMemberMypage from "../HeaderMemberLogin";
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
                    {/* todo: ログイン済していたら <HeaderMemberMypage /> を表示させる条件分岐 */}
                    {/* <HeaderMemberMypage /> */}
                </div>
            </div>
        </Col>
    );
}
