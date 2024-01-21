const BASE_URL_SIMPLE = "https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426";
const BASE_URL_DETAIL = "https://app.rakuten.co.jp/services/api/Travel/HotelDetailSearch/20170426";

export const HotelSimple = async (hotel_no: number) => {
    const res = await fetch(`${BASE_URL_SIMPLE}?format=json&hotelNo=${hotel_no}&datumType=1&applicationId=1081252385066817375`);

    return res.json();
};

export const HotelDetail = async (hotel_no: number) => {
    const res = await fetch(`${BASE_URL_DETAIL}?format=json&hotelNo=${hotel_no}&responseType=large&datumType=1&applicationId=1081252385066817375`);
    return res.json();
};
