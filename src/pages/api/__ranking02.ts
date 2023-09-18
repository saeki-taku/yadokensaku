const BASE_URL = "https://app.rakuten.co.jp/services/api/Travel/HotelRanking/20170426";

// export const getRanking = async (genre: any): Promise<RankingResponse> => {
//     const res = await fetch(`${BASE_URL}?format=json&genre=${genre}&applicationId=1081252385066817375`);
//     // const res = await fetch(`${BASE_URL}?format=json&genre=${genre}&applicationId=${process.env.API_KEY}`);
//   return res.json();
// };

export const Ranking = async () => {
    const res = await fetch(
        "https://app.rakuten.co.jp/services/api/Travel/HotelRanking/20170426?format=json&genre=all&applicationId=1003642797751323945"
    );
    return res.json();
};
// export const Ranking = async (genre: any) => {
//     const res = await fetch(`${BASE_URL}?format=json&genre=${genre}&applicationId=1081252385066817375`);
//     return res.json();
// };


// // types
// import { ASYNC_ACTION } from "@/types/common/http";
// // constants
// import { LIST_ENDPOINTS } from "@/constants/endpoint/golfCourse";

// utils
import { request } from "@/utils/request";
// constants
import { API_ENDPOINTS } from "@/constants/endpoint";

export type PARAMS = {
    data: any
};
export type DATA = {
    page: string
    queryKey: string[],
    data: any
};

const cbSuccess = (data: any) => {
    console.log("Success!!");
}

export const getRankingData = (props: any) => {
    const queryKey = props.queryKey; // keyword検索の時に必要になっていく

    // リクエスト
    return request.call({
        ...props,
        url: API_ENDPOINTS.REQUEST_RANKING,
        data: {},
        method: "GET",
        cbSuccess
    });
}
