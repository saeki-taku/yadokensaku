import styles from "@/styles/header.module.css";
import { Col, Row, Space } from "antd";

export default function Header() {
    return (
        <header className={styles.header}>
            <Row align="middle" justify="space-between">
                <Col span={6}>
                    <h1>
                        <a href="">宿検索</a>
                    </h1>
                </Col>
                <Col span={10} className={styles.member}>
                    <Row align="middle" justify="end">
                        <Col span={6} className={styles.member_left}>
                            <span>
                                <a href="">新規会員登録</a>
                            </span>
                        </Col>
                        <Col span={12} className={styles.member_right}>
                            <span>ようこそゲストさん</span>
                            <Row align="middle" justify="space-between">
                                <Col span={12}>
                                    <span>
                                        <a className="white" href="">
                                            お気に入り(0)
                                        </a>
                                    </span>
                                </Col>
                                <Col span={12}>
                                    <span>
                                        <a href="">ログイン</a>
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </header>
    );
}
