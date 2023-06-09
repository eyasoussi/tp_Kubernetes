import React from 'react'
import { useEffect, useState } from 'react'

export default function Race({setRace}) {
    const [quantities, setQuantities] = useState({})
    useEffect(()=>{
        setQuantities ({
            TubarQuantity: 12,
            GharbiQuantity : 15,
            HoutiQuantity : 13,
            DmenQuantity : 16,
            SordiQuantity : 18,
        })
    },[]);
  return (
    //branding
    <div className="card">
    <div className="card-heading">
        <a data-toggle="collapse" data-target="#collapseTwo">Race</a>
    </div>
    <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
        <div className="card-body">
            <div className="shop__sidebar__brand">
                <ul>
                    <li><a className="clickable-element" onClick={()=>setRace("Men")}>Tubar ({quantities?.TubarQuantity})</a></li>
                    <li><a className="clickable-element" onClick={()=>setRace("Women")}>Gharbi ({quantities?.GharbiQuantity}) </a></li>
                    <li><a className="clickable-element" onClick={()=>setRace("Bags")}>Houti ({quantities?.HoutiQuantity})</a></li>
                    <li><a className="clickable-element" onClick={()=>setRace("Clothing")}>Dmen ({quantities?.DmenQuantity})</a></li>
                    <li><a className="clickable-element" onClick={()=>setRace("Shoes")}>Sordi ({quantities?.SordiQuantity})</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}
