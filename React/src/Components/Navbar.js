import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/navbar.css';
import cuisinelogo from '../images/cuisinelogo.png'

const Navbar = (props)=>{
  return(
    <nav class="nav-bar">
      <div class="row">
        <div class="col-5">
          <img src={cuisinelogo} alt="" class="col-6 resize-img"></img>
        </div>
        <div class="col-7 nav-bar-buttons">
          <div class="row">
            <div class="col">
              <p>Business Day/shift</p>
            </div>
            <div class="col">
              <select class="select-mode">
                <option value="takeaway">MODE:Takeaway</option>
              </select>
            </div>
            <div class="col">
              <button type="button" name="button" class="button-deocrator">Orders Queue</button>
            </div>
            <div class="col">
              <button type="button" name="button" class="button-deocrator">Amdin</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;