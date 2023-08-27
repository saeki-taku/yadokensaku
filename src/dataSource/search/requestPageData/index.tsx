// others
import { promiseAll } from "@/utils/common";
// api
import { Keyword } from "@/pages/api/keyword";

/**
 * requestPageData
 * @param context
 */

// export function requestPageData(context: ANY_OBJECT) {
export function requestPageData(context: any) {
    console.log("test__", context?.query?.keyword);
    // return promiseAll([requestPageData(context)], {
    // contextについての参考: https://www.sukerou.com/2022/02/nextjs-getserversideprops.html
    return promiseAll([Keyword(context?.query?.keyword)], {
        then: ([rankingDataAll]) => ({
            rankingDataAll,
        }),
    });
}
