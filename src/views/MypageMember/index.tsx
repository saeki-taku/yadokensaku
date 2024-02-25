// react / next
import React, { useEffect, useState } from "react";
import Image from "next/image";
// styles
import styles from "@/styles/mypage.module.scss";
// components
import MypageMenuList from "@/components/Mypage/MypageMenuList";
// hooks
import { useUserStore } from "@/hooks/useUserStore";
import Link from "next/link";

interface User {
	name: string;
	email: string;
	uid: string;
}

const MypageMemberView = () => {
	// Zustandの状態を取得
	const uid = useUserStore((state) => state.user?.uid);
	const [userInfo, setUserInfo] = useState<User | null>(null);

	const { user } = useUserStore();

	useEffect(() => {
		setUserInfo(user);
	}, []);

	return (
		<>
			<div className={styles.hero}>
				<figure style={{ position: "relative", width: "100%", height: "300px" }}>
					<Image
						alt=""
						src="/img/top/hero.jpg"
						fill
						style={{
							objectFit: "cover",
						}}
					/>
				</figure>
				<div className={styles.hero_title}>マイページ</div>
			</div>
			<div className={styles.mypage_wrap}>
				<MypageMenuList />
				<div className={`${styles.list_wrap} ${styles.member}`}>
					<div className={styles.list_title}>
						<span>会員情報</span>
					</div>
					<table>
						<tbody>
							<tr>
								<th>ユーザー名</th>
								<td>{userInfo?.name}</td>
							</tr>
							<tr>
								<th>メールアドレス</th>
								<td>{userInfo?.email}</td>
							</tr>
						</tbody>
					</table>
					<ul className={styles.btn_list}>
						<li>
							<Link href="/mypage/member/info_modify">会員情報修正</Link>
						</li>
						<li>
							<Link href="/mypage/member/pass_modify">パスワード変更</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default MypageMemberView;
