import React from 'react'
import Card from './Card'

export default function MainShop() {
  return (
    <div>
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="shop__product__option__left">
                <p>Showing 1–12 of 126 results</p>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="shop__product__option__right">
                <p>Sort by Price:</p>
                <select>
                    <option value="">Low To High</option>
                    <option value="">$0 - $55</option>
                    <option value="">$55 - $100</option>
                </select>
            </div>
        </div>
    </div>                
    <div className="row">
        <Card/>
    </div>
    <div className="row">
        <div className="col-lg-12">
            <div className="product__pagination">
                <a className="active" href="#">1</a>
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
