// lib
import Link from "next/link";
// style
import styles from "@/styles/header.module.scss";

export default function HeaderMemberWent() {
	return (
		<span className={styles.went}>
			<Link href="/">行ったことある(0)</Link>
		</span>
	);
}
