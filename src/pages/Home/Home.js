import React, {useEffect, useContext,useState, createContext} from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import JsScripts from '../../components/JsScripts';
import Preloader from '../../components/Preloader';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ActiveTabs from '../../components/ActiveTabs';
import MyContext from '../../context';

export default function Home() {
    const myTabs = ["advice_alfa", "advice_elevage", "advice_vaccin"];
    const [activeFilter, setActiveFilter] = useState(myTabs[0]); // State to keep track of active filter

    const handleFilterClick = (filter) => {
        setActiveFilter(filter); // Update the active filter state when a filter is clicked
    };

  return (
        <div>
        <Preloader/>
        <Header />
        <section className="hero">
            <AwesomeSlider>
                <div data-src="img/hero/hero-1.jpg" />
                <div data-src="img/hero/hero-1.jpg" />
            </AwesomeSlider>   
        </section>

    <section class="banner spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 offset-lg-4">
                    <div class="banner__item">
                        <div class="banner__item__pic">
                            <img src="img/banner/banner-1.jpg" alt=""/>

                        </div>
                        <div class="banner__item__text">
                            <h2>Nouvel arrivage 2022</h2>
                            <a href="#">Achetez maintenant</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="banner__item banner__item--middle">
                        <div class="banner__item__pic">
                            <img src="img/banner/banner-2.jpg" alt=""/>
                        </div>
                        <div class="banner__item__text">
                            <h2>Accessories</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="banner__item banner__item--last">
                        <div class="banner__item__pic">
                            <img src="img/banner/banner-3.jpg" alt=""/>
                        </div>
                        <div class="banner__item__text">
                            <h2>Shoes Spring 2030</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="product spad">
        <div className="container">
            <div className="row">
    <MyContext.Provider value={{ activeFilter, handleFilterClick}}>
            <ActiveTabs 
                myTabs = {myTabs}
            >
            </ActiveTabs>
        </MyContext.Provider>
        </div>
        </div>
        </section>
    <Footer />
    <Modal />
    <JsScripts />
    </div>
  )
}