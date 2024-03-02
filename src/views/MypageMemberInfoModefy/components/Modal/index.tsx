interface modalProps {
	onClose: any;
	changeText: string;
	isEmailChange: boolean;
}
// const Modal = ({ show, totalStars, initialStars, onChange, onAdd, onClose }: modalProps) => {
const Modal = ({ onClose, changeText = "", isEmailChange }: modalProps) => {
	return (
		<div id="overlay" className="modal_oberlay">
			<div id="modal_content" className="modal_content _memberModefy">
				<div className="modal_text_wrap ">
					{changeText.length > 0 && <span className="title">{changeText}の変更が完了しました。</span>}
					{isEmailChange && (
						<>
							<span className="title">新しく設定したメールアドレスにメールを送信しました。</span>
							<p className="text">メールアドレスの変更を完了するには認証が必要となるため届きましたメールをご確認ください。</p>
						</>
					)}
				</div>
				<button className="modal_btn" onClick={onClose}>
					閉じる
				</button>
			</div>
		</div>
	);
};

export default Modal;
