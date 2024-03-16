const BASE_URL_KEYWORD = "https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426";
const BASE_URL_SIMPLE = "https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426";

export const Keyword = async (keyword: any, page: number) => {
    // const res = await fetch(`${BASE_URL}?format=json&keyword=${keyword}&page=${page}&applicationId=1081252385066817375`);
    const res = await fetch(`${BASE_URL_KEYWORD}?format=json&keyword=${keyword}&page=${page}&applicationId=${process.env.RAKUTEN_API_KEY}`);
    return res.json();
};

export const AreaName = async (pref: string, area: string) => {
    const res = await fetch(`${BASE_URL_SIMPLE}?format=?format=json&largeClassCode=japan&middleClassCode=${pref}&smallClassCode=${area}&applicationId=${process.env.RAKUTEN_API_KEY}`)
    return res.json();
};
