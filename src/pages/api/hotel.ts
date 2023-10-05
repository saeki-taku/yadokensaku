const BASE_URL = "https://app.rakuten.co.jp/services/api/Travel/HotelDetailSearch/20170426";

export const Hotel = async (hotel_no: number) => {
    const res = await fetch(`${BASE_URL}?format=json&hotelNo=${hotel_no}&responseType=large&applicationId=1081252385066817375`);
    return res.json();
};


// https://app.rakuten.co.jp/services/api/Travel/HotelDetailSearch/20170426?format=json&hotelNo=806&responseType=large&applicationId=e06e2a5afcf14b52139c1fb6c58e9dbc