import * as React from "react";
import '../css/Confirm.css'
interface IProps {
	open: boolean;
	title: string;
	content: string;
	cancelCaption?: string;
	okCaption?: string;
	onCancelClick: () => void;
	onOkClick: () => void;
}
const Confirm: React.SFC<IProps> = (props) => {
	const [cancelClickCount, setCancelClickCount] = React.useState(0);
	React.useEffect(() => {
		console.log("Confirm first rendering");
		return () => {``
			console.log("Confirm unmounted");
		};
	}, []);

	const handleCancelClick = () => {
		const newCount = cancelClickCount + 1;
		setCancelClickCount(newCount);
		if (newCount >= 2) {
			props.onCancelClick();
		}

	}
	const handleOkClick = () => {
		props.onOkClick();
	}

	return (<div className={props.open ? "confirm-wrapper confirm-visible" : "confirm-wrapper"}>
		<div className="confirm-container">
			<div className="confirm-title-container">
				<span>{props.title}</span>
			</div>
			<div className="confirm-content-container">
				<p>{props.content}</p>
			</div>

			<div className="confirm-buttons-container">
				<button className="confirm-cancel" onClick={handleCancelClick}>
					{cancelClickCount === 0 ? props.cancelCaption : "Really?"}
				</button>
				<button className="confirm-ok" onClick={handleOkClick}>{props.okCaption}</button>
			</div>
		</div>
	</div>
	);

}
Confirm.defaultProps = {
	cancelCaption: "Cancel",
	okCaption: "Okay"
}

export default Confirm;
