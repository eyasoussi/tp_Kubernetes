import React, { useState } from 'react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

export default function Age({setAge}) {
    const [isActive, setIsActive] = useState(true);

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
                    Age
                    {isActive ? <ExpandLess /> : <ExpandMore />}
                </a>
            </div>
            <div className={`collapse ${isActive ? 'show' : ''}`} id="collapseThree">
                <div className="card-body">
                    <div className="shop__sidebar__price">
                        <ul>
                            <li>
                                <a className="clickable-element" onClick={()=>setAge([0,0.5])}>0 - 6mois</a>
                            </li>
                            <li>
                                <a className="clickable-element" onClick={()=>setAge([0.5,1])}>6mois - 1ans</a>
                            </li>
                            <li>
                                <a className="clickable-element" onClick={()=>setAge([1,1.5])}>1an - 1an & 6mois</a>
                            </li>
                            <li>
                                <a className="clickable-element" onClick={()=>setAge([1.5,2])}>2ans+</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
