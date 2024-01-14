import { useEffect, useState } from "react";
import styles from "@/styles/header.module.scss";
import { useUserStore } from "@/hooks/useUserStore";

export default function HeaderMemberName() {
	const { user } = useUserStore();
	const [userName, setUserName] = useState("ゲスト");

	useEffect(() => {
		if (user?.name === undefined || user?.name === null) {
			setUserName("ゲスト");
		} else {
			setUserName(user.name);
		}
	}, [user?.name]);

	return <span className={styles.memberName}>ようこそ{userName}さん</span>;
}
