const BASE_URL = "https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426";

export const Keyword = async (keyword: any) => {
    const res = await fetch(`${BASE_URL}?format=json&keyword=${keyword}&applicationId=1081252385066817375`);
    return res.json();
};