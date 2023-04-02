// lib
import Link from "next/link";
import { Col } from "antd";
// style
import styles from "@/styles/header.module.scss";

export default function HeaderMemberFavourite() {
    return (
        <Col span={12}>
            <span>
                <Link href="/">お気に入り(0)</Link>
            </span>
        </Col>
    );
}
