import * as React from "react";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import AdminPage from "../components/AdminPage";
import ProductsPage from "../components/ProductsPage";
const Routes: React.SFC = () => {
	return (
		<Router>
			<div>
				<p>get here</p>
				<Link to="/products">Product</Link>
				<Link to="/admin">Admin</Link>
			</div>
		</Router>
	);
};
export default Routes;
