// react / next
import React, { useState, useEffect } from "react";
// styles
import styles from "@/styles/authForm.module.scss";
// lib
import { useForm, useFormContext } from "react-hook-form";
// utils
import { getHotelIds } from "../../utils/myhotel";
// firebase
import { getAuth, signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
// zustand
import { useUserStore, useFavoriteStore, useWentStore } from "@/hooks/useUserStore";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const LoginView = () => {
	const [errorMessage, setErrorMessage] = useState("");

	// Zustandの記述
	// setUser関数を取得
	const setUser = useUserStore((newUser) => newUser.setUser);
	const setFavoriteHotels = useFavoriteStore((state) => state.setFavoriteHotels);
	const setWentHotels = useWentStore((state) => state.setWentHotels);

	const [favoriteHotelLength, setFavoriteHotelLength] = useState(0);

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();

	// ユーザーのログイン
	// const onLogin = async (data: ANY_OBJECT) => {
	// 	try {
	// 		const userCredentical = await signInWithEmailAndPassword(auth, data.mail, data.pass);
	// 		const user = userCredentical.user;

	// 		console.log("ログインしました", user);
	// 		alert("ログインしました");
	// 		// router.push({
	// 		//     pathname: "/",
	// 		// });

	// 		return user;
	// 	} catch (error: any) {
	// 		setErrorMessage("※メールアドレスもしくはパスワードが違います");
	// 		console.log("ログインに失敗しました", error);
	// 	}
	// };

	// Zustandの記述
	const onLogin = async (data: ANY_OBJECT) => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, data.mail, data.pass);
			console.log("ログインしました", userCredential);
			const user = userCredential.user;

			console.log("user::", user);

			// Zustandのuser情報を更新
			setUser({
				name: user.displayName ? user.displayName : "",
				email: user.email ? user.email : "",
				uid: user.uid ? user.uid : "",
			});

			getHotelIds("favoriteHotels", user.uid)
				.then((result) => {
					setFavoriteHotels(result.length);
				})
				.catch((error) => {
					console.error("Error:", error);
				});

			getHotelIds("wentHotels", user.uid)
				.then((result) => {
					setWentHotels(result.length);
				})
				.catch((error) => {
					console.error("Error:", error);
				});

			return user;
		} catch (error: any) {
			setErrorMessage("※メールアドレスもしくはパスワードが違います");
			console.log("ログインに失敗しました", error);
		}
	};

	return (
		<div className="common_wrap">
			<div className={styles.login}>
				<div className={styles.title_box}>
					<span className={styles.title}>ログインフォーム</span>
				</div>
				<form onSubmit={handleSubmit(onLogin)}>
					{errorMessage.length > 0 && <p className={styles.login_error_message}>{errorMessage}</p>}
					<div className={styles.form_box}>
						<div className={styles.input_frame}>
							<p className={styles.input_label}>メールアドレス</p>
							<input
								type="text"
								{...register("mail", {
									maxLength: { value: 100, message: "" },
								})}
							/>
						</div>
						<div className={styles.input_frame}>
							<p className={styles.input_label}>パスワード</p>
							<input
								type="text"
								{...register("pass", {
									maxLength: { value: 10, message: "" },
								})}
							/>
						</div>
						<div className={styles.submit_btn}>
							<span className={styles.btn_text}>ログイン</span>
							<input type="submit" value="" />
						</div>
					</div>
				</form>
			</div>
			{
				// npm i  react-firebase-hooks
				// useAuthState
			}
		</div>
	);
};

export default LoginView;
