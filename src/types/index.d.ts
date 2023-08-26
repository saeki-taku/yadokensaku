declare module 'react-awesome-stars-rating';

/**
 * Any Object - extends type any
 */
interface ANY_OBJECT<PROPERTY_TYPE = any> {
    [key: string]: PROPERTY_TYPE;
}

type RankingResponse = {
  Items: {
    Item: {
      hotelNo: string;
      hotelName: string;
    }[];
  };
};
