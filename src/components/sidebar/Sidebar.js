import React, { useEffect, useState, useRef } from 'react';
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

  const sidebarRef = useRef(null); // Ref for the outermost div container

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setIsFilterOptionsVisible(false);
      } else {
        setIsFilterOptionsVisible(true);
      }
    };

    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.classList.contains('filter-button')
      ) {
        setIsFilterOptionsVisible(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Add event listener for clicks outside the filter options
    document.addEventListener('mousedown', handleClickOutside);

    // Check initial window width on component mount
    handleResize();

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleFilterOptions = () => {
    setIsFilterOptionsVisible(!isFilterOptionsVisible);
  };

  return (
    <div ref={sidebarRef} className="shop__sidebar__accordion">
      <div id="accordionExample">
        {window.innerWidth < 992 && (
          <button
            className={`filter-button ${isFilterOptionsVisible ? 'clicked' : ''}`}
            onClick={toggleFilterOptions}
          >
            Filtrer<FilterAltOutlinedIcon />
          </button>
        )}
        {(isFilterOptionsVisible || window.innerWidth >= 992) && (
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
  );
}
