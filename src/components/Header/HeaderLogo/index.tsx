// react / next
import Link from "next/link";
import { Col } from "antd";

export default function HeaderLogo() {
    return (
        <Col span={6}>
            <h1>
                <Link href="/">宿検索</Link>
            </h1>
        </Col>
    );
}
