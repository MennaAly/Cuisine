import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';
import '../css/FoodMenu.css';

import JustifyAlign64 from '../images/justify-align-64.png'
import JustifyAlign32 from '../images/justify-align-32.png'

const FoodMenu = ()=>{
  return (
    <div>
    <div class="btn-group menu-buttons" role="group" aria-label="Basic example">
              <button type="button" class="btn food-btn"><span>Food</span>
                <div class="triangle-up"></div>
              </button>
              <button type="button" class="btn ">Beverage</button>
              <button type="button" class="btn ">Marchandise</button>
              <button type="button" class="btn ">Meal</button>
              <button type="button" class="btn icon"><img src={JustifyAlign64}></img></button>
          </div>
          <div class="row food-menu">
            <div class="col">
              <p>Breads</p>
            </div>
            <div class="col">
              <p>Pastas</p>
            </div>
            <div class="col">
              <p>Pizzas</p>
            </div>
            <div class="col">
              <p>Soups</p>
            </div>
            <div class="col">
              <img src={JustifyAlign32} alt=""></img>
            </div>
          </div>
    </div>
    );
};

export default FoodMenu;