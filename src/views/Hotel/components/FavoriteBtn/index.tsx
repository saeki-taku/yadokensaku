// style
import styles from "@/styles/hotel.module.scss";
// hools
import { useRoute } from "@/hooks/useRoute";
// firebase
import { doc, setDoc, getDocs, addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app, auth, db } from "@/lib/firebaseConfig";
// zustand
import useUserStore from "@/hooks/useUserStore";
import { useEffect } from "react";

const FavoriteBtn = (hotelNo: ANY_OBJECT) => {
	// // Zustandの状態を取得
	const uid = useUserStore((state) => state.user?.uid);
	console.log("uid::", uid);

	// const userDocRef = doc(db, "users", `${uid}/favoriteHotels`);
	// const userDocRef = doc(db, `users/${uid}/favoriteHotels`, "hotel");
	// const favoritesCollectionRef = collection(userDocRef, "id");

	// getDocs(favoritesCollectionRef);
	// 	.then((querySnapshot) => {
	// 		console.log("querySnapshot", querySnapshot);
	// 		querySnapshot.forEach((docs) => {
	// 			favoriteData.push(docs.data().id);
	// 			// console.log("array", docs.data().id);
	// 		});
	// 	})
	// 	.catch((error) => {
	// 		// console.error("Error getting documents: ", error);
	// 	});

	const userDocRef = doc(db, "users", `${uid}`);
	const favoritesCollectionRef = collection(userDocRef, "favoriteHotels");

	// const userDocRef = doc(db, "users", `${uid}/favoriteHotels`);
	// const userDocRef = doc(db, `users/${uid}/favoriteHotels`, "hotel");
	// const favoritesCollectionRef = collection(userDocRef, "id");

	let favoriteData: any = [];

	getDocs(favoritesCollectionRef)
		.then((querySnapshot) => {
			console.log("querySnapshot", querySnapshot);
			querySnapshot.forEach((docs) => {
				favoriteData.push(docs.data().id);
				console.log("array", docs.data().id);
			});
		})
		.catch((error) => {
			console.error("Error getting documents: ", error);
		});

	console.log("test:::::", favoriteData);

	// お気に入りを追加した時の処理を記述（サブコレクショへの登録）
	const toggleFavorite = async (btnName: string, e: any) => {
		e.preventDefault();

		const favoriteCollection = doc(db, `users/${uid}/${btnName}Hotels`, "hotel");

		const querySnapshot = await getDocs(collection(db, "users"));
		console.log("querySnapshot", querySnapshot);

		console.log("favoriteCollection", favoriteCollection.id);
		await updateDoc(favoriteCollection, {
			id: arrayUnion(hotelNo.hotelNo),
		});
	};

	const toggleWent = async (e: any) => {
		e.preventDefault();

		const wentCollection = doc(db, `users/${uid}/wentHotels`, "hotel");
		// console.log("favoriteCollection", favoriteCollection);
		await updateDoc(wentCollection, {
			id: arrayUnion(hotelNo.hotelNo),
		});
	};

	return (
		<div className={styles.favoriteBtnWrap}>
			<a
				href="#"
				onClick={(e) => toggleFavorite("favorite", e)}
				className={styles.favoriteBtn}
				// className={`${styles.favoriteBtn} ${styles._add}`}
			>
				<i className={styles.icon}></i>
				お気に入り<span className="xs_none">に追加</span>
			</a>
			<a
				href="#"
				onClick={toggleWent}
				className={styles.wentBtn}
				// className={`${styles.wentBtn} ${styles._add}`}
			>
				<i className={styles.icon}></i>
				行った<span className="">ことがある</span>
			</a>
		</div>
	);
};

export default FavoriteBtn;
