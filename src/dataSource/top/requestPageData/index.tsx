// others
import { promiseAll } from "@/utils/common";
// api
import { getRanking } from "@/pages/api/ranking";

/**
 * requestPageData
 * @param context
 */
export function requestPageData(context: ANY_OBJECT) {

    return promiseAll(
        [
            // requestHotelRankingAll({
            getRanking({
                data: {
                    page: context?.query?.page,
                },
                context,
            }),
        ],
        {
            then: ([{ data: rankingData }]) => ({
                ...rankingData,
            }),
        }
    );
}
