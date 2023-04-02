// react / next
import Image from "next/image";
// styles
import styles from "@/styles/home.module.scss";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function TopHero() {
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
            <form className="common_search top">
                <input
                    className="input_text"
                    type="text"
                    placeholder="宿を検索する"
                />
                <div className="input_btn">
                    <input
                        type="submit"
                        value=""
                    />
                    <FontAwesomeIcon
                        className="input_btn_icon"
                        icon={faMagnifyingGlass}
                        style={{ color: "#ffffff" }}
                        size="lg"
                    />
                </div>
            </form>
        </div>
    );
}
