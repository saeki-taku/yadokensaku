// components
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
// style
import styles from "@/styles/header.module.scss";

export default function Header() {
	// console.log("ログイン情報", auth);

	return (
		<header className={styles.header}>
			<HeaderTop />
			<HeaderBottom />
		</header>
	);
}
