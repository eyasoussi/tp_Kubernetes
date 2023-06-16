import React, { useEffect, useContext, useState, createContext } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import JsScripts from '../../components/JsScripts';
import Preloader from '../../components/Preloader';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ActiveTabs from '../../components/ActiveTabs';
import MyContext from '../../context';
import { LanguageContext } from '../../LanguageContext';
import { Link } from 'react-router-dom';
import routes from '../../routes';

export default function Home() {
    const myTabs = ["advice_alfa", "advice_elevage", "advice_vaccin"];
    const { language } = useContext(LanguageContext);
    const [activeFilter, setActiveFilter] = useState(myTabs[0]); // State to keep track of active filter

    const HomeTranslations = {
        "fr": {
            "Nouvel arrivage 2023": "Consultez Nos Produits Pour L'année 2023",
            "Achetez maintenant": "Achetez maintenant",
            "Ovins & Brebis": "Ovins & Brebis",
            "Consultez Notre Shop": "Consultez Notre Shop",
            "Poulailler & Poules Pondeuses": "Poulailler & Poules Pondeuses",
            "Contactez Nous": "Contactez Nous",
        },
        "ar": {
            "Nouvel arrivage 2023": "تعرف على منتوجاتنا لسنة 2023",
            "Achetez maintenant": "اشتر الآن",
            "Ovins & Brebis": "أغنام و نِعاج",
            "Consultez Notre Shop": "تصفح متجرنا",
            "Poulailler & Poules Pondeuses": "دواجن و دجاج للبيض",
            "Contactez Nous": "اتصل بنا ",
        }
    }

    const handleFilterClick = (filter) => {
        setActiveFilter(filter); // Update the active filter state when a filter is clicked
    };

    return (
        <div>
            <Preloader />
            <Header />
            <section className="hero">
                <AwesomeSlider>
                    <div data-src="https://scontent.ftun4-2.fna.fbcdn.net/v/t1.15752-9/256779859_213304307500755_4805841473852462713_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=PwGwkKQlBzQAX8PcMS1&_nc_ht=scontent.ftun4-2.fna&oh=03_AdTey-4_3YWe_8inhAV6glbteLoxJc0jlW09YIkwEVziqw&oe=64B37421" />
                    <div data-src="https://scontent.ftun4-2.fna.fbcdn.net/v/t1.15752-9/354671672_250588797603709_4163798981858942408_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=jqPBa6NSqrUAX9E19ED&_nc_ht=scontent.ftun4-2.fna&oh=03_AdQ5Q3n_THaFLkcqN3pw5s7ui3F2PPzRUKyt7PtjQSr-9A&oe=64B3690D" />
                </AwesomeSlider>
            </section>

            <section className="banner spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-4">
                            <div className="banner__item">
                                <div className="banner__item__pic">
                                    <img src="img/banner/banner-1.jpg" alt="" />

                                </div>
                                <div className="banner__item__text">
                                    <h2>{HomeTranslations[language]["Nouvel arrivage 2023"]}</h2>
                                    <Link to={routes.SHOP}>
                                        {HomeTranslations[language]["Achetez maintenant"]}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" style={{paddingBottom:"0px", marginBottom:"0px"}}>
                            <div className="banner__item">
                                <div className="banner__item__pic">
                                    <img src="img/banner/banner-4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner__item__text" style={{paddingBottom:"40px"}}>
                                    <h2>{HomeTranslations[language]["Ovins & Brebis"]}</h2>
                                    <Link to={routes.SHOP}>
                                        {HomeTranslations[language]["Consultez Notre Shop"]}
                                    </Link>
                                </div>
                        </div>
                        <div className="col-lg-7 offset-lg-4">
                            <div className="banner__item">
                                <div className="banner__item__pic">
                                    <img src="img/banner/banner-3.jpg" alt="" />
                                </div>
                                <div className="banner__item__text">
                                    <h2>{HomeTranslations[language]["Poulailler & Poules Pondeuses"]}</h2>
                                    <Link to={routes.ABOUTUS}>
                                        {HomeTranslations[language]["Contactez Nous"]}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <MyContext.Provider value={{ activeFilter, handleFilterClick }}>
                            <ActiveTabs
                                myTabs={myTabs}
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
