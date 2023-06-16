import React, { useEffect, useState, useRef } from 'react';
import './styles.css';
import State from './State';
import Price from './Price';
import Weight from './Weight';
import Type from './Type';
import Race from './Race';
import Age from './Age';
import Search from './Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';

export default function Sidebar({ setAllFilters, articles }) {
  const { language } = useContext(LanguageContext);
  const [type, setType] = useState([]);
  const [race, setRace] = useState([]);
  const [price, setPrice] = useState([0, 1750]);
  const [weight, setWeight] = useState([0, 80]);
  const [age, setAge] = useState([]);
  const [stat, setStat] = useState([]);
  const [filters, setFilters] = useState({});
  const [isFilterOptionsVisible, setIsFilterOptionsVisible] = useState(false);
  const [enteredWord, setEnteredWord] = useState("");

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
    } else if (articles === 'Brebis') {
      setFilters({
        Race: true,
        Type: false,
        Prix: true,
        Poids: false,
        Age: true,
        State: true,
      });
    } else if (articles === 'Poulailler Engraissement') {
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
      enteredWord: enteredWord
    });
  }, [price, race, type, age, weight, stat, enteredWord]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setIsFilterOptionsVisible(false);
      } else {
        setIsFilterOptionsVisible(true);
      }
    };

    const handleClickOutside = (event) => {
      const filterButton = document.querySelector('.filter-button');
    
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        event.target !== filterButton
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
          <div className="teya"> 
          <Search setEnteredWord={setEnteredWord} enteredWord={enteredWord}></Search>
          <button
            className={`filter-button ${isFilterOptionsVisible ? 'clicked' : ''}`}
            onClick={toggleFilterOptions}
          >
            {language === "fr" ? "Filtrer" : "فرز"}<FilterAltOutlinedIcon />
          </button>
          </div>
        )}
        {(isFilterOptionsVisible || window.innerWidth >= 992) && (
          <div className="filter-options">
            <Search setEnteredWord={setEnteredWord} enteredWord={enteredWord}></Search>
            {filters.Prix && <Price articles={articles} setPrice={setPrice} />}
            {filters.Race && <Race setRace={setRace} />}
            {filters.Type && <Type setType={setType} />}
            {filters.Age && <Age articles={articles} setAge={setAge} />}
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
