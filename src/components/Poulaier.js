import React from 'react'
import Sidebar from './sidebar/Sidebar';
import Search from './sidebar/Search';
import MainShop from './main-shop/MainShop';

export default function Poulaier() {
  return (
    <div class="row">
        <div class="col-lg-3"> 
            <div class="shop__sidebar"> 
                <Search/>
                <Sidebar/>     
            </div>
        </div>
        <div class="col-lg-9">
            <div class="shop__product__option">
                <MainShop/>
            </div>  
        </div>
    </div>
  )
}
