import React, { useState } from 'react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

export default function Age() {
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
                    Age
                    {isActive ? <ExpandLess /> : <ExpandMore />}
                </a>
            </div>
            <div className={`collapse ${isActive ? 'show' : ''}`} id="collapseThree">
                <div className="card-body">
                    <div className="shop__sidebar__price">
                        <ul>
                            <li>
                                <a href="#">$0.00 - $50.00</a>
                            </li>
                            <li>
                                <a href="#">$50.00 - $100.00</a>
                            </li>
                            <li>
                                <a href="#">$100.00 - $150.00</a>
                            </li>
                            <li>
                                <a href="#">$150.00 - $200.00</a>
                            </li>
                            <li>
                                <a href="#">$200.00 - $250.00</a>
                            </li>
                            <li>
                                <a href="#">250.00+</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
