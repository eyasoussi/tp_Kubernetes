import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar/Sidebar';
import Search from './sidebar/Search';
import MainShop from './main-shop/MainShop';
import { applyFilters } from '../methods';

export default function Ovin({data}) {
    const [allFilters, setAllFilters] = useState({});
    const [filteredData, setFilteredData] = useState(data);


    useEffect(() => {
      const filteredRes = applyFilters(data, allFilters);
      setFilteredData(filteredRes);
      console.log(filteredData); // Accessible, but will log the initial state of filteredData
      console.log(allFilters);
  }, [allFilters, data]);

  return (
    <div className="row">
        <div className="col-lg-3"> 
            <div className="shop__sidebar"> 
                <Search/>
                <Sidebar setAllFilters={setAllFilters} articles={"Ovin Engraissement"}/>     
            </div>
        </div>
        <div className="col-lg-9">
            <div className="shop__product__option">
                <MainShop filteredData={filteredData}/>
            </div>  
        </div>
     </div>
  )
}
