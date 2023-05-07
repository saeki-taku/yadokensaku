// libs
import { useRouter } from "next/router";
// others
import { getURLSearchParams, getOriginUrl } from "./tools";

/**
 * useRoute
 * @description custom NextJS useRouter
 */
export const useRoute = () => {
    const nextRouter = useRouter();
    const searchParams = getURLSearchParams();
    const originUrl = getOriginUrl();
    const query = {
        ...(nextRouter.query || {}),
        ...searchParams,
    };

    return {
        ...nextRouter,
        query,
        searchParams,
        originUrl,
    };
};
