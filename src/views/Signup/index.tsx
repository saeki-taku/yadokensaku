// react / next
import Link from "next/link";
import React, { useState } from "react";
// styles
import styles from "@/styles/authForm.module.scss";
// hools
import { useRoute } from "@/hooks/useRoute";
// lib
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
// firebase
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { doc, setDoc, getDoc, addDoc, collection } from "firebase/firestore";
import { app, auth, db } from "@/lib/firebaseConfig";

// const TopMainRanking = ({ title, ranikingData }: Props) => {
const SignupView = () => {
	const router = useRoute();
	const [errorMessage, setErrorMessage] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();

	// ユーザーのサインアップ
	const onSubmit = async (data: ANY_OBJECT) => {
		try {
			console.log("auth.currentUser::", auth.currentUser);
			console.log("db::", db);

			const userCredentical = await createUserWithEmailAndPassword(auth, data.mail, data.pass);
			const user = userCredentical.user;

			await sendEmailVerification(user);
			await updateProfile(user, {
				displayName: data.name, // data.nameをdisplayNameに設定する
			});

			// firebase doc関数について https://firebase.google.com/docs/firestore/query-data/get-data?hl=ja
			// doc(db, "users（firebaseに登録するパス名）", user.uid（追加する情報（今回はユーザーID））);
			const docRef = doc(db, "users", user.uid);
			const docSnap = await getDoc(docRef);

			console.log("docRef", docRef);
			console.log("docSnap", docSnap);

			if (!docSnap.exists()) {
				await setDoc(doc(db, "users", user.uid), {
					name: data.name,
					email: user.email,
				});

				// フィールドにお気に入り情報を追加
				await setDoc(doc(db, `users/${user.uid}/myhotel`, "favorite"), {
					id: [],
				});
				// フィールドに行ったことある情報を追加
				await setDoc(doc(db, `users/${user.uid}/myhotel`, "went"), {});
			}

			console.log("登録完了しました", user);
			alert("登録完了しました");
			router.push({
				pathname: "/login",
			});
			// return user;
		} catch (error: any) {
			setErrorMessage("※登録に失敗しました");
			// setErrorMessage("※既に使用されているメールアドレスです。");
			console.log("登録に失敗しました", error);
		}
	};

	return (
		<div className="common_wrap">
			<div className={styles.signup}>
				<div className={styles.title_box}>
					<span className={styles.title}>会員新規登録フォーム</span>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					{errorMessage.length > 0 && <p className={styles.login_error_message}>{errorMessage}</p>}
					<ErrorMessage errors={errors} name="name" render={({ message }) => <p className={styles.error_message}>※{message}</p>} />
					<ErrorMessage errors={errors} name="mail" render={({ message }) => <p className={styles.error_message}>※{message}</p>} />
					<ErrorMessage errors={errors} name="pass" render={({ message }) => <p className={styles.error_message}>※{message}</p>} />
					<div className={styles.form_box}>
						<div className={styles.input_frame}>
							<p className={styles.input_label}>ユーザー名</p>
							<input
								type="text"
								{...register("name", {
									maxLength: { value: 30, message: "ユーザー名は30文字以内で入力してください" },
								})}
							/>
						</div>
						<div className={styles.input_frame}>
							<p className={styles.input_label}>メールアドレス</p>
							<input
								type="text"
								{...register("mail", {
									maxLength: { value: 50, message: "メールアドレスは50文字以内で入力してください" },
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
										message: "メールアドレスの形式で入力してください",
									},
								})}
							/>
						</div>
						<div className={styles.input_frame}>
							<p className={styles.input_label}>パスワード</p>
							<input
								type="text"
								{...register("pass", {
									maxLength: { value: 12, message: "パスワードは12文字以内にしてください" },
								})}
							/>
						</div>
						<div className={styles.submit_btn}>
							<span className={styles.btn_text}>登録する</span>
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

export default SignupView;
