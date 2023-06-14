import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import JsScripts from '../../components/JsScripts';
import Preloader from '../../components/Preloader';
import MyContext from '../../context';
import ActiveTabs from '../../components/ActiveTabs';
import InfoBar from '../../components/InfoBar';
import Poulailler from '../../components/Poulailler';
import Ovin from '../../components/Ovin';
import Brebis from '../../components/Brebis';
import PoulesPondeuses from '../../components/PoulesPondeuses';
import { getObjectsByCategory } from '../../methods';

export default function Shop() {
    const myTabs = ["Ovin Engraissement", "Brebis", "Poulailler Engraissement", "Poules Pondeuses"];
    const [activeFilter, setActiveFilter] = useState(myTabs[0]); // State to keep track of active filter
    const [isLoading, setIsLoading] = useState(true);
    const handleFilterClick = (filter) => {
        setActiveFilter(filter); // Update the active filter state when a filter is clicked
    };
    const [data, setData] = useState([]);
    const [ovinData, setOvinData] = useState([]);
    const [BrebisData, setBrebisData] = useState([]);
    const [PoulaillerData, setPoulaillerData] = useState([]);
    const [PoulesPondeusesData, setPoulesPondeusesData] = useState([]);

    const fetchData = () => {
        axios
          .get('/dummy.json')
          .then((response) => {
            const data = response.data;
            setData(data.articles);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
          });
      };
    
    useEffect(() => {
        if(data.length===0){
        fetchData();
        }
        let filteredData = getObjectsByCategory(data, "Ovin Engraissement");
        setOvinData(filteredData);
        filteredData = getObjectsByCategory(data, "Brebis")
        setBrebisData(filteredData);
        filteredData = getObjectsByCategory(data, "Poulailler Engraissement")
        setPoulaillerData(filteredData);
        filteredData = getObjectsByCategory(data, "Poules Pondeuses");
        setPoulesPondeusesData(filteredData);
        setIsLoading(false);
    }, [data])
    
    let oData = getObjectsByCategory(data, "Ovin Engraissement");

    return (
        <div>
            {isLoading && <Preloader />}
            <Header />
            <InfoBar />
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <MyContext.Provider value={{ activeFilter, handleFilterClick }}>
                            <ActiveTabs
                                myTabs={myTabs}
                            >
                            </ActiveTabs>
                        </MyContext.Provider>
                    </div>
                    {activeFilter === 'Ovin Engraissement' && <Ovin data={ovinData} />}
                    {activeFilter === 'Brebis' && <Brebis data={BrebisData} />}
                    {activeFilter === 'Poulailler Engraissement' && <Poulailler data={PoulaillerData} />}
                    {activeFilter === 'Poules Pondeuses' && <PoulesPondeuses data={PoulesPondeusesData} />}
                </div>
            </section>
            <Footer />
            <Modal />
            <JsScripts />
        </div>
    )
}
