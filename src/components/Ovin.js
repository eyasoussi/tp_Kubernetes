import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar/Sidebar';
import Search from './sidebar/Search';
import MainShop from './main-shop/MainShop';

export default function Ovin({data}) {
    const [allFilters, setAllFilters] = useState({});
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        // Apply filters to data and update filteredData
        const applyFilters = () => {
        let filteredResults = data;

        if (allFilters.price) {
            const [minPrice, maxPrice] = allFilters.price;
            filteredResults = filteredResults.filter(
              (item) => item.price >= minPrice && item.price <= maxPrice
            );
        }
        if (allFilters.race && allFilters.race.length > 0) {
            // Apply race filter logic
            filteredResults = filteredResults.filter(
              (item) => allFilters.race.includes(item.race)
            );
        }
        if (allFilters.type && allFilters.type.length > 0) {
            // Apply race filter logic
            filteredResults = filteredResults.filter(
              (item) => allFilters.type.includes(item.type)
            );
        }
        if (allFilters.age && allFilters.age.length > 0) {
            // Apply race filter logic
            filteredResults = filteredResults.filter(
              (item) => allFilters.age.includes(item.age)
            );
        }
        if (allFilters.weight) {
            const [minWeight, maxWeight] = allFilters.weight;
            filteredResults = filteredResults.filter(
              (item) => item.price >= minWeight && item.price <= maxWeight
            );
          }
        if (allFilters.stat && allFilters.stat.length > 0) {
            // Apply race filter logic
            filteredResults = filteredResults.filter(
              (item) => allFilters.stat.includes(item.stat)
            );
        }

        setFilteredData(filteredResults);
        };

        console.log(filteredData); // Accessible, but will log the initial state of filteredData

        // Call the applyFilters function whenever allFilters and (data??) changes
        applyFilters();
    }, [allFilters, data]);
    console.log(allFilters)

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
