import * as React  from 'react';
import {IProduct,products} from '../router/ProductsData';

interface IState{
	products:IProduct[];
}

class ProductsPage extends React.Component<{},IState>{
	public constructor(props:{}){
		super(props);
		this.state={
			products:[]
		}
	}
}

export default ProductsPage
