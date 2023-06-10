import React, {useState, useEffect} from 'react'
import Sidebar from './sidebar/Sidebar';
import Search from './sidebar/Search';
import MainShop from './main-shop/MainShop';

export default function OvinB({data}) {
    const [allFilters, setAllFilters] = useState({});
    const[filteredData, setFilteredData] = useState({});

    useEffect(()=>{
        console.log("hey here are all the filters: ", allFilters);
         //doTheFilteringHere
         setFilteredData(data);
    },[allFilters]);

  return (
    <div className="row">
        <div className="col-lg-3"> 
            <div className="shop__sidebar"> 
                <Search/>
                <Sidebar setAllFilters={setAllFilters} articles={"Ovin B"}/>     
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
