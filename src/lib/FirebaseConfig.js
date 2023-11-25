import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Firestoreはログインやユーザー登録の実装には使わないが、今後のことを考えて入れておく
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

// .envファイルで設定した環境変数をfirebaseConfigに入れる
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHD_OMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

console.log("firebaseConfig？", firebaseConfig);

let app = FirebaseApp;
let auth = Auth;
let firestore = getFirestore;

// サーバーサイドでレンダリングするときにエラーが起きないようにするための記述
if (typeof window !== "undefined" && !getApps().length) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    firestore = getFirestore(app);
}
export { auth, firestore };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// let app = "";
// let auth = "";
// サーバーサイドでレンダリングするときにエラーが起きないようにするための記述;
// if (typeof window !== "undefined" && !getApps().length) {
// app = initializeApp(firebaseConfig);
// auth = getAuth(app);
// firestore = getFirestore();
// }

// console.log("app:", app);
// console.log("auth:", auth);

// export { auth };
// export { firebaseApp, auth, firestore };
