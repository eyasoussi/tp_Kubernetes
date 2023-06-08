import React from 'react'

export default function Weight() {
  return (
    //price 
    <div className="card">
        <div className="card-heading">
            <a data-toggle="collapse" data-target="#collapseThree">Filter Price</a>
        </div>
        <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
            <div className="card-body">
                <div className="shop__sidebar__price">
                    <ul>
                        <li><a href="#">$0.00 - $50.00</a></li>
                        <li><a href="#">$50.00 - $100.00</a></li>
                        <li><a href="#">$100.00 - $150.00</a></li>
                        <li><a href="#">$150.00 - $200.00</a></li>
                        <li><a href="#">$200.00 - $250.00</a></li>
                        <li><a href="#">250.00+</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
