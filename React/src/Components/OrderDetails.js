import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';
import '../css/OrderDetails.css';

import FlashIcon from '../images/flash-icon.png'
import DeleteIcon from '../images/delete-icon.png'
import PercentageIcon from '../images/percentage-icon.png'
import ClockIcon from '../images/clock-icon.png'
import DollarIcon from '../images/dollar-icon.png'

const OrderDetails = ()=>{
  return(
  	<div>
  	<div class="row order-info">
            <p>Qty</p>
            <p>Item</p>
            <p>Size</p>
            <p>Each</p>
            <p>Total</p>
          </div>
          <div class="table-order-info">
            <p>No Items currently in Order</p>
          </div>
  	<div class="add-items">
            <button type="button" name="button" class="btn btn-default btn-circle justify-content-center align-items-center fa fa-plus"></button>
            <div class="row bill">
              <div class="col-4">
                <button type="button" name="button" class="btn btn-default btn-circle justify-content-center
                 align-items-center"><img src={FlashIcon}></img><span>Fast cash</span></button>
              </div>
              <div class="col-3 bill-info">
                <p>Discounts: 0.00</p>
                <p>Subcharges: 0.00</p>
                <p>Tax: 0.00</p>
              </div>
              <div class="col-5 cach-info">
                <p>Total: 50.00</p>
                <p>Balance due:  50.00</p>
              </div>
            </div>
          </div>
  	 <div class="row options">
            <div class="col">
              <button type="button" name="button" class="btn btn-default btn-circle justify-content-center align-items-center"><img src={DeleteIcon}></img><span>Cancel</span><span> Order</span></button>
            </div>
            <div class="col ">
              <button type="button" name="button" class="btn btn-default btn-circle justify-content-center
               align-items-center"><img src={PercentageIcon}></img><span>Disocunt</span><span> Order</span></button>
            </div>
            <div class="col">
              <button type="button" name="button" class="btn btn-default btn-circle justify-content-center
               align-items-center"><img src={ClockIcon}></img><span>Hold Order</span></button>
            </div>
            <div class="col">
              <button type="button" name="button" class="btn btn-default btn-circle justify-content-center
               align-items-cente dollar"><img src={DollarIcon} ></img><span>Pay</span></button>
            </div>
          </div>
    </div>
  	);
};

export default OrderDetails;