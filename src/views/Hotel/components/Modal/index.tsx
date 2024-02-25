// react
import { useEffect, useState } from "react";
import Image from "next/image";

interface modalProps {
	show: boolean;
	totalStars: number;
	initialStars: number;
	onChange?: (newRating: number) => void;
	onAdd: any;
	onClose: any;
}

const Modal = ({ show, totalStars, initialStars, onChange, onAdd, onClose }: modalProps) => {
	const [rating, setRating] = useState(initialStars || 0);

	const handleStarClick = (newRating: number) => {
		setRating(newRating);
		onChange && onChange(newRating);
	};

	if (show) {
		return (
			<div id="overlay" className="modal_oberlay">
				<div id="modal_content" className="modal_content _star">
					<div className="modal_title">「行ったことある」を記録する</div>
					<div className="star_wrap">
						{/* オブジェクトリテラル { length: totalStars } */}
						{/* 参考：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from#%E3%82%A2%E3%83%AD%E3%83%BC%E9%96%A2%E6%95%B0%E3%81%A8_array.from_%E3%81%AE%E4%BD%BF%E7%94%A8 */}
						{Array.from({ length: totalStars }).map((noneValue, index) => {
							return (
								<Image
									key={index}
									src={index < rating ? "/img/icon/star.png" : "/img/icon/star_gray.png"}
									alt="star"
									width={22}
									height={22}
									onClick={() => handleStarClick(index + 1)}
								/>
							);
						})}
					</div>
					{/* <ReactStarsRating /> */}
					<button className="modal_btn" onClick={() => onAdd(rating)}>
						追加
					</button>
					<button className="close_btn" onClick={onClose}></button>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default Modal;
