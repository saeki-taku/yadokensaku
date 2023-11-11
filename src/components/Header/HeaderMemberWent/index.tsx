// lib
import Link from "next/link";
// style
import styles from "@/styles/header.module.scss";

export default function HeaderMemberWent() {
    return (
        <span className={styles.went}>
            <Link href="/">行ったことがある(0)</Link>
        </span>
    );
}
