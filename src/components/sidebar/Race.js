import React from 'react'
import { useEffect, useState } from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export default function Race({setRace}) {
    const [quantities, setQuantities] = useState({})
    useEffect(()=>{
        setQuantities ({
            TibarQuantity: 12,
            GharbiQuantity : 15,
            HoutiQuantity : 13,
            DmenQuantity : 16,
            SordiQuantity : 18,
        })
    },[]);
    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`card ${isActive ? 'active' : ''}`}>
            <div className="card-heading">
                <a
                    onClick={toggle}
                    className={`accordion-toggle ${isActive ? 'active' : ''}`}
                >
                    Race
                    {isActive ? <ExpandLess /> : <ExpandMore />}
                </a>
            </div>
            <div className={`collapse ${isActive ? 'show' : ''}`} id="collapseThree">
        <div className="card-body">
            <div className="shop__sidebar__brand">
                <ul>
                    <li><a className="clickable-element" onClick={()=>setRace("Tibar")}>Tibar ({quantities?.TibarQuantity})</a></li>
                    <li><a className="clickable-element" onClick={()=>setRace("Gharbi")}>Gharbi ({quantities?.GharbiQuantity}) </a></li>
                    <li><a className="clickable-element" onClick={()=>setRace("Houti")}>Houti ({quantities?.HoutiQuantity})</a></li>
                    <li><a className="clickable-element" onClick={()=>setRace("Dmen")}>Dmen ({quantities?.DmenQuantity})</a></li>
                    <li><a className="clickable-element" onClick={()=>setRace("Sordi")}>Sordi ({quantities?.SordiQuantity})</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}
