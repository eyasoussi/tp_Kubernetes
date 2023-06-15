import React, { useEffect, useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';

export default function Race({ setRace }) {
  const { language } = useContext(LanguageContext);
  const [quantities, setQuantities] = useState({});
  const [selectedRaces, setSelectedRaces] = useState([]); // to store the selected races
  const [isActive, setIsActive] = useState(true); //determines whether the race filter is currently active or not.

  const RaceTranslations = {
    "fr": {
      "Arbi": "Arbi",
      "Gharbi": "Gharbi",
      "Tibar": "Tibar",
      "Houti": "Houti",
      "Dmen": "Dmen",
      "Sordi": "Sordi",
      "Lacaune": "Lacaune",
      "Race": "Race"
    },
    "ar": {
      "Arbi": "عربي",
      "Gharbi": "غربي",
      "Tibar": "تيبار",
      "Houti": "حوتي",
      "Dmen": "دمن",
      "Sordi": "صوردي",
      "Lacaune": "لكاون",
      "Race": "السلالة"
    }
  }

  useEffect(() => {
    setQuantities({
      TibarQuantity: 12,
      GharbiQuantity: 15,
      HoutiQuantity: 13,
      DmenQuantity: 16,
      SordiQuantity: 18,
    });
  }, []);

  const toggleRace = (race) => {
    if (selectedRaces.includes(race)) {
      setSelectedRaces(selectedRaces.filter((selectedRace) => selectedRace !== race));
    } else {
      setSelectedRaces([...selectedRaces, race]);
    }
  }; //if the clickd race is already selected remove it from selectedRaces 
  //sinon put it in selectedRaces

  useEffect(() => {
    setRace(selectedRaces);
  }, [selectedRaces, setRace]);

  return (
    <div className={`card ${isActive ? 'active' : ''}`}>
      <div className="card-heading">
        <a onClick={() => setIsActive(!isActive)} className={`accordion-toggle ${isActive ? 'active' : ''}`}>
          {RaceTranslations[language]["Race"]}
          {isActive ? <ExpandLess /> : <ExpandMore />}
        </a>
      </div>
      <div className={`collapse ${isActive ? 'show' : ''}`} id="collapseThree">
        <div className="card-body">
          <div className="shop__sidebar__brand">
            <ul>
              <li>
                <a
                  className={`clickable-element ${selectedRaces.includes('Tibar') ? 'active' : ''}`}
                  //if 'Tibar' is selected, it will have both 'clickable-element' and 'active' classes; otherwise, it will only have the 'clickable-element' class.
                  onClick={() => toggleRace('Tibar')}
                  style={{
                    backgroundColor: selectedRaces.includes('Tibar') ? '#f5f5f5' : '',
                    color: selectedRaces.includes('Tibar') ? '#333' : '',
                  }}
                >
                  {RaceTranslations[language]["Tibar"]} ({quantities?.TibarQuantity})
                </a>
              </li>
              <li>
                <a
                  className={`clickable-element ${selectedRaces.includes('Gharbi') ? 'active' : ''}`}
                  onClick={() => toggleRace('Gharbi')}
                  style={{
                    backgroundColor: selectedRaces.includes('Gharbi') ? '#f5f5f5' : '',
                    color: selectedRaces.includes('Gharbi') ? '#333' : '',
                  }}
                >
                  {RaceTranslations[language]["Gharbi"]} ({quantities?.GharbiQuantity})
                </a>
              </li>
              <li>
                <a
                  className={`clickable-element ${selectedRaces.includes('Houti') ? 'active' : ''}`}
                  onClick={() => toggleRace('Houti')}
                  style={{
                    backgroundColor: selectedRaces.includes('Houti') ? '#f5f5f5' : '',
                    color: selectedRaces.includes('Houti') ? '#333' : '',
                  }}
                >
                  {RaceTranslations[language]["Houti"]} ({quantities?.HoutiQuantity})
                </a>
              </li>
              <li>
                <a
                  className={`clickable-element ${selectedRaces.includes('Dmen') ? 'active' : ''}`}
                  onClick={() => toggleRace('Dmen')}
                  style={{
                    backgroundColor: selectedRaces.includes('Dmen') ? '#f5f5f5' : '',
                    color: selectedRaces.includes('Dmen') ? '#333' : '',
                  }}
                >
                  {RaceTranslations[language]["Dmen"]} ({quantities?.DmenQuantity})
                </a>
              </li>
              <li>
                <a
                  className={`clickable-element ${selectedRaces.includes('Sordi') ? 'active' : ''}`}
                  onClick={() => toggleRace('Sordi')}
                  style={{
                    backgroundColor: selectedRaces.includes('Sordi') ? '#f5f5f5' : '',
                    color: selectedRaces.includes('Sordi') ? '#333' : '',
                  }}
                >
                  {RaceTranslations[language]["Sordi"]} ({quantities?.SordiQuantity})
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}