// others
import { promiseAll } from "@/utils/common";
// api
import { Hotel } from "@/pages/api/hotel";

/**
 * requestPageData
 * @param context
 */

export function requestPageData(context: any) {
    return promiseAll([Hotel(context?.query?.hotel_no)], {
        then: ([hotelDetail]) => ({
            hotelDetail,
        }),
    });
}
