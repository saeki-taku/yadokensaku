import axios from 'axios';

const BASE_URL = "https://app.rakuten.co.jp/services/api/Travel/HotelRanking/20170426";

export const getRanking = async (genre: any): Promise<RankingResponse> => {
    const res = await axios.get(`${BASE_URL}?format=json&genre=all&applicationId=${process.env.API_KEY}`);
    //   const res = await axios.get('https://app.rakuten.co.jp/services/api/Travel/HotelRanking/20170426?format=json&genre=all&applicationId=1003642797751323945');

  return res.data;
};