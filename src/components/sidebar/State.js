import React, { useEffect, useState } from 'react'

export default function State({setStat}) {
    const [quantities, setQuantities] = useState({})
    useEffect(()=>{
        setQuantities ({
            WeldaQuantity: 12,
            OochraQuantity : 15,
            FerghaQuantity : 13,
        })
    },[]);
  return (
    //size
    <div className="card">
      <div className="card-heading">
          <a data-toggle="collapse" data-target="#collapseFour">Etat</a>
      </div>
      <div id="collapseFour" className="collapse show" data-parent="#accordionExample">
          <div className="card-body">
              <div className="shop__sidebar__size">
              <ul>
                    <li><a className="clickable-element" onClick={()=>setStat("Welda")}>Welda ({quantities?.WeldaQuantity})</a></li>
                    <li><a className="clickable-element" onClick={()=>setStat("Oochra")}>Oochra ({quantities?.OochraQuantity}) </a></li>
                    <li><a className="clickable-element" onClick={()=>setStat("Fergha")}>Fergha({quantities?.FerghaQuantity})</a></li>
                </ul>
              </div>
          </div>
      </div>
  </div>
  )
}
