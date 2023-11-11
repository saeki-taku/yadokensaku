// react
import Image from "next/image";
// styles
import styles from "@/styles/hotel.module.scss";
// lib
// 今回は画像が1枚しか取得できない為、無し
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";

const InfoHeroImg = ({ hotelBasicInfo }: ANY_OBJECT) => {
    return (
        <div className={styles.hotelImg_wrap}>
            <Image
                src={hotelBasicInfo.hotelImageUrl}
                alt=""
                width={1200}
                height={800}
                // onError={handleImageError}
            />
        </div>
    );
};

export default InfoHeroImg;
