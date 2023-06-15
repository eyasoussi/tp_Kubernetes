import React , {Children, useState, useContext} from 'react'
import MyContext from '../context';
import AdviceAlfa from './AdviceAlfa';
import AdviceElevage from './AdviceElevage';
import AdviceVaccin from './AdviceVaccin';


export default function ActiveTabs(props) {
    const { activeFilter, handleFilterClick } = useContext(MyContext);
    // const tabs = props.myTabs;
    return (
                <div className="col-lg-12">
                    <ul className="filter__controls">
                        {props.myTabs.map(element => (
                            <li 
                            key={element}
                            className={activeFilter === element ? 'active' : ''}
                            onClick={() => handleFilterClick(element)}
                            >
                            {element}
                            </li>
                        ))}
                    </ul>

                    {/* Render different views based on active filter */}
                {activeFilter === 'advice_alfa' && <AdviceAlfa />}
                {activeFilter === 'advice_elevage' && <AdviceElevage />}
                {activeFilter === 'advice_vaccin' && <AdviceVaccin />}
                </div>
           
  )
}

