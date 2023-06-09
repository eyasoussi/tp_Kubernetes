import React, { useEffect, useState } from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export default function State({ setStat }) {
    const [quantities, setQuantities] = useState({})
    useEffect(() => {
        setQuantities({
            WeldaQuantity: 12,
            OochraQuantity: 15,
            FerghaQuantity: 13,
        })
    }, []);
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
                    Etat
                    {isActive ? <ExpandLess /> : <ExpandMore />}
                </a>
            </div>
            <div className={`collapse ${isActive ? 'show' : ''}`} id="collapseThree">
                <div className="card-body">
                    <div className="shop__sidebar__brand">
                        <ul>
                            <li><a className="clickable-element" onClick={() => setStat("Welda")}>Welda ({quantities?.WeldaQuantity})</a></li>
                            <li><a className="clickable-element" onClick={() => setStat("Oochra")}>Oochra ({quantities?.OochraQuantity}) </a></li>
                            <li><a className="clickable-element" onClick={() => setStat("Fergha")}>Fergha({quantities?.FerghaQuantity})</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}