// others
import { promiseAll } from "@/utils/common";
import { request } from "http";
// api
// import { getCourseListData } from "@/pages/api/list";

/**
 * requestPageData
 * @param context
 */
export function requestPageData(context: ANY_OBJECT) {
    return promiseAll(
        [
            requestHotelRankingAll({
                data: {
                    page: context?.query?.page,
                },
                context,
            }),
        ],
        {
            then: ([{ data: postData }]) => ({
                ...postData,
            }),
        }
    );
}
