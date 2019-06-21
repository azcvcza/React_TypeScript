import * as React from "react";
import '../css/Confirm.css'
interface IProps{
	title:string;
	content:string;
}
class Confirm extends React.Component<IProps> {
	
	public render() {
		return (<div className="confirm-wrapper confirm-visible">
			<div className="confirm-container">
				<div className="confirm-title-container">
					<span>{this.props.title}</span>
				</div>
				<div className="confirm-content-container">
					<p>{this.props.content}</p>
				</div>
				<div className="confirm-buttons-container">
					<button className="confirm-cancel">Cancel</button>
					<button className="confirm-ok">Okay</button>
				</div>
			</div>
		</div>
		);
	}
}
export default Confirm;
