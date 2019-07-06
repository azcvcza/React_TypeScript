import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AdminPage from "../components/AdminPage";
import ProductsPage from "../components/ProductsPage";
const Routes: React.SFC = () => {
	return (
		<Router>
			<div>
				<p>get here</p>
				<div className="nav_container"><ul className="nav">
					<li>
						<Link to="/admin">About</Link>
					</li>
					<li>
						<Link to="/products">Topics</Link>
					</li>
				</ul></div>
				<ul>
					<li><Route path="/admin" component={AdminPage} /></li>
					<li> <Route path="/products" component={ProductsPage} /></li>
				</ul>
			</div>
		</Router>
	);
};
export default Routes;
