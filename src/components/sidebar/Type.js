import React from 'react'
import { useEffect, useState } from 'react'

export default function Type({setType}) {
    const [quantities, setQuantities] = useState({})
    useEffect(()=>{
        setQuantities ({
            DjejQuantity: 12,
            DindonQuantity : 15,
            OeufQuantity : 13,
            SimmenQuantity : 16,
        })
    },[]);
  return (
    //branding
    <div className="card">
    <div className="card-heading">
        <a data-toggle="collapse" data-target="#collapseTwo">Type de Poulaier</a>
    </div>
    <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
        <div className="card-body">
            <div className="shop__sidebar__brand">
                <ul>
                    <li><a className="clickable-element" onClick={()=>setType("Djej")}>Djej ({quantities?.DjejQuantity})</a></li>
                    <li><a className="clickable-element" onClick={()=>setType("Dindon")}>Dindon ({quantities?.DindonQuantity}) </a></li>
                    <li><a className="clickable-element" onClick={()=>setType("Oeuf")}>Oeuf ({quantities?.OeufQuantity})</a></li>
                    <li><a className="clickable-element" onClick={()=>setType("Simmen")}>Simmen({quantities?.SimmenQuantity})</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}
