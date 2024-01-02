// components
import HeaderLogo from "./HeaderLogo";
import HeaderMemberWrap from "./HeaderMemberWrap";
import HeaderMemberFavourite from "./HeaderMemberFavourite";
import HeaderMemberWent from "./HeaderMemberWent";
// style
import styles from "@/styles/header.module.scss";

export default function Header() {
	// console.log("ログイン情報", auth);

	return (
		<header className={styles.header}>
			<div className={styles.top}>
				<HeaderLogo />
				<HeaderMemberWrap />
			</div>
			<div className={styles.bottom}>
				<HeaderMemberFavourite />
				<HeaderMemberWent />
			</div>
		</header>
	);
}
