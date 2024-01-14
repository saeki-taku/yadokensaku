// react / next
import { useEffect, useState } from "react";
import Link from "next/link";
// components
import HeaderMemberNew from "../HeaderMemberNew/";
import HeaderMemberName from "../HeaderMemberName";
import HeaderMemberFavourite from "../HeaderBottom";
import HeaderMemberLogin from "../HeaderMemberLogin";
import HeaderMemberMypage from "../HeaderMemberMypage";
// lib
import { Col } from "antd";
// style
import styles from "@/styles/header.module.scss";
// hooks
import { useUserStore } from "@/hooks/useUserStore";

export default function HeaderTop() {
	const { user } = useUserStore();
	const [userName, setUserName] = useState(false);

	useEffect(() => {
		if (user?.name === undefined || user?.name === null) {
			setUserName(true);
		} else {
			setUserName(false);
		}
	}, [user?.name]);

	return (
		<div className={styles.top}>
			<Col span={8}>
				<h1>
					<Link href="/">宿検索</Link>
				</h1>
			</Col>
			<Col span={16} className={styles.member_wrap}>
				<div className={styles.member_right}>
					<HeaderMemberName />
					{userName ? (
						<div className={styles.member_box}>
							<HeaderMemberNew />
							<HeaderMemberLogin />
						</div>
					) : (
						<div className={styles.member_box}>
							<HeaderMemberMypage />
						</div>
					)}
				</div>
			</Col>
		</div>
	);
}
