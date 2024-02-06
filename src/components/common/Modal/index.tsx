// react
import { log } from "console";
import { useEffect, useState } from "react";
// lib
import ReactStarsRating from "react-awesome-stars-rating";

const Modal = (show: any) => {
	// const [show, setShow] = useState(false);

	const [value, setValue] = useState(3);
	const onChange = (value: number) => {
		setValue(value);
	};

	console.log("star", value);

	if (show) {
		return (
			<div id="overlay" className="modal_oberlay">
				<div id="modal_content" className="modal_content _star">
					<div className="modal_tile">「行ったことある」を評価する</div>
					<ReactStarsRating className="star_icon" onChange={onChange} size={25} value={value} />
					<button className="modal_btn">追加</button>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default Modal;
