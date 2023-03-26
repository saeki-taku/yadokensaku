// components
import HeaderMemberNew from "../HeaderMemberNew/";
import HeaderMemberName from "../HeaderMemberName";
import HeaderMemberFavourite from "../HeaderMemberFavourite";
import HeaderMemberLogin from "../HeaderMemberLogin";
// lib
import { Col, Row } from "antd";
// style
import styles from "@/styles/header.module.css";

export default function HeaderMemberWarp() {
    return (
        <Col
            span={10}
            className={styles.member}
        >
            <Row
                align="middle"
                justify="end"
            >
                <HeaderMemberNew />
                <Col
                    span={12}
                    className={styles.member_right}
                >
                    <HeaderMemberName />
                    <Row
                        align="middle"
                        justify="space-between"
                    >
                        <HeaderMemberFavourite />
                        <HeaderMemberLogin />
                    </Row>
                </Col>
            </Row>
        </Col>
    );
}
