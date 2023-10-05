// others
import { promiseAll } from "@/utils/common";
// api
import { Hotel } from "@/pages/api/hotel";

/**
 * requestPageData
 * @param context
 */

export function requestPageData(context: any) {
    // console.log("no///", context.query.hotel_no);
    return promiseAll([Hotel(context?.query?.hotel_no)], {
        then: ([hotelDetail]) => ({
            hotelDetail,
        }),
    });
}
