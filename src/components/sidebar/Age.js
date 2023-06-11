import React, { useState, useEffect } from 'react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

export default function Age({ setAge }) {
  const [isActive, setIsActive] = useState(true);
  const [selectedAges, setSelectedAges] = useState([]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const toggleAge = (age) => {
    if (selectedAges.includes(age)) {
      setSelectedAges(selectedAges.filter((selectedAge) => selectedAge !== age));
    } else {
      setSelectedAges([...selectedAges, age]);
    }
  };

  useEffect(() => {
    setAge(selectedAges);
  }, [selectedAges, setAge]);

  const isActiveAge = (age) => {
    return selectedAges.some((selectedAge) => selectedAge[0] === age[0] && selectedAge[1] === age[1]);
  };

  return (
    <div className={`card ${isActive ? 'active' : ''}`}>
      <div className="card-heading">
        <a onClick={toggle} className={`accordion-toggle ${isActive ? 'active' : ''}`}>
          Age
          {isActive ? <ExpandLess /> : <ExpandMore />}
        </a>
      </div>
      <div className={`collapse ${isActive ? 'show' : ''}`} id="collapseThree">
        <div className="card-body">
          <div className="shop__sidebar__price">
            <ul>
              <li>
                <a
                  className={`clickable-element ${isActiveAge([0, 0.5]) ? 'active' : ''}`}
                  onClick={() => toggleAge([0, 0.5])}
                  style={{
                    backgroundColor: isActiveAge([0, 0.5]) ? '#f5f5f5' : '',
                    color: isActiveAge([0, 0.5]) ? '#333' : '',
                  }}
                >
                  0 - 6 mois
                </a>
              </li>
              <li>
                <a
                  className={`clickable-element ${isActiveAge([0.5, 1]) ? 'active' : ''}`}
                  onClick={() => toggleAge([0.5, 1])}
                  style={{
                    backgroundColor: isActiveAge([0.5, 1]) ? '#f5f5f5' : '',
                    color: isActiveAge([0.5, 1]) ? '#333' : '',
                  }}
                >
                  6 mois - 1 an
                </a>
              </li>
              <li>
                <a
                  className={`clickable-element ${isActiveAge([1, 1.5]) ? 'active' : ''}`}
                  onClick={() => toggleAge([1, 1.5])}
                  style={{
                    backgroundColor: isActiveAge([1, 1.5]) ? '#f5f5f5' : '',
                    color: isActiveAge([1, 1.5]) ? '#333' : '',
                  }}
                >
                  1 an - 1 an & 6 mois
                </a>
              </li>
              <li>
                <a
                  className={`clickable-element ${isActiveAge([1.5, 2]) ? 'active' : ''}`}
                  onClick={() => toggleAge([1.5, 2])}
                  style={{
                    backgroundColor: isActiveAge([1.5, 2]) ? '#f5f5f5' : '',
                    color: isActiveAge([1.5, 2]) ? '#333' : '',
                  }}
                >
                  2 ans +
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
