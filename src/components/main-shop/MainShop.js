import React from 'react'
import Card from './Card'

export default function MainShop() {
  return (
    <div>
        <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="shop__product__option__left">
                <p>Showing 1–12 of 126 results</p>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="shop__product__option__right">
                <p>Sort by Price:</p>
                <select>
                    <option value="">Low To High</option>
                    <option value="">$0 - $55</option>
                    <option value="">$55 - $100</option>
                </select>
            </div>
        </div>
    </div>                
    <div class="row">
        <Card/>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="product__pagination">
                <a class="active" href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <span>...</span>
                <a href="#">21</a>
            </div>
        </div>
    </div>
    </div>
    
  )
}
