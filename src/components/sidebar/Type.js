import React from 'react'

export default function Type() {
  return (
    //branding
    <div className="card">
    <div className="card-heading">
        <a data-toggle="collapse" data-target="#collapseTwo">Branding</a>
    </div>
    <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
        <div className="card-body">
            <div className="shop__sidebar__brand">
                <ul>
                    <li><a href="#">Louis Vuitton</a></li>
                    <li><a href="#">Chanel</a></li>
                    <li><a href="#">Hermes</a></li>
                    <li><a href="#">Gucci</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}
