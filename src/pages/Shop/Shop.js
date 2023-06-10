import React, {useEffect, useState} from 'react';
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
export default function Shop() {
    const myTabs = ["Ovin Engraissement", "Ovin B", "Poulaier Engraissement", "Poulaier B"];
    const [activeFilter, setActiveFilter] = useState(myTabs[0]); // State to keep track of active filter
    const [isLoading, setIsLoading] = useState(true);
    const handleFilterClick = (filter) => {
        setActiveFilter(filter); // Update the active filter state when a filter is clicked
    };
    const [data, setData] = useState({});

    const loadingEffect = () => {
       let id = setInterval(()=>{
            setIsLoading(false);
        }, 2000)
    }
    
    const fetchData = async () => {
        try {
          const response = await axios.get('https://dummyjson.com/products');
          const data = response.data;
          setData(data);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(()=>{
        fetchData();
    },[])
   
    
  return (
    <div>
        {isLoading && <Preloader/>}
        <Header />
        <InfoBar/>
        <section className="shop spad">
            <div className="container">
                <div className="row">
                <MyContext.Provider value={{ activeFilter, handleFilterClick}}>
                    <ActiveTabs 
                        myTabs = {myTabs}
                    >
                    </ActiveTabs>
                </MyContext.Provider>
                </div>
                { activeFilter ==='Ovin Engraissement' && <Ovin data={data} />}
                { activeFilter ==='Ovin B' && <OvinB data={data} />}
                { activeFilter ==='Poulaier Engraissement' && <Poulaier data={data} />}
                { activeFilter ==='Poulaier B' && <PoulaierB data={data} />}
            </div>
        </section>  
    <Footer />
    <Modal />
    <JsScripts />
    </div>
  )
}
