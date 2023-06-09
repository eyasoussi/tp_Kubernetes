import React from 'react'
import { useEffect, useState } from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material';

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
                    Type
                    {isActive ? <ExpandLess /> : <ExpandMore />}
                </a>
            </div>
            <div className={`collapse ${isActive ? 'show' : ''}`} id="collapseThree">
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
