import { useEffect, useState } from "react";
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
// hooks
import useUserStore from "@/hooks/useUserStore";

export default function HeaderMemberWarp() {
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
	);
}
