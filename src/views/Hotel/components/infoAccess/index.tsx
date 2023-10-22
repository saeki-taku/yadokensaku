import Image from "next/image";
// styles
import styles from "@/styles/hotel.module.scss";

const InfoAccess = ({ hotelBasicInfo }: ANY_OBJECT) => {
    return (
        <div className={styles.access}>
            <h3 className={styles.info_title}>アクセス</h3>
            <div className={styles.access__wrap}>
                <div className={styles.text_box}>
                    <ul className={styles.info_list}>
                        <li className={styles.address}>
                            <span className={styles.title}>住所</span>
                            <div className={styles.box}>
                                <span className={styles.yubin}>〒{hotelBasicInfo.postalCode}</span>
                                <span>
                                    {hotelBasicInfo.address1}
                                    {hotelBasicInfo.address2}
                                </span>
                            </div>
                        </li>
                        <li>
                            <span className={styles.title}>アクセス</span>
                            {hotelBasicInfo.access}
                        </li>
                        <li>
                            <span className={styles.title}>最寄駅</span>
                            {hotelBasicInfo.nearestStation}駅
                        </li>
                        <li>
                            <span className={styles.title}>駐車場</span>
                            {hotelBasicInfo.parkingInformation}
                        </li>
                    </ul>
                </div>
                <div className={styles.img_box}>
                    <Image
                        src={hotelBasicInfo.hotelMapImageUrl}
                        alt=""
                        width={500}
                        height={300}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default InfoAccess;
