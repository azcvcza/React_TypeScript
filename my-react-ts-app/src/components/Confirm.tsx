import * as React from "react";
import '../css/Confirm.css'
class Confirm extends React.Component {
	
	public render() {
		return (<div className="confirm-wrapper confirm-visible">
			<div className="confirm-container">
				<div className="confirm-title-container">
					<span>React And TypeScript</span>
				</div>
				<div className="confirm-content-container">
					<p>This is where our content should go</p>
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
