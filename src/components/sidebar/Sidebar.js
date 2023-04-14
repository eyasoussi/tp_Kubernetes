import React from 'react'
import Category from './Category'
import State from './State'
import Price from './Price'
import Weight from './Weight'
import Type from './Type'
import Race from './Race'
import Age from './Age'


export default function Sidebar() {
  return (
    <div>
        <div class="shop__sidebar__accordion">
            <div class="accordion" id="accordionExample">
                <Category/>
                <Type/>
                <Race/>
                <Price/>
                <Weight/>
                <Age/>
                <State/>
            </div>
        </div>
    </div>
  )
}
