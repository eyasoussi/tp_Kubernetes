import React, {useState} from 'react';
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

export default function Shop() {
    const myTabs = ["poulaier", "ovin"];
    const [activeFilter, setActiveFilter] = useState(myTabs[0]); // State to keep track of active filter
    const [isLoading, setIsLoading] = useState(true);
    const handleFilterClick = (filter) => {
        setActiveFilter(filter); // Update the active filter state when a filter is clicked
    };

    const loadingEffect = () => {
       let id = setInterval(()=>{
            setIsLoading(false);
        },2000)
    }
    
  return (
    <div>
        {isLoading && <Preloader/>}
        <Header />
        <InfoBar/>
        <section class="shop spad">
            <div class="container">
                <div class="row">
                <MyContext.Provider value={{ activeFilter, handleFilterClick}}>
                    <ActiveTabs 
                        myTabs = {myTabs}
                    >
                    </ActiveTabs>
                </MyContext.Provider>
                </div>
                { activeFilter ==='poulaier' && <Poulaier/>}
                { activeFilter ==='ovin' && <Ovin/>}
            </div>
        </section>  
    <Footer />
    <Modal />
    <JsScripts />
    </div>
  )
}
