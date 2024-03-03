interface modalProps {
	onClose: any;
}

const Modal = ({ onClose }: modalProps) => {
	return (
		<div id="overlay" className="modal_oberlay">
			<div id="modal_content" className="modal_content _memberModefy">
				<div className="modal_text_wrap ">
					<span className="title">ご登録のメールアドレスにメールを送信しました。</span>
					<p className="text">届いたメールからパスワードの変更をお願いします。</p>
				</div>
				<button className="modal_btn" onClick={onClose}>
					閉じる
				</button>
			</div>
		</div>
	);
};

export default Modal;
