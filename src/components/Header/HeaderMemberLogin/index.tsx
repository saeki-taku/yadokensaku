// lib
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
// style
import styles from "@/styles/header.module.scss";

export default function HeaderLogin() {
	return (
		<span className={styles.mypage}>
			<Link href="/mypage">
				<span className={styles.text}>マイページ</span>
				<FontAwesomeIcon icon={faRightToBracket} style={{ color: "#800000" }} className={styles.icon} />
			</Link>
		</span>
	);
}
