import React, { useEffect, useState } from 'react'
import './styles.css';
import Category from './Category'
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
  const [stat, setStat] = useState("");
  const [filters, setFilters] = useState({});

  useEffect(() => {
      if(articles === "Ovin Engraissement") {
          setFilters({
            Race: true,
            Type: false,
            Prix: true,
            Poids: true,
            Age: true,
            Stat: false
          })
      }
      else if(articles === "Ovin B") {
        setFilters({
          Race: true,
          Type: false,
          Prix: true,
          Poids: false,
          Age: true,
          Stat: true
        })
      }
      else if(articles === "Poulaier Engraissement") {
        setFilters({
          Race: false,
          Type: true,
          Prix: true,
          Poids: true,
          Age: true,
          Stat: false,
        })
      }
      else {
        setFilters({
          Race: false,
          Type: true,
          Prix: true,
          Poids: false,
          Age: true,
          Stat: true,
        })
      }
  },[articles])

  console.log("hey I am ", articles, " my filters are ",filters);
  useEffect(()=>{
    console.log("category changed: ", category);
  },[category,type,race,price,weight,age,stat]);
  
  return (
    <div>
        <div className="shop__sidebar__accordion">
            <div className="accordion" id="accordionExample">
                {filters.Race && <Race setRace={setRace}/>}
                {filters.Type && <Type setType={setType}/>}
                {filters.Prix && <Price setPrice={setPrice}/>}
                {filters.Poids && <Weight setWeight={setWeight}/>}
                {filters.Age && <Age setAge={setAge}/>}
                {filters.Stat && <State stat={setStat}/>} 
                <Category setCategory={setCategory}/>
            </div>
        </div>
    </div>
  )
}
