const BASE_URL = "https://app.rakuten.co.jp/services/api/Travel/HotelDetailSearch/20170426";

export const Hotel = async (hotel_no: number) => {
    const res = await fetch(`${BASE_URL}?format=json&hotelNo=${hotel_no}&applicationId=1081252385066817375`);
    return res.json();
};
