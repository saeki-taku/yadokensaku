// react / next
import Link from "next/link";
// styles
import styles from "@/styles/login.module.scss";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getAuth, signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";
import { useForm, useFormContext } from "react-hook-form";
// import { firebaseApp, auth, firestore } from "@/lib/firebaseConfig";
import { auth } from "@/lib/firebaseConfig";
// components

const LoginView = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm();
    console.log("auth", auth);

    // ユーザーのログイン
    const login = async (mail: string, password: string) => {
        try {
            const userCredentical = await signInWithEmailAndPassword(auth, mail, password);
            const user = userCredentical.user;
            console.log("ログインに成功しました", user);
            return user;
        } catch (error: any) {
            const errorCode = error.code;
            const errorMesage = error.message;
            console.log("ログインに失敗しました", errorCode, errorMesage);
        }
    };

    console.log("login", login);

    return (
        <div className="common_wrap">
            <div className={styles.login}>
                <div className={styles.title_box}>
                    <span className={styles.title}>ログインフォーム</span>
                </div>
                <form>
                    <div
                        className={styles.form_box}
                        // onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className={styles.input_frame}>
                            <p className={styles.input_label}>メールアドレス</p>
                            <input
                                type="text"
                                {...register("mail", {
                                    maxLength: { value: 120, message: "" },
                                })}
                            />
                        </div>
                        <div className={styles.input_frame}>
                            <p className={styles.input_label}>パスワード</p>
                            <input
                                type="text"
                                {...register("pass", {
                                    maxLength: { value: 10, message: "10文字を超えています" },
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
                /* 10分00秒 頃から参考に */
                // npm i  react-firebase-hooks
                // useAuthState
            }
        </div>
    );
};

export default LoginView;

// saetaku333@yahoo.co.jp
// test001
