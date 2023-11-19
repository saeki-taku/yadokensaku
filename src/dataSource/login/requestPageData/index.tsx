// others
import { promiseAll } from "@/utils/common";

/**
 * requestPageData
 * @param context
 */

export function requestPageData(context: any) {
    // console.log("context__", context?.query);
    // return promiseAll([requestPageData(context)], {
    // contextについての参考: https://www.sukerou.com/2022/02/nextjs-getserversideprops.html
    return promiseAll([], {
        then: ([]) => ({}),
    });
}
