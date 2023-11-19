import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Firestoreはログインやユーザー登録の実装には使わないが、今後のことを考えて入れておく
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

// .envファイルで設定した環境変数をfirebaseConfigに入れる
const firebaseConfig = {
    apiKey: "process.env.FIREBASE_API_KEY",
    authDomain: "process.env.FIREBASE_AUTHD_OMAIN",
    projectId: "process.env.FIREBASE_PROJECT_ID",
    storageBucket: "process.env.FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "process.env.FIREBASE_MESSAGING_SENDER_ID",
    appId: "process.env.FIREBASE_APP_ID",
    measurementId: "process.env.FIREBASE_MEASUREMENT_ID",
};

let app = FirebaseApp;
let auth = Auth;
// let firestore = getFirestore;

// サーバーサイドでレンダリングするときにエラーが起きないようにするための記述
if (typeof window !== "undefined" && !getApps().length) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    // firestore = getFirestore();
}

export { auth };
// export { firebaseApp, auth, firestore };
