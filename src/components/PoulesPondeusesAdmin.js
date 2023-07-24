import React, {useState, useEffect} from 'react'
import Sidebar from './sidebarAdmin/Sidebar';
import Search from './sidebar/Search';
import MainShop from './admin-shop/MainShop';
import { applyFilters } from '../methods';

export default function PoulesPondeuses({data}) {
    const [allFilters, setAllFilters] = useState({});
    const[filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const filteredRes = applyFilters(data, allFilters);
        setFilteredData(filteredRes);
    }, [allFilters, data]);

  return (
    <div>
            <div className="shop__sidebar"> 
                <Sidebar setAllFilters={setAllFilters} articles={"Agnelles"}/>     
            </div>
            <div className="shop__product__option">
                <MainShop filteredData={filteredData}/>
            </div>  
    </div>
  )
}
