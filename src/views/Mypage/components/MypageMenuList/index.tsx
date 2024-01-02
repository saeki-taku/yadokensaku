// react / next
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// styles
import styles from "@/styles/mypage.module.scss";
// hools
import { useRoute } from "@/hooks/useRoute";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faHeart, faMapLocationDot, faArrowRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
// firebase
import { getAuth, signOut } from "firebase/auth";
import { FirebaseError } from "@firebase/util";
// Zustand
import useUserStore from "@/hooks/useUserStore";

const MypageMenuList = () => {
	const clearUser = useUserStore((state) => state.clearUser);
	const uid = useUserStore((state) => state.user?.uid);
	// setUser: (newUser) => set({ user: newUser }),

	const handleSignOut = async (e: any) => {
		e.preventDefault();

		try {
			const auth = getAuth();
			await signOut(auth);
			clearUser();

			// alert("ログアウトしました");
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
		<div className={styles.menu_wrap}>
			<ul className={styles.menu_list}>
				<li className={styles.mypage_top}>
					<Link href="/signup">
						<FontAwesomeIcon
							icon={faHouse}
							// size="lg"
							size="xl"
							style={{ color: "#800000" }}
							className={styles.icon}
						/>
						<span className={styles.text}>マイページトップ</span>
					</Link>
				</li>
				<li className={styles.favorit}>
					<Link href="">
						<FontAwesomeIcon icon={faHeart} size="xl" style={{ color: "#f2abc6" }} className={styles.icon} />
						<span className={styles.text}>お気に入り</span>
					</Link>
				</li>
				<li className={styles.went}>
					<Link href="">
						<FontAwesomeIcon icon={faMapLocationDot} size="xl" style={{ color: "#cc8e23" }} className={styles.icon} />
						<span className={styles.text}>行ったことある</span>
					</Link>
				</li>
				<li className={styles.memberInfo}>
					<Link href="">
						<FontAwesomeIcon icon={faUser} style={{ color: "#248b51" }} size="xl" className={styles.icon} />
						<span className={styles.text}>会員情報</span>
					</Link>
				</li>
				<li className={styles.logout}>
					<a href="#" onClick={handleSignOut}>
						<FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: "#8a6f10" }} size="xl" className={styles.icon} />
						<span className={styles.text}>ログアウト</span>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default MypageMenuList;