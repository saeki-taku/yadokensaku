// firebase
import { doc, getDocs, updateDoc, arrayUnion, arrayRemove, collection } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import "firebase/firestore";

export const getHotelIds = async (type: string,  uid: string = "") => {
  // const uid = useUserStore((state) => state.user?.uid);

  const userDocRef = doc(db, "users", uid);
  const favoritesCollectionRef = collection(userDocRef, type);
  let favoriteData: Array<number> = [];

  try {
    const querySnapshot = await getDocs(favoritesCollectionRef);
    querySnapshot.forEach((docs) => {
      const hotelIdsArray = docs.data().id;
      hotelIdsArray.forEach((id: number) => {
        favoriteData.push(id);
      });
    });
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error; // エラーを再スローして適切に処理
  }
  return favoriteData;
};