import React from 'react'
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';


export default function Search() {
  const { language } = useContext(LanguageContext);

  const placeholder = {
    "fr": {
      "Search": "Search..."
    },
    "ar": {
      "Search": "ابحث..."
    }
  }
  return (
    
        <div className="shop__sidebar__search">
            <form action="#">
                <input type="text" placeholder={placeholder[language]["Search"]}/>
                <button type="submit"><span className="icon_search"></span></button>
            </form>
        </div>
  )
}
