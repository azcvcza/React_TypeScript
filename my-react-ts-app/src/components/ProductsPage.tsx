import * as React from 'react';
import { IProduct, products } from '../router/ProductsData';

interface IState {
	products: IProduct[];
}

class ProductsPage extends React.Component<{}, IState>{
	public constructor(props: {}) {
		super(props);
		this.state = {
			products: []
		}
	}
	public componentDidMount() {
		this.setState({ products })
	}
	public render() {
		return (<div className="page-container">
			<p>Welcome to React Router</p>
			<ul className="product-list">
				{this.state.products.map(product => (
					<li key={product.id} className="product-list-item">
						<h4>Name:{product.name}</h4>						
						<h5>Descrption:{product.description}</h5>						
						<h5>Price:{product.price}</h5>						
					</li>
				))}
			</ul>
		</div>)
	}
}

export default ProductsPage
