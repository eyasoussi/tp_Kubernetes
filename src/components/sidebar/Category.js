import React from 'react'

export default function Category() {
  return (
    //category
    <div class="card">
        <div class="card-heading">
            <a data-toggle="collapse" data-target="#collapseOne">Categories</a>
        </div>
        <div id="collapseOne" class="collapse show" data-parent="#accordionExample">
            <div class="card-body">
                <div class="shop__sidebar__categories">
                    <ul class="nice-scroll">
                        <li><a href="#">Men (20)</a></li>
                        <li><a href="#">Women (20)</a></li>
                        <li><a href="#">Bags (20)</a></li>
                        <li><a href="#">Clothing (20)</a></li>
                        <li><a href="#">Shoes (20)</a></li>
                        <li><a href="#">Accessories (20)</a></li>
                        <li><a href="#">Kids (20)</a></li>
                        <li><a href="#">Kids (20)</a></li>
                        <li><a href="#">Kids (20)</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
