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
import { createUserWithEmailAndPassword, updateProfile, signInAnonymously } from "firebase/auth";
import { useForm, useFormContext } from "react-hook-form";
import { auth } from "@/lib/firebaseConfig";
// components

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
            const userCredentical = await createUserWithEmailAndPassword(auth, data.mail, data.pass);
            updateProfile(auth.currentUser, {
                displayName: data.name,
            });
            const user = userCredentical.user;
            console.log("登録完了しました", user);
            alert("登録完了しました");
            // router.push({
            //     pathname: "",
            // });
            return user;
        } catch (error: any) {
            setErrorMessage("※メールアドレスもしくはパスワードが違います");
            console.log("ログインに失敗しました", error);
        }
    };

    // import { getAuth, updateProfile } from "firebase/auth";
    // const auth = getAuth();
    // updateProfile(auth.currentUser, {
    //     displayName: "Jane Q. User",
    //     photoURL: "https://example.com/jane-q-user/profile.jpg",
    // })
    //     .then(() => {
    //         // Profile updated!
    //         // ...
    //     })
    //     .catch((error) => {
    //         // An error occurred
    //         // ...
    //     });

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //         updateProfile(auth.currentUser, {
    //             displayName: name,
    //         });
    //         navigate("/");
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

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
                        <div className={styles.login_btn}>
                            <span className={styles.btn_text}>ログイン</span>
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
