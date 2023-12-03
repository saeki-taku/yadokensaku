import { getAuth, signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
// style
import styles from "@/styles/header.module.scss";

export default function HeaderMemberName() {
    return <span className={styles.memberName}>ようこそゲストさん</span>;
}
