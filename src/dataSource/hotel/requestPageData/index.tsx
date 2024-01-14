// others
import { promiseAll } from "@/utils/common";
// api
import { HotelDetail } from "@/api/hotel";

/**
 * requestPageData
 * @param context
 */

export function requestPageData(context: any) {
	return promiseAll([HotelDetail(context?.query?.hotel_no)], {
		then: ([hotelDetail]) => ({
			hotelDetail,
		}),
	});
}
