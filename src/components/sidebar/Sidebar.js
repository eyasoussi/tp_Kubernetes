import React, { useEffect, useState } from 'react'
import './styles.css';
import State from './State'
import Price from './Price'
import Weight from './Weight'
import Type from './Type'
import Race from './Race'
import Age from './Age'


export default function Sidebar({articles}) {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [race, setRace] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [filters, setFilters] = useState({});

  useEffect(() => {
      if(articles === "Ovin Engraissement") {
          setFilters({
            Race: true,
            Type: false,
            Prix: true,
            Poids: true,
            Age: true,
            State: false
          })
      }
      else if(articles === "Ovin B") {
        setFilters({
          Race: true,
          Type: false,
          Prix: true,
          Poids: false,
          Age: true,
          State: true
        })
      }
      else if(articles === "Poulaier Engraissement") {
        setFilters({
          Race: false,
          Type: true,
          Prix: true,
          Poids: true,
          Age: true,
          State: false,
        })
      }
      else {
        setFilters({
          Race: false,
          Type: true,
          Prix: true,
          Poids: false,
          Age: true,
          State: true,
        })
      }
  },[articles])

  console.log("hey I am ", articles, " my filters are ",filters);
  useEffect(()=>{
    console.log("category changed: ", category);
  },[category,type,race,price,weight,age,state]);
  
  return (
    <div>
        <div className="shop__sidebar__accordion">
            <div id="accordionExample">
                {filters.Prix && <Price articles={articles} setPrice={setPrice}/>}
                {filters.Race && <Race setRace={setRace}/>}
                {filters.Type && <Type setType={setType}/>}
                {filters.Age && <Age setAge={setAge}/>}
                {filters.Poids && <Weight articles={articles} setWeight={setWeight}/>}
                {filters.State && <State state={setState}/>} 
            </div>
        </div>
    </div>
  )
}