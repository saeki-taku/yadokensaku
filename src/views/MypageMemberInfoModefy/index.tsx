// react / next
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// styles
import styles from "@/styles/mypage.module.scss";
// lib
import { useForm, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
// hooks
import { useUserStore } from "@/hooks/useUserStore";
// hools
import { useRoute } from "@/hooks/useRoute";
// firebase
import {
	getAuth,
	signOut,
	createUserWithEmailAndPassword,
	updateProfile,
	updateEmail,
	sendEmailVerification,
	reauthenticateWithCredential,
	verifyBeforeUpdateEmail,
} from "firebase/auth";
import { doc, setDoc, getDoc, addDoc, collection } from "firebase/firestore";
import { app, auth, db } from "@/lib/firebaseConfig";
import { FirebaseError } from "@firebase/util";

interface User {
	name: string;
	email: string;
	uid: string;
}

const MypageMemberView = () => {
	const router = useRoute();
	const [errorMessage, setErrorMessage] = useState("");
	const [userInfo, setUserInfo] = useState<User | null>(null);
	const uid = useUserStore((state) => state.user?.uid);
	const clearUser = useUserStore((state) => state.clearUser);
	const { user } = useUserStore();

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
		watch,
	} = useForm({
		defaultValues: {
			name: user?.name || "",
			email: user?.email || "",
			email_comfirm: user?.email || "",
		},
	});

	const currentUser = auth.currentUser;
	// console.log("currentUser", currentUser);

	// const credential = promptForCredentials();

	const onSubmit = async (data: ANY_OBJECT) => {
		const currentUser = auth.currentUser;

		const watchedFields = watch(["name", "email"]);

		console.log("isDirty", isDirty);
		console.log("data", data);
		console.log("Name field is dirty:", isDirty && "name" in watchedFields);
		console.log("Email field is dirty:", isDirty && "email" in watchedFields);

		if (isDirty && currentUser) {
			console.log("currentUser", user?.name, "=== newUser", data.user);
			console.log("email", user?.email, "=== newEmail", data.email);
			if (user?.name !== data.user) {
				try {
					await updateProfile(currentUser, {
						displayName: data.name,
					});

					// try {
					// 	await verifyBeforeUpdateEmail(currentUser, data.email);
					// 	alert("新しく設定したメールアドレスにメールを送信しました。変更を完了するには認証となるためメールをご確認ください。");
					// } catch (error: any) {
					// 	alert("メールアドレスの変更に失敗しました。");
					// }

					// firebase doc関数について https://firebase.google.com/docs/firestore/query-data/get-data?hl=ja
					// doc(db, "users（firebaseに登録するパス名）", user.uid（追加する情報（今回はユーザーID））);
					// const docRef = doc(db, "users", user.uid);
					// const docSnap = await getDoc(docRef);

					// console.log("docRef", docRef);
					// console.log("docSnap", docSnap);

					// if (!docSnap.exists()) {
					// 	await setDoc(doc(db, "users", user.uid), {
					// 		name: data.name,
					// 		email: user.email,
					// 	});

					// フィールドにお気に入り情報を追加
					// await setDoc(doc(db, `users/${user.uid}/myhotel`, "favorite"), {
					// 	id: [],
					// });

					console.log("変更完了しました", user);
					alert("変更完了しました");
				} catch (error: any) {
					setErrorMessage("※変更に失敗しました");
					console.log("ユーザー名の変更に失敗しました", error);
				}
			}

			if (user?.email !== data.email) {
				try {
					await verifyBeforeUpdateEmail(currentUser, data.email);
					alert("新しく設定したメールアドレスにメールを送信しました。変更を完了するには認証となるためメールをご確認ください。");
				} catch (error: any) {
					setErrorMessage("※変更に失敗しました");
					console.log("変更に失敗しました", error);
				}
			}

			try {
				const auth = getAuth();
				await signOut(auth);
				clearUser();

				// alert("ログアウトしました");
			} catch (e) {
				if (uid && uid.length > 0) {
					clearUser();
				}
				if (e instanceof FirebaseError) {
					console.log("エラーです", e);
				}
			}
		} else {
			alert("フォームは変更されていません");
			return;
		}
	};

	return (
		<div className={styles.mypage_wrap}>
			<div className={`${styles.list_wrap} ${styles.infoModefy}`}>
				<div className={styles.list_title}>
					<span>会員情報修正</span>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					{errorMessage.length > 0 && <p className={styles.login_error_message}>{errorMessage}</p>}
					<ErrorMessage errors={errors} name="name" render={({ message }) => <p className={styles.error_message}>※{message}</p>} />
					<ErrorMessage errors={errors} name="email" render={({ message }) => <p className={styles.error_message}>※{message}</p>} />
					<ErrorMessage errors={errors} name="email_comfirm" render={({ message }) => <p className={styles.error_message}>※{message}</p>} />
					<table>
						<tbody>
							<tr>
								<th>ユーザー名</th>
								<td>
									<input
										type="text"
										{...register("name", {
											maxLength: { value: 30, message: "ユーザー名は30文字以内で入力してください" },
										})}
									/>
								</td>
							</tr>
							<tr>
								<th>メールアドレス</th>
								<td>
									<input
										type="text"
										defaultValue={userInfo?.email || ""}
										{...register("email", {
											maxLength: { value: 50, message: "メールアドレスは50文字以内で入力してください" },
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
												message: "メールアドレスの形式で入力してください",
											},
										})}
									/>
								</td>
							</tr>
							<tr>
								<th>メールアドレス確認</th>
								<td>
									<input
										type="text"
										defaultValue={userInfo?.email || ""}
										{...register("email_comfirm", {
											required: "メールアドレス確認は必須です",
											validate: (value) => value === watch("email") || "メールアドレスが一致しません",
										})}
									/>
								</td>
							</tr>
						</tbody>
					</table>

					<div className={styles.careful}>
						<span className={styles.careful_pre}>※</span>入力に間違えがないことをご確認ください
					</div>

					<div className={styles.submit_btn}>
						<span className={styles.btn_text}>変更する</span>
						<input type="submit" value="" />
					</div>
					<div className={styles.cancel_box}>
						<Link className={styles.cancel} href="/mypage/member">
							キャンセルする
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default MypageMemberView;
