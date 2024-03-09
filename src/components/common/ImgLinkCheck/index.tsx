import Image from "next/image";
import { useState } from "react";

interface ImgLinkCheckProps {
	link: string;
	width: number;
	height: number;
	alt: string;
}

const ImgLinkCheck = ({ link, width, height, alt = "" }: ImgLinkCheckProps) => {
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
					width={width}
					height={height}
					style={{
						width: "100%",
						height: "auto",
					}}
				/>
			) : (
				<Image
					src={link}
					alt={alt}
					width={width}
					height={height}
					sizes="100vw"
					style={{
						width: "100%",
						height: "auto",
					}}
					onError={handleImageError}
				/>
			)}
		</>
	);
};

export default ImgLinkCheck;
