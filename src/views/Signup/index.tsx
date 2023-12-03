// react / next
import Link from "next/link";
import React, { useState } from "react";
// styles
import styles from "@/styles/authForm.module.scss";
// hools
import { useRoute } from "@/hooks/useRoute";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useForm, useFormContext } from "react-hook-form";
// firebase
import { createUserWithEmailAndPassword, updateProfile, signInAnonymously } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
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
            // updateProfile(auth.currentUser, {
            //     displayName: data.name,
            // });
            const user = userCredentical.user;
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            console.log("docRef", docRef);
            console.log("docSnap", docSnap);

            if (!docSnap.exists()) {
                await setDoc(doc(db, "users", user.uid), {
                    name: data.name,
                    email: user.email,
                });
            }

            console.log("登録完了しました", user);
            alert("登録完了しました");
            // router.push({
            //     pathname: "",
            // });
            return user;
        } catch (error: any) {
            setErrorMessage("※登録に失敗しました");
            // setErrorMessage("※既に使用されているメールアドレスです。");
            console.log("登録に失敗しました", error);
        }
    };

    return (
        <div className="common_wrap">
            <div className={styles.login}>
                <div className={styles.title_box}>
                    <span className={styles.title}>会員新規登録フォーム</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errorMessage.length > 0 && <p className={styles.login_error_message}>{errorMessage}</p>}
                    <div className={styles.form_box}>
                        <div className={styles.input_frame}>
                            <p className={styles.input_label}>ユーザー名</p>
                            <input
                                type="text"
                                {...register("name", {
                                    maxLength: { value: 100, message: "" },
                                })}
                            />
                        </div>
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
                            <span className={styles.btn_text}>登録する</span>
                            <input
                                type="submit"
                                value=""
                            />
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

// saetaku333@yahoo.co.jp
// test001

// saetaku333@gmail.com
// test111
