// firebase
import { doc, getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import "firebase/firestore";
import { log } from "console";

export const getFavoriteHotelIds = async (uid: string = "") => {
  // const uid = useUserStore((state) => state.user?.uid);
  const userDocRef = doc(db, "users", uid);
  const favoritesCollectionRef = collection(userDocRef, "myhotel");
  console.log("favoritesCollectionRef",favoritesCollectionRef);
  let favoriteData: Array<number> = [];

  try {
    const querySnapshot = await getDocs(favoritesCollectionRef);
    querySnapshot.docs.forEach((docs) => {
      // users/uid/favorite/hotel/id の favorite
      if(docs.id === "favorite") {
        const hotelIdsArray = docs.data().id;
        hotelIdsArray.forEach((id: number) => {
          favoriteData.push(id);
        });
      }
    });
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error; // エラーを再スローして適切に処理
  }
  return favoriteData;
};

export const getWentHotelIds = async (uid: string = "") => {
  const userDocRef = doc(db, "users", uid);
  const wentCollectionRef = collection(userDocRef, "myhotel");
  let wentData: Array<number> = [];

  try {
    const querySnapshot = await getDocs(wentCollectionRef);
    querySnapshot.docs.forEach((docs) => {

      if(docs.id === "went" ) {
        // console.log("docs.data()",docs.data());
        const objToArrData = Object.keys(docs.data());
        objToArrData.forEach((id: string) => {
          wentData.push(Number(id));
        });
      }
    });
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error; // エラーを再スローして適切に処理
  }
  return wentData;
};

export const getWentHotelInfo = async (uid: string = "") => {
  const userDocRef = doc(db, "users", uid);
  const wentCollectionRef = collection(userDocRef, "myhotel");
  let wentData;

  try {
    const querySnapshot = await getDocs(wentCollectionRef);
    querySnapshot.docs.forEach((docs) => {

      if(docs.id === "went" ) {
        // console.log("docs.data()",docs.data());
        wentData = docs.data();
      }
    });
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error; // エラーを再スローして適切に処理
  }
  return wentData;
};
