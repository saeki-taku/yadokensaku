// lib
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
// style
import styles from "@/styles/header.module.scss";

export default function HeaderLogo() {
    return (
        <span className={styles.member_new}>
            <Link href="/signup">
                <span className={styles.text}>会員登録</span>
                <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "#800000" }}
                    className={styles.icon}
                />
            </Link>
        </span>
    );
}
