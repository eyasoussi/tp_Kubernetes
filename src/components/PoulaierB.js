import React from 'react'
import Sidebar from './sidebar/Sidebar';
import Search from './sidebar/Search';
import MainShop from './main-shop/MainShop';

export default function PoulaierB() {
  return (
    <div className="row">
        <div className="col-lg-3"> 
            <div className="shop__sidebar"> 
                <Search/>
                <Sidebar articles={"Poulaier B"}/>     
            </div>
        </div>
        <div className="col-lg-9">
            <div className="shop__product__option">
                <MainShop/>
            </div>  
        </div>
    </div>
  )
}
