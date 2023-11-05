import React from "react";

/**
 * promiseAll - ignore promiseAll maximum promises
 * @param promises
 * @param then - onSuccess callback
 */
export function promiseAll<RESPONSE_TYPE>(
    promises: Promise<any>[],
    { then }: { then: (props: any) => RESPONSE_TYPE }
) {
    return Promise.all(promises).then(then);
}