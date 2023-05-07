// styles
import styles from "@/styles/home.module.scss";
// components
import TopMainRanking from "../TopMainRanking";

export default function TopMain() {
    return (
        <div className={styles.main_wrap}>
            <TopMainRanking title="人気宿【総合】" />
            <TopMainRanking title="人気宿【贅沢】" />
            <TopMainRanking title="人気宿【温泉】" />
        </div>
    );
}
