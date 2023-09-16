// styles
import styles from "@/styles/home.module.scss";
// components
import TopMainRanking from "../TopMainRanking";

export default function TopMain({ pageData }: ANY_OBJECT) {
    // console.log("pageData###", pageData.pageData.rankingDataAll.Rankings[0]);
    // console.log("pageData###", pageData.rankingDataAll.Rankings[0].Ranking);

    return (
        <div className={styles.main_wrap}>
            <TopMainRanking
                title="人気宿【総合】"
                ranikingData={pageData.pageData.rankingDataAll.Rankings[0].Ranking.hotels}
            />
            <TopMainRanking
                title="人気宿【贅沢】"
                ranikingData={pageData.pageData.rankingDataPremium.Rankings[0].Ranking.hotels}
            />
            <TopMainRanking
                title="人気宿【温泉】"
                ranikingData={pageData.pageData.rankingDataOnsen.Rankings[0].Ranking.hotels}
            />
        </div>
    );
}
