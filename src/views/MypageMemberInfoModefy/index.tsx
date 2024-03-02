// react / next
import React, { useEffect, useState } from "react";
import Link from "next/link";
// styles
import styles from "@/styles/mypage.module.scss";
// lib
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
// component
import Modal from "./components/Modal";
// hooks
import { useUserStore } from "@/hooks/useUserStore";
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

const MypageMemberInfoModefy = () => {
	const [errorMessage, setErrorMessage] = useState("");
	const [changeInfoText, setChangeInfoText] = useState("");
	const [isEmailChange, setIsEmailChange] = useState(false);
	const [isModalShow, setIsModalShow] = useState(false);

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

	const docRef = doc(db, `users/${uid}/myhotel`, "went");
	// const docRef = doc(db, `users`, `${uid}`);

	console.log("docRef__", docRef);

	const onSubmit = async (data: ANY_OBJECT) => {
		const currentUser = auth.currentUser;

		// console.log("isDirty", isDirty);
		// console.log("data", data);

		if (isDirty && currentUser) {
			// console.log("currentUser", user?.name, "=== newUser", data.name);
			// console.log("email", user?.email, "=== newEmail", data.email);

			if (data.name && user?.name !== data.name) {
				try {
					await updateProfile(currentUser, {
						displayName: data.name,
					});

					const docRef = doc(db, `users`, `${uid}`);

					await setDoc(
						docRef,
						{
							name: data.name,
						},
						{ merge: true }
					);

					setChangeInfoText("ユーザー名");
					setIsModalShow(true);
				} catch (error: any) {
					setErrorMessage("※ユーザー名の変更に失敗しました");
				}
			}

			if (data.email && user?.email !== data.email) {
				try {
					await verifyBeforeUpdateEmail(currentUser, data.email);

					const docRef = doc(db, `users`, `${uid}`);

					await setDoc(
						docRef,
						{
							updatedEmail: data.email,
						},
						{ merge: true }
					);

					setIsEmailChange(true);
					setIsModalShow(true);
				} catch (error: any) {
					setErrorMessage("※メールアドレスの変更に失敗しました");
				}
			}
		} else {
			alert("フォームは変更されていません");
			return;
		}
	};

	const handleClose = async () => {
		setIsModalShow(false);

		try {
			const auth = getAuth();
			await signOut(auth);
			clearUser();
		} catch (e) {
			if (uid && uid.length > 0) {
				clearUser();
			}
			if (e instanceof FirebaseError) {
				console.log("エラーです", e);
			}
		}
	};

	return (
		<>
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
			{isModalShow && <Modal onClose={handleClose} changeText={changeInfoText} isEmailChange={isEmailChange} />}
		</>
	);
};

export default MypageMemberInfoModefy;
