// others
import { promiseAll } from "@/utils/common";
// api
import { HotelSimple } from "@/api/hotel";

/**
 * requestPageData
 * @param context
 */

export function requestPageData(context: any) {
	// return promiseAll([HotelSimple(context?.query?.hotel_no)], {
	return promiseAll([HotelSimple(context)], {
		then: ([hotelSimple]) => ({
			hotelSimple,
		}),
	});
}
