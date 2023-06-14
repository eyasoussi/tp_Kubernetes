import React, { useEffect, useState } from 'react';
import './styles.css';
import State from './State';
import Price from './Price';
import Weight from './Weight';
import Type from './Type';
import Race from './Race';
import Age from './Age';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';


export default function Sidebar({ setAllFilters, articles }) {
  const [type, setType] = useState([]);
  const [race, setRace] = useState([]);
  const [price, setPrice] = useState([0, 1750]);
  const [weight, setWeight] = useState([0, 80]);
  const [age, setAge] = useState([]);
  const [stat, setStat] = useState([]);
  const [filters, setFilters] = useState({});
  const [isFilterOptionsVisible, setIsFilterOptionsVisible] = useState(false);

  useEffect(() => {
    if (articles === 'Ovin Engraissement') {
      setFilters({
        Race: true,
        Type: false,
        Prix: true,
        Poids: true,
        Age: true,
        State: false,
      });
    } else if (articles === 'Ovin B') {
      setFilters({
        Race: true,
        Type: false,
        Prix: true,
        Poids: false,
        Age: true,
        State: true,
      });
    } else if (articles === 'Poulaier Engraissement') {
      setFilters({
        Race: false,
        Type: true,
        Prix: true,
        Poids: true,
        Age: true,
        State: false,
      });
    } else {
      setFilters({
        Race: false,
        Type: true,
        Prix: true,
        Poids: false,
        Age: true,
        State: true,
      });
    }
  }, [articles]);

  useEffect(() => {
    setAllFilters({
      price: price,
      race: race,
      type: type,
      age: age,
      weight: weight,
      stat: stat,
    });
  }, [price, race, type, age, weight, stat]);

  const toggleFilterOptions = () => {
    setIsFilterOptionsVisible(!isFilterOptionsVisible);
  };

  return (
    <div>
      <div className="shop__sidebar__accordion">
        <div id="accordionExample">
        <button className="filter-button" onClick={toggleFilterOptions}>
            <FilterAltOutlinedIcon />
        </button>

          {isFilterOptionsVisible && (
            <div className="filter-options">
              {filters.Prix && <Price articles={articles} setPrice={setPrice} />}
              {filters.Race && <Race setRace={setRace} />}
              {filters.Type && <Type setType={setType} />}
              {filters.Age && <Age setAge={setAge} />}
              {filters.Poids && (
                <Weight articles={articles} setWeight={setWeight} />
              )}
              {filters.State && <State setStat={setStat} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
