import React, { useEffect, useState } from 'react'
import './styles.css';
import Category from './Category'
import State from './State'
import Price from './Price'
import Weight from './Weight'
import Type from './Type'
import Race from './Race'
import Age from './Age'


export default function Sidebar() {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [race, setRace] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [state, setState] = useState("");

  useEffect(()=>{
    console.log("category changed: ", category);
  },[category,type,race,price,weight,age,state]);
  
  return (
    <div>
        <div class="shop__sidebar__accordion">
            <div class="accordion" id="accordionExample">
                <Category setCategory={setCategory}/>
                <Type setType={setType}/>
                <Race setRace={setRace}/>
                <Price setPrice={setPrice}/> 
                <Weight setWeight={setWeight}/>
                <Age setAge={setAge}/>
                <State state={setState}/>
            </div>
        </div>
    </div>
  )
}
