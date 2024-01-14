const BASE_URL = "https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426";

export const Keyword = async (keyword: any, page: number) => {
    // const res = await fetch(`${BASE_URL}?format=json&keyword=${keyword}&page=${page}&applicationId=1081252385066817375`);
    const res = await fetch(`${BASE_URL}?format=json&keyword=${keyword}&page=${page}&applicationId=${process.env.RAKUTEN_API_KEY}`);
    return res.json();
};
