// react / next
import React, { useEffect, useState } from "react";
import Image from "next/image";
// styles
import styles from "@/styles/mypage.module.scss";
// components
import MypageMenuList from "@/components/Mypage/MypageMenuList";
import Modal from "./components/Modal";
// hooks
import { useUserStore } from "@/hooks/useUserStore";
import Link from "next/link";
// firebase
import { getAuth, signOut, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { FirebaseError } from "@firebase/util";

interface User {
	name: string;
	email: string;
	uid: string;
}

const MypageMemberView = () => {
	// Zustandの状態を取得
	const uid = useUserStore((state) => state.user?.uid);
	const [isModalShow, setIsModalShow] = useState(false);
	const [userInfo, setUserInfo] = useState<User | null>(null);
	const clearUser = useUserStore((state) => state.clearUser);

	const { user } = useUserStore();

	useEffect(() => {
		setUserInfo(user);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log("userInfo", userInfo?.email);

	const email = userInfo?.email ? userInfo?.email : "";

	const handleChange = async () => {
		sendPasswordResetEmail(auth, email);

		try {
			setIsModalShow(true);
		} catch (error: any) {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(errorCode);
		}
	};

	// モーダルを閉じる処理 ログイン画面遷移
	const handleClose = async () => {
		setIsModalShow(false);

		try {
			const auth = getAuth();
			await signOut(auth);
			clearUser();
		} catch (e) {
			if (uid && uid.length > 0) {
				clearUser();
			}
			if (e instanceof FirebaseError) {
				console.log("エラーです", e);
			}
		}
	};

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
							{/* <Link href="/mypage/member/pass_modify">パスワード変更</Link> */}
							<button className="modal_btn" onClick={handleChange}>
								パスワード変更
							</button>
						</li>
					</ul>
				</div>
			</div>
			{isModalShow && <Modal onClose={handleClose} />}
		</>
	);
};

export default MypageMemberView;
