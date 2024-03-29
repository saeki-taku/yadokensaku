import Image from "next/image";
import { useState } from "react";

const ImgLinkCheck = ({ link }: any) => {
	const [hasError, setHasError] = useState(false);

	const handleImageError = () => {
		setHasError(true);
	};

	return (
		<>
			{hasError ? (
				<Image
					src="/img/noimage.jpg"
					alt=""
					width={1000}
					height={750}
					style={{
						width: "100%",
						height: "auto",
					}}
					priority
				/>
			) : (
				<Image
					src={link}
					alt=""
					width={1000}
					height={750}
					sizes="100vw"
					style={{
						width: "100%",
						height: "auto",
					}}
					priority
					onError={handleImageError}
				/>
			)}
		</>
	);
};

export default ImgLinkCheck;
