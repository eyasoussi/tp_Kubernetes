import React, { useEffect, useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';


export default function Type({ setType }) {
  const { language } = useContext(LanguageContext);
  const [quantities, setQuantities] = useState({});
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setQuantities({
      DjejQuantity: 12,
      DindonQuantity: 15,
      OeufQuantity: 13,
      SimmenQuantity: 16,
    });
  }, []);

  const toggleType = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((selectedType) => selectedType !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  useEffect(() => {
    setType(selectedTypes);
  }, [selectedTypes, setType]);

  const isTypeSelected = (type) => selectedTypes.includes(type);

  return (
    <div className={`card ${isActive ? 'active' : ''}`}>
      <div className="card-heading">
        <a onClick={() => setIsActive(!isActive)} className={`accordion-toggle ${isActive ? 'active' : ''}`}>
        {language==="fr" ? "Type" : "النوع"}
          {isActive ? <ExpandLess /> : <ExpandMore />}
        </a>
      </div>
      <div className={`collapse ${isActive ? 'show' : ''}`} id="collapseThree">
        <div className="card-body">
          <div className="shop__sidebar__brand">
            <ul>
              <li>
                <a
                  className={`clickable-element ${isTypeSelected('Djej') ? 'active' : ''}`}
                  onClick={() => toggleType('Djej')}
                  style={{
                    backgroundColor: isTypeSelected('Djej') ? '#f5f5f5' : '',
                    color: isTypeSelected('Djej') ? '#333' : '',
                  }}
                >
                 {language==="fr" ? "Djej" : "دجاج"}  - {quantities?.DjejQuantity}
                </a>
              </li>
              <li>
                <a
                  className={`clickable-element ${isTypeSelected('Dindon') ? 'active' : ''}`}
                  onClick={() => toggleType('Dindon')}
                  style={{
                    backgroundColor: isTypeSelected('Dindon') ? '#f5f5f5' : '',
                    color: isTypeSelected('Dindon') ? '#333' : '',
                  }}
                >
                  {language==="fr" ? "Dindon" : "ديك رومي"} - {quantities?.DindonQuantity}
                </a>
              </li>
              <li>
                <a
                  className={`clickable-element ${isTypeSelected('Simmen') ? 'active' : ''}`}
                  onClick={() => toggleType('Simmen')}
                  style={{
                    backgroundColor: isTypeSelected('Simmen') ? '#f5f5f5' : '',
                    color: isTypeSelected('Simmen') ? '#333' : '',
                  }}
                >
                  {language==="fr" ? "Simmen" : "سمان"} - {quantities?.SimmenQuantity}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
