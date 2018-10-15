import React, { Component } from 'react';
import '../css/FoodMenu.css';
import '../css/SearchBar.css'

import Navbar from '../Components/Navbar'
import CustomerAndCashier from '../Components/CustomerAndCashier'
import OrderDetails from '../Components/OrderDetails' 
import SearchBar from '../Components/SearchBar'
import FoodMenu from '../Components/FoodMenu'
import PastaMenu from '../Components/PastaMenu'

class Cuisineitem extends Component{
	render(){	return(
		<div class="container-fluid">
        		<Navbar />
        		<div class="row">
                        	<div class="col-5 first-part">
                        		<CustomerAndCashier />
                        		<OrderDetails />
                        	</div>
                        	<div class="row-7 second-part">
                        		<SearchBar />
                        		<div class="menu">   
                                         <FoodMenu />
                                         <PastaMenu/>
                                        </div>
                        	</div>
                        </div>
		</div>

		);
	}
}
export default Cuisineitem;