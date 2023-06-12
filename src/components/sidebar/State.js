import React, { useEffect, useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export default function State({ setStat }) {
  const [quantities, setQuantities] = useState({});
  const [selectedStates, setSelectedStates] = useState([]);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setQuantities({
      WeldaQuantity: 12,
      OochraQuantity: 15,
      FerghaQuantity: 13,
    });
  }, []);

  const toggleState = (state) => {
    if (selectedStates.includes(state)) {
      setSelectedStates(selectedStates.filter((selectedState) => selectedState !== state));
    } else {
      setSelectedStates([...selectedStates, state]);
    }
  };

  useEffect(() => {
    setStat(selectedStates);
  }, [selectedStates, setStat]);

  return (
    <div className={`card ${isActive ? 'active' : ''}`}>
      <div className="card-heading">
        <a onClick={() => setIsActive(!isActive)} className={`accordion-toggle ${isActive ? 'active' : ''}`}>
          Etat
          {isActive ? <ExpandLess /> : <ExpandMore />}
        </a>
      </div>
      <div className={`collapse ${isActive ? 'show' : ''}`} id="collapseThree">
        <div className="card-body">
          <div className="shop__sidebar__brand">
            <ul>
              <li>
                <a
                  className={`clickable-element ${selectedStates.includes('Welda') ? 'active' : ''}`}
                  onClick={() => toggleState('Welda')}
                  style={{
                    backgroundColor: selectedStates.includes('Welda') ? '#f5f5f5' : '',
                    color: selectedStates.includes('Welda') ? '#333' : '',
                  }}
                >
                  Welda ({quantities?.WeldaQuantity})
                </a>
              </li>
              <li>
                <a
                  className={`clickable-element ${selectedStates.includes('Oochra') ? 'active' : ''}`}
                  onClick={() => toggleState('Oochra')}
                  style={{
                    backgroundColor: selectedStates.includes('Oochra') ? '#f5f5f5' : '',
                    color: selectedStates.includes('Oochra') ? '#333' : '',
                  }}
                >
                  Oochra ({quantities?.OochraQuantity})
                </a>
              </li>
              <li>
                <a
                  className={`clickable-element ${selectedStates.includes('Fergha') ? 'active' : ''}`}
                  onClick={() => toggleState('Fergha')}
                  style={{
                    backgroundColor: selectedStates.includes('Fergha') ? '#f5f5f5' : '',
                    color: selectedStates.includes('Fergha') ? '#333' : '',
                  }}
                >
                  Fergha ({quantities?.FerghaQuantity})
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
