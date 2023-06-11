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
import Poulaier from '../../components/Poulaier';
import Ovin from '../../components/Ovin';
import OvinB from '../../components/OvinB';
import PoulaierB from '../../components/PoulaierB';
import { getObjectsByCategory } from '../../methods';

export default function Shop() {
    const myTabs = ["Ovin Engraissement", "Ovin B", "Poulaier Engraissement", "Poulaier B"];
    const [activeFilter, setActiveFilter] = useState(myTabs[0]); // State to keep track of active filter
    const [isLoading, setIsLoading] = useState(true);
    const handleFilterClick = (filter) => {
        setActiveFilter(filter); // Update the active filter state when a filter is clicked
    };
    const [data, setData] = useState([]);
    const [ovinData, setOvinData] = useState([]);
    const [ovinBData, setOvinBData] = useState([]);
    const [poulaierData, setPoulaierData] = useState([]);
    const [poulaierBData, setPoulaierBData] = useState([]);
    const loadingEffect = () => {
        let id = setInterval(() => {
            setIsLoading(false);
        }, 2000)
    }

    const fetchData = async () => {
        try {
            const response = await axios.get('/dummy.json');
            const data = response.data;
            setData(data.articles);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (Object.keys(data).length === 0) {
            fetchData();
        }
        let filteredData = getObjectsByCategory(data, "Ovin Engraissement");
        setOvinData(filteredData);
        filteredData = getObjectsByCategory(data, "Ovin B")
        setOvinBData(filteredData);
        filteredData = getObjectsByCategory(data, "Poulaier Engraissement")
        setPoulaierData(filteredData);
        filteredData = getObjectsByCategory(data, "Poulaier B");
        setPoulaierBData(filteredData);
    }, [data])


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
                    {activeFilter === 'Ovin B' && <OvinB data={ovinBData} />}
                    {activeFilter === 'Poulaier Engraissement' && <Poulaier data={poulaierData} />}
                    {activeFilter === 'Poulaier B' && <PoulaierB data={poulaierBData} />}
                </div>
            </section>
            <Footer />
            <Modal />
            <JsScripts />
        </div>
    )
}
