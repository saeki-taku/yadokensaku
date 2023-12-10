// react
import Image from "next/image";
// styles
import styles from "@/styles/hotel.module.scss";

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
