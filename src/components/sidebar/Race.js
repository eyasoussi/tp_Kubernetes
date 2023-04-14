import React from 'react'

export default function Race() {
  return (
    //branding
    <div class="card">
    <div class="card-heading">
        <a data-toggle="collapse" data-target="#collapseTwo">Branding</a>
    </div>
    <div id="collapseTwo" class="collapse show" data-parent="#accordionExample">
        <div class="card-body">
            <div class="shop__sidebar__brand">
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
