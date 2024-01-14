// others
import { promiseAll } from "@/utils/common";
// api
// import { getRanking } from "@/pages/api/ranking";
import { Ranking } from "@/api/ranking";
// import { HotelRanking } from "@/pages/api/ranking";

/**
 * requestPageData
 * @param context
 */

// export function requestPageData(context: ANY_OBJECT) {
export function requestPageData(context: any) {
	// return promiseAll([requestPageData(context)], {
	// contextについての参考: https://www.sukerou.com/2022/02/nextjs-getserversideprops.html
	return promiseAll([Ranking("all"), Ranking("onsen"), Ranking("premium")], {
		then: ([rankingDataAll, rankingDataOnsen, rankingDataPremium]) => ({
			// ...rankingDataAll,
			// ...rankingDataOnsen,
			rankingDataAll,
			rankingDataOnsen,
			rankingDataPremium,
		}),
	});
}
