import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/CustomerAndCashier.css';

const CustomerAndCashier = ()=>{
	return(
		<div>
		<div class="row date-hour">
            <div class="col">
             <p>Date: 16/07/2018</p>
            </div>
            <div class="col">
                <p>Hour: 12:53:31 PM</p>
            </div>
            <div class="col">
              <p>Manimum Charge: 0.00</p>
            </div>
          </div>
          <div class="row cachier-customer-info">
            <div class="col">
              <p><span>Takeaway #100</span><br/>Cachier: Ahmed Solem</p>
            </div>
            <div class="col">
              <button type="button" name="button">Customer Name</button>
            </div>
          </div>
         </div>
		);
};

export default CustomerAndCashier;