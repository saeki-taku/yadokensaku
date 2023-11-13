const BASE_URL = "https://app.rakuten.co.jp/services/api/Travel/HotelRanking/20170426";

// export const getRanking = async (genre: any): Promise<RankingResponse> => {
//     const res = await fetch(`${BASE_URL}?format=json&genre=${genre}&applicationId=1081252385066817375`);
//     // const res = await fetch(`${BASE_URL}?format=json&genre=${genre}&applicationId=${process.env.API_KEY}`);
//   return res.json();
// };

// export const Ranking = async () => {
//     const res = await fetch(
//         "https://app.rakuten.co.jp/services/api/Travel/HotelRanking/20170426?format=json&genre=all&applicationId=1003642797751323945"
//     );
//     return res.json();
// };
export const Ranking = async (genre: any) => {
    const res = await fetch(`${BASE_URL}?format=json&genre=${genre}&applicationId=${process.env.RAKUTEN_API_KEY}`);
    return res.json();
};