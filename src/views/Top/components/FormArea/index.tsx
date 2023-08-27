// react / next
import Image from "next/image";
// styles
import styles from "@/styles/home.module.scss";
// libs
import { useForm, useFormContext } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// hooks
import { useRoute } from "@/hooks/useRoute";

export default function FormArea() {
    const router = useRoute();
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm();

    const onSubmit = (data: ANY_OBJECT) => {
        console.log("data__", data.keyword);
        // console.log("value__", getValues());
        // https://www.react-hook-form.com/api/useform/getvalues/

        if (data.keyword) {
            router.push({
                pathname: "/search",
                query: {
                    keyword: data.keyword,
                },
            });
        } else {
            router.push({
                pathname: "/",
            });
        }
    };

    const message = errors?.keyword?.message?.toString();

    return (
        <div className={styles.form_area}>
            <form
                className="common_search top"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    {...register("keyword", {
                        // required: "未入力です",
                        maxLength: { value: 10, message: "（仮）10文字以内で入力してください" },
                    })}
                    className="input_text"
                    type="text"
                    placeholder="宿を検索する"
                />
                <div className="input_btn">
                    <input type="submit" />
                    <FontAwesomeIcon
                        className="input_btn_icon"
                        icon={faMagnifyingGlass}
                        style={{ color: "#ffffff" }}
                        size="lg"
                    />
                </div>
            </form>
            {message && <p className="error">{message}</p>}
        </div>
    );
}
