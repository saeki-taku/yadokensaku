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
import { getAuth, signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";
import { useForm, useFormContext } from "react-hook-form";
import { auth } from "@/lib/firebaseConfig";
// components

const LoginView = () => {
    const router = useRoute();
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm();

    // ユーザーのログイン
    const onLogin = async (data: ANY_OBJECT) => {
        try {
            const userCredentical = await signInWithEmailAndPassword(auth, data.mail, data.pass);
            const user = userCredentical.user;
            console.log("ログインに成功しました", user);
            alert("ログインしました");
            router.push({
                pathname: "/",
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

export default LoginView;

// saetaku333@yahoo.co.jp
// test001

// saetaku333@gmail.com
// test111
