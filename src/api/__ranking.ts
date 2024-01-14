import { useState, useEffect } from 'react';
import axios from 'axios';

export function HotelRanking(genre: any): Promise<any> {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await axios.get(
          'https://app.rakuten.co.jp/services/api/Travel/SimpleHotelRanking/20170426',
          {
            params: {
              applicationId: '1003642797751323945',
              genre: genre,
            },
          }
        );
        if (response.data && response.data.hotels) {
          setRanking(response?.data?.hotels);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRanking();
  }, [genre]);

  return new Promise((resolve) => {
    resolve(ranking);
  });
}
