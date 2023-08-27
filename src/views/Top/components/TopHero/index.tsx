// react / next
import Image from "next/image";
// styles
import styles from "@/styles/home.module.scss";
// libs
import { useForm, FormProvider } from "react-hook-form";
// components
import FormArea from "../FormArea";

export default function TopHero() {
    // const methods = useForm({
    //     mode: "onChange",
    // });

    return (
        <div className={styles.hero}>
            <figure style={{ position: "relative", width: "100%", height: "400px" }}>
                <Image
                    alt=""
                    src="/img/top/hero.jpg"
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                />
            </figure>
            <FormArea />
        </div>
    );
}
